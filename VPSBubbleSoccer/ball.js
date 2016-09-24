function animateBall(ball) {
	var thetaRadians = Math.atan2(ball.body.velocity.y,ball.body.velocity.x);
    var thetaDegrees = thetaRadians * 180/Math.PI;
    ball.angle = thetaDegrees - 180; //backwards so needed to turn around

    if (ball.body.velocity.x == 0 && ball.body.velocity.y == 0) {
        ball.rollingBallAnim.stop();
    } else {
        var fps = Math.min(1, Math.max(Math.abs(ball.body.velocity.x),
                    Math.abs(ball.body.velocity.y)) / 200) * 20;//animation speed is specified in frames per second and has a minimum value of 1. I want the maximum frame speed to be 20, and I want to use that when the velocity of the ball is equal to or greater than 200. Velocities under 200 will calculate an animation frame rate as a ratio, but not go under 1. A velocity of 100 will result in a frame rate of 4.5, for example
        if (ball.rollingBallAnim.isPlaying) {
            ball.rollingBallAnim.speed = fps;
        } else {
            ball.rollingBallAnim.play(fps, true);
        }
    }
}