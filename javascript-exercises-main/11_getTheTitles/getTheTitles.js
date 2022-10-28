const getTheTitles = function(obj) {
    size=obj.length
    ans=[]
    for (i=0; i < size; i++) {
        ans[i]=obj[i].title
    }

  return ans
};

// Do not edit below this line
module.exports = getTheTitles;