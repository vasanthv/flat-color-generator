const flatuicolor = require('./');
const breakWithErr = (err) => {
    console.error(err);
    process.exit(1);
};


const color = flatuicolor();

console.log(color);

if( !color.h || 
    !color.s ||
    !color.v ||
    !color.r || 
    !color.g ||
    !color.b ||
    !color.hex    
){
    breakWithErr('Missing a property');
}