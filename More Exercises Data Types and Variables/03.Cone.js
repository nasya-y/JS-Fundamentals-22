function solve(radius,height){

    let volume=Math.PI*(radius*radius)*(height/3)
    let totalAreaSurface= 
    Math.PI*radius*(radius+(Math.sqrt(radius*radius+height*height)))


    console.log(`volume = ${volume.toFixed(4)}`);
    console.log(`area = ${totalAreaSurface.toFixed(4)}`);

}

solve(3,5)
solve(3.3,7.8)