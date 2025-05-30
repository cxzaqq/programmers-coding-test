// 폰켓몬

package lv1.java;

import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;
import java.util.stream.Collectors;

public class test001 {
    public static void main(String[] args) {
        int[] nums = {3, 3, 3, 2, 2, 4};
        int answer = 3;

        int result = test001.solution2(nums);

        System.out.println("answer: " + answer);
        System.out.println("result: " + result);
        System.out.println(result == answer ? "pass" : "fail");
    }

    public static int solution(int[] nums) {
        int maxAnswer = nums.length / 2;
        Set<Integer> uniqueSet = new HashSet<>();
        for (int n: nums) {
            uniqueSet.add(n);
        }

        int[] uniqueArray = uniqueSet.stream().mapToInt(Integer::intValue).toArray();
        return maxAnswer > uniqueArray.length ? uniqueArray.length : maxAnswer;
    }

    public static int solution2(int[] nums) {
        Set<Integer> uniqueSet = new HashSet<>();
        for (int n: nums) {
            uniqueSet.add(n);
        }
        return Math.min(uniqueSet.size(), nums.length / 2);
    }

    public static int solution3(int[] nums) {
        return Arrays.stream(nums)
                .boxed()
                .collect(Collectors.collectingAndThen(Collectors.toSet(),
                e -> Integer.min(e.size(), nums.length / 2)));
    }
}
