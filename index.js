var rect ={
    perimeter:(x,y) => (2*(x+y)),
    area :(x,y)  =>(x*y)
};


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