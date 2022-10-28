const palindromes = function (str) {
    
    string = str.replace(/[!,. ]/gi,'')
    string=string.toLowerCase()
    if ( string == reverse(string) ) { return true}
    else { return false}

    function reverse(s){
        return s.split("").reverse().join("");
    }
    
};



// Do not edit below this line
module.exports = palindromes;



