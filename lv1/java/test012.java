// 소수 찾기

package lv1.java;

import java.util.Arrays;

public class test012 {
    public static void main(String[] args) {
        int result1 = solution(10);
        int result2 = solution(5);

        System.out.println("result1: " + result1);
        System.out.println("result2: " + result2);

        System.out.println(result1 == 4 && result2 == 3 ? "pass" : "fail");
    }

    public static int solution(int n) {
        if (n < 2)
            return 0;

        boolean[] isPrime = new boolean[n + 1];
        Arrays.fill(isPrime, true);
        isPrime[0] = false;
        isPrime[1] = false;

        for (int i = 2; i * i <= n; i++) {
            if (isPrime[i]) {
                for (int j = i * i; j <= n; j += i) {
                    isPrime[j] = false;
                }
            }
        }

        int count = 0;
        for (int i = 2; i <= n; i++) {
            if (isPrime[i])
                count++;
        }

        return count;
    }
}
