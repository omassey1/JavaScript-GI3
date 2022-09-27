var sharePizza = cutPizzaSlices(8);

function cutPizzaSlices(v)
{
    return v;
   
}


function sharePizza2(x)
{
   
   document.write("Each person gets " + parseFloat(sharePizza/x).toFixed(2) + " slices of pizza")
   return parseFloat(sharePizza/x).toFixed(2);
}
console.log(sharePizza2(2));

console.log(sharePizza2(3));