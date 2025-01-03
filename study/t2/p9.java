package study.t2;

public class p9 {
    public static void main(String[] args) {
        int[] wallet = {30, 15};
        int[] bill = {26, 17};

        int result = p9.solution(wallet, bill);
        System.out.println(result);
    }

    public static int solution(int[] wallet, int[] bill) {
        int answer = 0;
        while(Math.min(bill[0], bill[1]) > Math.min(wallet[0], wallet[1]) || 
                Math.max(bill[0], bill[1]) > Math.max(wallet[0], wallet[1])) {
            if(bill[0] > bill[1])
                bill[0] /= 2;
            else
                bill[1] /= 2;

            answer++;
        }
        return answer;
    }
}
