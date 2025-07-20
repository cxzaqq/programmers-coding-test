// 자리수 만들기

package lv1.java;

public class test018 {
    public static void main(String[] args) {
        int result1 = solution(123);
        int result2 = solution(978);

        System.out.println(result1 == 6 && result2 == 24 ? "pass" : "fail");
    }

    public static int solution(int n) {
        int sum = 0;
        int len = Integer.toString(n).length();
        for (int i = 1; i <= len; i++) {
            sum += n % 10;
            n /= 10;
        }

        return sum;
    }

    public static int solution2(int n) {
        int sum = 0;
        while (n > 0) {
            sum += n % 10;
            n /= 10;
        }

        return sum;
    }
}
