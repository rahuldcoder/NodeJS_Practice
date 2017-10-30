var rect = require('./rectangle');


function solveRect(l,b){
    console.log("Solving for rectangle with l= "+l+" breadth= "+b);
    rect (l,b,(err,rectangle) =>{
        if(err)
        {
            console.log("Error:",err.message);
        }
        else
        {
            console.log("Area of Rectangle of dimensions l ="+l+" and b= "+b+" is "+rectangle.area());
            console.log("Perimeter of Rectangle of dimensions l ="+l+" and b= "+b+" is "+rectangle.perimeter());
        }
    });
    console.log("This is after call to rect");
}
solveRect(2,4);