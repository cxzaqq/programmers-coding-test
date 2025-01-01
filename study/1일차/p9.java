public class p9 {
    public static void main(String[] args) {
        String[][] board = {{"yellow", "green", "blue"}, {"blue", "green", "yellow"}, {"yellow", "blue", "blue"}};
        int h = 0;
        int w = 1;
        int result = p9.solution(board, h, w);
        
        System.out.println(result);
    }

    public static int solution(String[][] board, int h, int w) {
        int answer = 0;
        int n = board.length;
        String pickedColor = board[h][w];

        int[] dh = {0, 1, -1, 0};
        int[] dw = {1, 0, 0, -1};

        for (int i = 0; i < 4; i++) {
            int h_check = h + dh[i];
            int w_check = w + dw[i];

            if(h_check >= 0 && h_check < n && w_check >= 0 && w_check < n) {
                if(pickedColor.equals(board[h_check][w_check])) {
                    answer++;
                }
            }
        }

        return answer;
    }
}
