package study.t2;

public class p6 {
    public static void main(String[] args) {
        int storage = 5141;
        int usage = 500;
        int[] change = {10, -10, 10, -10, 10, -10, 10, -10, 10, -10};

        int result = p6.solution(storage, usage, change);

        System.out.println(result);
    }

    public static int solution(int storage, int usage, int[] change) {
        int total_usage = 0;
        for(int i=0; i<change.length; i++){
            usage = usage * (100 + change[i]) / 100;
            total_usage += usage;
            if(total_usage > storage){
                return i;
            }
        }
        return -1;
    }
}
