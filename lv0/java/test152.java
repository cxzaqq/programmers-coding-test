// 1로 만들기

import java.util.Arrays;

public class test152 {
    public static void main(String[] args) {
        int[] num_list = {12, 4, 15, 1, 14};

        int result = test152.solution(num_list);
        System.out.println(result);

    }

    public static int solution(int[] num_list) {
        int answer = 0;
        for(int i = 0; i < num_list.length; i++) {
            while(num_list[i] != 1) {
                if(num_list[i] % 2 == 0) {
                    num_list[i] = num_list[i] / 2;
                } else {
                    num_list[i] = (num_list[i] - 1) / 2;
                }

                answer++;
            }
        }

        return answer;
    }

    // 2진수로 바꾸면 2로 나눌 때마다 오른쪽 끝 비트가 사라짐 => 즉 홀수라고 -1 연산이 필요 없음
    // 10 => 1010
    // 5 => 101
    // 2 => 10
    // 1
    public static int solution1(int[] num_list) {
        return Arrays.stream(num_list).map(i -> Integer.toBinaryString(i).length() - 1).sum();
    }
}
