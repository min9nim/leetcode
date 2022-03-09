class Solution:
    def maxSubArray(self, nums):
        maxSub = nums[0]
        curSum = 0
        for n in nums:
            curSum = max(0, curSum) + n
            maxSub = max(maxSub, curSum)
        return maxSub