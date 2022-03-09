class Solution:
    def subsets(self, nums: List[int]) -> List[List[int]]:
        result = [[]]
        for num in nums:
            numIncluded = []
            for arr in result:
                numIncluded.append(arr + [num])
            result += numIncluded
        return result        
        