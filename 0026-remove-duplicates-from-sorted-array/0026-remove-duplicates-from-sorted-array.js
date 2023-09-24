/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    const result = [nums[0]]
    for(let i=1; i<nums.length; i++){
        if(result[result.length-1] < nums[i]){
            result.push(nums[i])
        }
    }
    for(let i=0; i<result.length; i++){
        nums[i] = result[i]
    }
    return result.length
};