class Solution:

    def matrixBlockSum(self, mat: List[List[int]], k: int) -> List[List[int]]:
        m, n = len(mat), len(mat[0])

        accMat = []
        for i in range(m):
            accSum = 0
            accMat.append([])
            for j in range(n):
                accSum += mat[i][j]
                accMat[i].append((accMat[i-1][j] if i-1 >= 0 else 0) + accSum)

        answer = []
        for i in range(m):
            answer.append([])
            for j in range(n):
                rx = min(i+k, m - 1)
                ry = min(j+k, n - 1)
                lx = max(i-k, 0)
                ly = max(j-k, 0)
                answer[i].append(accMat[rx][ry]
                                 - (accMat[rx][ly-1] if ly-1 >= 0 else 0)
                                 - (accMat[lx-1][ry] if lx-1 >= 0 else 0)
                                 + (accMat[lx-1][ly-1]
                                    if lx - 1 >= 0 and ly-1 >= 0 else 0)
                                 )
        return answer