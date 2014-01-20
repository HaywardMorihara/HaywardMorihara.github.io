package org.psnbtech;

import java.util.ArrayList;
import java.util.Arrays;

/**
 * The {@code Player} class is responsible for implementing the AI that plays Tetris.
 * @author Nathaniel Morihara, Christina Hardin, and Alex Abad
 *
 */
public class Bart {
	
	/*
	 * Constructor for Bart, never actually used
	 */
	public Bart(){
	}
	
	/*
	 * Gets a grid of the board with all the blocks that have already been laid
	 */
	private static int[][] getGrid(BoardPanel board)
    {
        int[][] grid = new int[BoardPanel.COL_COUNT][BoardPanel.ROW_COUNT];
        
        for(int r = 0; r<BoardPanel.ROW_COUNT; r++)
        {
            for(int c = 0; c<BoardPanel.COL_COUNT; c++)
            {
                if(board.isOccupied(c,r)){
                    grid[c][r] = 1;
                }else{
                    grid[c][r] = 0;
                }
            }
        }
        return grid; 
    }
	
	
	/*
	 * Gets a possible board grid at the current column (n) and rotation (rot)
	 */
	private static int[][] getPossibleGrid(BoardPanel board, TileType type, int n, int rot){
		int[][] grid = getGrid(board);
		
		int x = n-type.getLeftInset(rot);
		
		int ny=0;
		while(board.isValidAndEmpty(type,x,ny,rot)){
			ny++;
		}
		if(!board.isValidAndEmpty(type,x,ny,rot)){
			ny--;
		}
		
		int y = ny;
		
		for(int col = 0; col < type.getDimension(); col++) {
			for(int row = 0; row < type.getDimension(); row++) {
				if(type.isTile(col, row, rot) && col+x<BoardPanel.COL_COUNT && row+y<BoardPanel.ROW_COUNT && col+x>=0 && row+y>=0) {
					grid[col+x][row+y]=2;
				}
			}
		}
		return grid;
	}

	/*
	 * Finds all possible grids for the current piece on the current board
	 */
	public static ArrayList<int[][]> getAllPossibleGrids(BoardPanel board, TileType type){
		ArrayList<int[][]> output = new ArrayList<int[][]>();
		
		int rmax;
		switch(type){
		case TypeO:
			rmax = 1;
			break;
		case TypeI: case TypeS: case TypeZ:
			rmax = 2;
		break;
		default:
			rmax=4;
			break;
		}

		for(int r = 0; r<rmax; r++){
			for(int n=0; n<BoardPanel.COL_COUNT-type.getDimension()+type.getRightInset(r)+type.getLeftInset(r);n++){
				if(getPossibleGrid(board,type,n,r)!=null)
					output.add(getPossibleGrid(board,type,n,r));
			}
		}
		return output;
	}
	
	/*
	 * Prints the grid
	 */
	public static void printGrid(int[][] input){
		int[][] grid = input;
        for(int r = 0; r<input[0].length; r++)
        {
            for(int c = 0; c<input.length; c++)
            {
                if(grid[c][r]==1){
                    System.out.print(1);
                }else if(grid[c][r]==2){
                	System.out.print(2);
                }else{
                    System.out.print(0);
                }
            }
            System.out.println(); 
        }
        System.out.println();
	}
	
	/*
	 * Prints a list of grids
	 */
	public static void printGrids(ArrayList<int[][]> grids){
		for(int i=0;i<grids.size();i++){
			printGrid(grids.get(i));
			calculateScore(grids.get(i));
		}
		System.out.println("Number of possible boards is: "+grids.size());
	}
	
	/*
	 * Helper function to find how many neighboring tiles there are to a tile
	 * Counts walls and the floor as neighbors
	 */
	private static int getNeighbors(int x, int y, int[][] board){
		int output = 0;
		
		for(int i=x-1;i<x+2;i++){
			for(int j = y-1;j<y+2;j++){
				if(j>=0){
					if(i<0 || i>9 || j>21 || board[i][j]!=0 )
						output++;
				}
			}
		}		
		return output;
	}
	
