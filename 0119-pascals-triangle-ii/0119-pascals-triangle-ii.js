/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    if(rowIndex === 0){
        return [1]
    }
    if(rowIndex === 1){
        return [1,1]
    }
    let prev = [1,1]
    let height = 2
    while(true){
        let next = [1]
        for(let i=0; i<height-1; i++){
            next.push(prev[i] + prev[i+1])
        }
        next.push(1)
        if(height === rowIndex){
            return next
        }
        prev = next
        height++
    }
};