// 같은 숫자는 싫어

package lv1.java;

import java.util.ArrayList;
import java.util.List;

public class test004 {
    public static void main(String[] args) {
        int[] arr1 = {1, 1, 3, 3, 0, 1, 1};
        int[] a1 = {1, 3, 0, 1};

        int[] arr2 = {4, 4, 4, 3, 3};
        int[] a2 = {4, 3};

        int[] result1 = test004.solution(arr1);
        int[] result2 = test004.solution(arr2);

        System.out.println("result1: " + java.util.Arrays.toString(result1));
        System.out.println("result2: " + java.util.Arrays.toString(result2));
        System.out.println(java.util.Arrays.equals(result1, a1) && java.util.Arrays.equals(result2, a2) ? "pass" : "fail");
    }

    public static int[] solution(int[] arr) {
        List<Integer> result = new ArrayList<>();
        int prev = -1;

        for (int n : arr) {
            if (n != prev) {
                result.add(n);
                prev = n;
            }
        }

        return result.stream().mapToInt(Integer::intValue).toArray();
    }
}
