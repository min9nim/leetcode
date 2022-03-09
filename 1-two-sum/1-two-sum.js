/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const hashTable = {}
    for(let i=0; i < nums.length; i++){
        const pairIndex = hashTable[nums[i]]
        if(pairIndex === undefined){
            hashTable[target - nums[i]] = i
        }else{
            return [pairIndex, i]
        }
    }
};