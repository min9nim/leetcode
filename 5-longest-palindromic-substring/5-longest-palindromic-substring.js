/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    const r = s.split('').reverse('').join('')
    
    for(let len = s.length; len > 0; len--){
        for(let i=0; i <= (s.length - len); i++){
            if(isPalindrome(i, i+len)){
                return s.slice(i, i+len)
            }
        }
    }
    
    function isPalindrome(start, end){
        const rStart = s.length - end
        return s.slice(start, end) === r.slice(rStart,  rStart + end - start)
    }
};




// 01234[567]89
// 01[234]56789