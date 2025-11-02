// 기능개발

package practicekit.stack_queue;

import java.util.*;

public class test02 {
    public static void main(String[] args) {
        int[] progresses1 = { 93, 30, 55 };
        int[] speeds1 = { 1, 30, 5 };
        int[] answer1 = { 2, 1 };

        int[] progresses2 = { 95, 90, 99, 99, 80, 99 };
        int[] speeds2 = { 1, 1, 1, 1, 1, 1 };
        int[] answer2 = { 1, 3, 2 };

        System.out.println(Arrays.equals(answer1, solution(progresses1, speeds1))
                && Arrays.equals(answer2, solution(progresses2, speeds2))
                        ? "pass"
                        : "fail");
        System.out.println(Arrays.equals(answer1, solution2(progresses1, speeds1))
                && Arrays.equals(answer2, solution2(progresses2, speeds2))
                        ? "pass"
                        : "fail");
    }

    private static int[] solution(int[] progresses, int[] speeds) {
        Queue<Integer> queue = new LinkedList<>();

        for (int i = 0; i < progresses.length; i++) {
            int remainingProgress = 100 - progresses[i];

            int days = (int) Math.ceil((double) remainingProgress / speeds[i]);

            queue.add(days);
        }

        List<Integer> result = new ArrayList<>();

        while (!queue.isEmpty()) {
            int maxDay = queue.poll();
            int count = 1;

            while (!queue.isEmpty() && queue.peek() <= maxDay) {
                queue.poll();
                count++;
            }

            result.add(count);
        }

        return result.stream().mapToInt(Integer::intValue).toArray();
    }

    private static int[] solution2(int[] progresses, int[] speeds) {
        int[] dayOfend = new int[100];
        int day = -1;
        for (int i = 0; i < progresses.length; i++) {
            while (progresses[i] + (day * speeds[i]) < 100) {
                day++;
            }
            dayOfend[day]++;
        }
        int[] answer = Arrays.stream(dayOfend).filter(i -> i != 0).toArray();
        return answer;
    }
}

/*
 * int[] progresses1 = {93, 30, 55};
 * int[] speeds1 = {1, 30, 5};
 * int[] answer1 = {2, 1};
 * 
 * i = 0
 * day = 7
 * result[7] = 1
 * 
 * i = 1
 * day = 7
 * result[3] = 2
 * 
 * i = 2
 * day = 9
 * result[9] = 1
 */
