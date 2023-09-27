/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let [sIdx, eIdx] = [0, nums.length-1]
    let pIdx

    while(true){
        pIdx = Math.floor((sIdx + eIdx)/2)
        if(nums[pIdx] === target){
            return pIdx
        }else if(nums[pIdx] < target){
            if(pIdx === eIdx){
                return eIdx + 1
            }
            if(target < nums[pIdx+1]){
              return pIdx+1  
            }
            sIdx = pIdx + 1
        }else{
            if(pIdx === sIdx){
                return 0
            }
            if(nums[pIdx-1]< target){
                return pIdx
            }
            eIdx = pIdx -1
        }
    }
};