// 2016년

package lv1.java;

public class test002 {
    public static void main(String[] args) {
        int a = 5; // month
        int b = 24; // day
        String answer = "TUE";

        String result = test002.solution(a, b);

        System.out.println("answer: " + answer);
        System.out.println("result: " + result);
        System.out.println(result.equals(answer) ? "pass" : "fail");
        
    }

    public static String solution(int a, int b) {
        String[] days = {"FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"};
        int[] monthDays = {31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31};
        int totalDays = 0;
        for (int i = 0; i < a - 1; i++) {
            totalDays += monthDays[i];
        }
        totalDays += b - 1;
        return days[totalDays % 7];
    }
}
