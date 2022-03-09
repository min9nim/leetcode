class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        dict = {}
        for i in range(len(nums)) :
            pairIndex = dict.get(nums[i])
            if pairIndex != None:
                return [pairIndex, i]
            else :
                dict[target - nums[i]] = i