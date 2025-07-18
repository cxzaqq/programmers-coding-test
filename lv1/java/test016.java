// 약수의 합

package lv1.java;

public class test016 {
    public static void main(String[] args) {
        int result1 = solution(12);
        int result2 = solution(5);

        System.out.println(result1 == 28 && result2 == 6
                ? "pass"
                : "fail");
    }

    public static int solution(int n) {
        int sum = 0;

        for (int i = 1; i <= n; i++) {
            if (n % i == 0)
                sum += i;
        }

        return sum;
    }

    public static int solution2(int n) {
        int sum = 0;

        for (int i = 1; i * i <= n; i++) {
            if (n % i == 0) {
                sum += i;

                if (i != n / i) { // 중복 방지
                    sum += n / i;
                }
            }
        }

        return sum;
    }
}