	/*
	 * Calculates the score of a grid
	 */
	private static int calculateScore(int[][] grid){
		//Bart v19.0
		
		//height of the board (-)
		int w1 = -3;
		//holes in the board (-)
		int w2 = -3;
		//blocks causing a hole (blockages) (-)
		int w3 = -1;
		//filled line (+)
		int w4 = 3;
		//filling in spaces (+) counts the tiles making up the block and all ones
		//touching it, including walls and floors
		int w5 = 2;
		//tile touching wall (+)
		int w6 = 0;
		//tile touching floor (+)
		int w7 = 0;
		//spaces below piece added (-)
		int w8 = -6;
		
        int maxHeight = 0;
		int holes = 0;
		int blockades = 0;
		int filledLines = 0;
		int tilesInRow=0;
		int tiles = 0;
		int walls = 0;
		int floors = 0;
		int spaces = 0;
		for(int y=0;y<grid[0].length;y++){
			tilesInRow=0;
			for(int x=0;x<grid.length;x++){
				if(grid[x][y]==0){
					if((getNeighbors(x,y,grid)>=2)&&y>0){
						int i = 1;
						while(y-i>=0 && grid[x][y-i]!=0){
							blockades++;
							i++;
						}
					}
				}else if(grid[x][y]==2){
					if(21-y>maxHeight){
						maxHeight=grid[0].length-y;
					}
					tilesInRow++;
					int thisWalls=0;
					int thisFloors=0;
					if(x==0 || x==9){
						thisWalls++;
					}
					if(y==21){
						thisFloors++;
					}
					tiles = tiles + getNeighbors(x,y,grid);
					walls=walls+thisWalls;
					floors=floors+thisFloors;
					int emptySpace=0;
					while(y+1+emptySpace<grid[0].length && grid[x][y+1+emptySpace]==0){
						emptySpace++;
					}
					spaces=spaces + emptySpace;
				}else{
					if(21-y>maxHeight){
						maxHeight=grid[0].length-y;
					}
					tilesInRow++;
					int emptySpace=0;
					while(y+1+emptySpace<grid[0].length && grid[x][y+1+emptySpace]==0){
						emptySpace++;
					}
					holes=holes + emptySpace;
				}
			}
			if(tilesInRow==grid.length){
				filledLines++;
			}
		}
		
		int newScore = w1*maxHeight + w2*holes + w3*blockades + w4*filledLines + w5*tiles + w6*walls + w7*floors+w8*spaces;
		return newScore;
	}
	
	/*
	 * Finds the best possible grid for a board given the current piece
	 */
	public static int[][] findBestGrid(BoardPanel board, TileType type){
		ArrayList<int[][]> possibleBoards = getAllPossibleGrids(board,type);
		int maxValue = Integer.MIN_VALUE;
		int[][] maxBoard = possibleBoards.get(0);
		for(int i=0;i<possibleBoards.size();i++){
			if(maxValue<calculateScore(possibleBoards.get(i))){
				maxValue=calculateScore(possibleBoards.get(i));
				maxBoard=possibleBoards.get(i);
			}
		}
		return maxBoard;
	}
	
	/*
	 * Helper function to check if two grids are equal
	 */
	private static boolean gridsEqual(int[][] grid1, int[][] grid2){
		for(int i=0;i<grid1.length;i++){
			if(!Arrays.equals(grid1[i], grid2[i]))
				return false;
		}
		return true;
	}
	
	/*
	 * Outputs an integer that tells the game how to move the piece.
	 * 1 = move left
	 * 2 = move right 
	 * 3 = rotate once
	 */
	public static int move(BoardPanel board, TileType type, int col, int row, int rotation){
		
		int[][] grid = findBestGrid(board, type);
		int n = 0;
		int rot = 0;
		while(getPossibleGrid(board,type,n,rot)==null || !gridsEqual(getPossibleGrid(board,type,n,rot),grid)){
			rot++;
			if(rot>3){
				n++;
				rot=0;
			}
		}
		if(rotation<rot)
			return 3;
		else if(n-type.getLeftInset(rotation)>col)
			return 2;
		else if(n-type.getLeftInset(rotation)<col)
			return 1;
		return 0;
	}
	
}
