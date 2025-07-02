// 문자열 내 p와 y의 개수

package lv1.java;

public class test008 {
    public static void main(String[] args) {

        String s1 = "pPooyY";
        String s2 = "Pyy";

        boolean result1 = test008.solution(s1);
        boolean result2 = test008.solution(s2);

        System.out.println("result1: " + result1);
        System.out.println("result2: " + result2);
        System.out.println(result1 == true && result2 == false ? "pass" : "fail");
    }

    public static boolean solution(String s) {

        s = s.toLowerCase();

        s.chars()
                .filter(c -> c == 'p')
                .forEach(c -> System.out.println(c));

        long pCount = s.chars().filter(c -> c == 'p').count();
        long yCount = s.chars().filter(c -> c == 'y').count();

        return pCount == yCount;
    }
}
