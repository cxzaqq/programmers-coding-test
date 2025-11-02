// 같은 숫자는 싫어

package practicekit.stack_queue;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class test01 {
    public static void main(String[] args) {
        int[] arr = {1, 1, 3, 3, 0, 1, 1};
        int[] answer = {1, 3, 0, 1};

        System.out.println(Arrays.equals(answer, solution(arr)) ? "pass" : "fail");
        System.out.println(Arrays.equals(answer, solution2(arr)) ? "pass" : "fail");
    }

    private static int[] solution(int []arr) {
        List<Integer> result = new ArrayList<>();
        int prev = -1;

        for (int num : arr) {
            if (prev != num) {
                result.add(num);
                prev = num;
            }
        }

        return result.stream().mapToInt(Integer::intValue).toArray();
    }

    private static int[] solution2(int []arr) {
        List<Integer> result = new ArrayList<>();

        for (int num : arr) {
            if (result.isEmpty() || result.get(result.size() - 1) != num) {
                result.add(num);
            }
        }

        return result.stream().mapToInt(Integer::intValue).toArray();
    }
}
