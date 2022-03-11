let overOrUnder = 110;

//if (overOrUnder >= 50) {

   // console.log("Over 50");
 if (overOrUnder < 0) {
    
    console.log("Outside Third");
}
else if (overOrUnder <= 33) {

    console.log("Bottom Third");
}
else if (overOrUnder > 33 && overOrUnder < 66 ) {
     
    console.log("Middle Third")
}
else if (overOrUnder > 67 && overOrUnder < 100) {

    console.log("Top Third");
}
else if (overOrUnder > 100) {
    console.log("Outside Third");
}