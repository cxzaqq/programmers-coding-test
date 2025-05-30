// 나누어 떨어지는 숫자 배열

package lv1.java;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class test005 {
    public static void main(String[] args) {
        int[] arr1 = {5, 9, 7, 10};
        int divisor1 = 5;
        int[] a1 = {5, 10};

        int[] arr2 = {2, 36, 1, 3};
        int divisor2 = 1;
        int[] a2 = {1, 2, 3, 36};

        int[] result1 = test005.solution(arr1, divisor1);
        int[] result2 = test005.solution(arr2, divisor2);

        System.out.println("result1: " + java.util.Arrays.toString(result1));
        System.out.println("result2: " + java.util.Arrays.toString(result2));
        System.out.println(java.util.Arrays.equals(result1, a1) && java.util.Arrays.equals(result2, a2) ? "pass" : "fail");
    }

    public static int[] solution(int[] arr, int divisor) {
        List<Integer> result = new ArrayList<>();
        for (int n : arr) {
            if (n % divisor == 0) {
                result.add(n);
            }
        }

        if (result.isEmpty()) result.add(-1);

        return result.stream().mapToInt(Integer::intValue).sorted().toArray();
    }

    public static int[] solution2(int[] arr, int divisor) {
        int[] result = Arrays.stream(arr)
                             .filter(n -> n % divisor == 0)
                             .sorted()
                             .toArray();
        return result.length == 0 ? new int[]{-1} : result;
    }
}
