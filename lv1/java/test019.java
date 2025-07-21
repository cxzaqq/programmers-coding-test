// 자연수 뒤집어 배열로 만들기

package lv1.java;

import java.util.Arrays;

public class test019 {
    public static void main(String[] args) {
        int[] result = solution(12345);
        int[] answer = { 5, 4, 3, 2, 1 };
        System.out.println(Arrays.equals(result, answer) ? "pass" : "fail");

    }

    public static int[] solution(long n) {
        char[] arr = Long.toString(n).toCharArray();

        for (int i = 0; i < arr.length / 2; i++) {
            char temp = arr[i];
            arr[i] = arr[arr.length - 1 - i];
            arr[arr.length - 1 - i] = temp;
        }

        int[] intArr = new String(arr)
                .chars()
                // char은 내부적으로 int값을 갖는다
                // 아스키코드 뺄셈 '0'은 48, '1'은 49..
                .map(c -> c - '0')
                .toArray();

        return intArr;
    }

    public static int[] solution2(long n) {
        return new StringBuilder().append(n).reverse().chars().map(c -> c - '0').toArray();
    }
}
