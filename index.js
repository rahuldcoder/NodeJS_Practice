var rect = require('./rectangle');


function solveRect(l,b){
    console.log("Solving for rectangle with l= "+l+" breadth= "+b);
    if(l<=0 ||b <= 0){
        console.log("Rectangle's dimensions are negative");
    }
    else
    {   
        console.log("Perimeter of x = "+ rect.perimeter(l,b));
        console.log("Area of rectangle = "+rect.area(l,b));
    }
}
solveRect(2,4);