class Solution:
    def matrixBlockSum(self, mat: List[List[int]], k: int) -> List[List[int]]:
        m, n = len(mat), len(mat[0])
        D = [[0]*(n+1) for _ in range(m+1)] # 누적합 배열
        for i in range(1, m+1) :
            for j in range(1, n+1) :
                D[i][j] = mat[i-1][j-1] + D[i][j-1] + D[i-1][j] - D[i-1][j-1]
        answer = [[0]*n for _ in range(m)] # 정답 배열
        for i in range(m) : 
            for j in range(n) : 
                max_D = D[min(i+k+1, m)][min(j+k+1, n)]
                left_D = D[min(i+k+1, m)][max(j-k, 0)]
                upper_D = D[max(i-k, 0)][min(j+k+1, n)]
                upper_left_D = D[max(i-k, 0)][max(j-k, 0)]
                # print(i, j, max_D, left_D, upper_D, upper_left_D)
                answer[i][j] = max_D - upper_D - left_D + upper_left_D
        return answer

        


