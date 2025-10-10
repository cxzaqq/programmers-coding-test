// 폰켓몬

package practicekit.hash;

import java.util.HashSet;
import java.util.Set;

public class test02 {
    public static void main(String[] args) {
        int[] nums = {3, 3, 3, 2, 2, 4};
        int answer = 3;

        System.out.println(solution(nums) == answer ? "pass" : "fail");
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
}
