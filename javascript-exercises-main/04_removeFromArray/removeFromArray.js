const removeFromArray = function(arr) {
    let args = Array.from(arguments);
    
    for ( i=1 ; i < args.length; i++ )  {

        index=arr.findIndex(checkElement);
        if ( index > -1 ) {
            arr.splice(index,1)
        }
          

    }

    function checkElement(num) {
        return num===args[i]
    }

   
    return arr

};

// Do not edit below this line
module.exports = removeFromArray;

//console.log(removeFromArray([1,2,3,4],3))