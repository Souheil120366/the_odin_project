const repeatString = function(string,num) {
    ans=''
    if ( string == '' ) { return ans }
    if ( num >= 0 ) {
        for (let i=0; i< num; i++) {
            ans=ans+string
        }
    }
    else { ans = 'ERROR'}

    return ans
};

// Do not edit below this line
module.exports = repeatString;
