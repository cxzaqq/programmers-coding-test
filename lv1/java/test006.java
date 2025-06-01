// 두 정수 사이의 합

package lv1.java;

public class test006 {
    public static void main(String[] args) {
        long result1 = test006.solution(3, 5);
        long result2 = test006.solution(3, 3);
        long result3 = test006.solution(5, 3);

        System.out.println("result1: " + result1);
        System.out.println("result2: " + result2);
        System.out.println("result3: " + result3);
        System.out.println(result1 == 12 && result2 == 3 && result3 == 12 ? "pass" : "fail");
    }

    public static long solution(int a, int b) {
        long answer = 0;
        for (int i = (a < b ? a : b); i <= (b > a ? b : a); i++) answer += i;
        return answer;
    }

    public static long solution2(int a, int b) {
        if (a > b) {
            int temp = a;
            a = b;
            b = temp;
        }
        return (long) (b - a + 1) * (a + b) / 2;
    }
}
