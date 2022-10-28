const sumAll = function(start,end) {
    ans=0
    if ( typeof(start) !== typeof(1)  || typeof(end) !== typeof(1)) {
        return 'ERROR'
    }
    if ( start < 0 || end < 0) {
        return 'ERROR'
    }
    if (start < end ) {
        if ( start == 0 ) { ans=start } else { ans = start - 1}
        for (i = start; i <= end ; i++) { ans = ans + i }
    }
    else {
        if ( end == 0 ) { ans=end } else { ans = end - 1} 
        for (i = end; i <= start; i++) { ans = ans + i }}


    return ans

};

// Do not edit below this line
module.exports = sumAll;
