months = ['January', 'Febraury', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']; 

var d=new Date();

var theDate = new Date(document.lastModified); 
theDate.setTime((theDate.getTime()+(60*60)));

with (theDate) { 
    document.write("<center><i>Last updated "+months[getMonth()]+' '+getDate()+', '+d.getFullYear()+"</i></center>"); 
} 