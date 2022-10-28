const reverseString = function(str) {
    
    size=str.length;
    ans=''
    if ( str == '') { return ans }
    for (i=size-1; i >=0; i-- ) {
        ans=ans+str.substr(i,1)
    }

    return ans
};

// Do not edit below this line
module.exports = reverseString;

