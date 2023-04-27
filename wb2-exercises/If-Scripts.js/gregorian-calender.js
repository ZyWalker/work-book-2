var year = 2800;

if (year%4 ==0 && year%100!=0 || year%4 ==0 && year%400==0) {
    console.log("This year leaps");
}
else {
    console.log("This year cant jump");
}
