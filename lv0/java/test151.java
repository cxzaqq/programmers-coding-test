// 길이에 따른 연산
public class test151 {
    public static void main(String[] args) {
        int[] num_list = {3, 4, 5, 2, 5, 4, 6, 7, 3, 7, 2, 2, 1};

        int result = test151.solution(num_list);
        System.out.println(result);
    }

    public static int solution(int[] num_list) {
        int answer = 0;
        if(num_list.length > 10) {
            for(int i = 0; i < num_list.length; i++) {
                answer += num_list[i];
            }
        } else {
            answer = 1;
            for(int i = 0; i < num_list.length; i++) {
                answer *= num_list[i];
            }
        }
        return answer;
    }

    public static int solution2(int[] num_list) {
        int answer = (num_list.length < 11 ? 1 : 0);
        for(int i=0; i<num_list.length; i++){
            if(num_list.length < 11) {
                answer *= num_list[i];
            }else{
                answer += num_list[i];
            }
        }
        return answer;
    }
}
