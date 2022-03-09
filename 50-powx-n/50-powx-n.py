class Solution:
    def myPow(self, x: float, n: int) -> float:
        if n < 0:
            x = 1/x
            n = abs(n)

        tmp = x
        res = 1
        while n:
            # print(n, tmp, res)
            if n % 2 == 1:
                res *= tmp
            tmp *= tmp
            n //= 2

        return res
