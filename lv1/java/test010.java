// 문자열 다루기 기본

package lv1.java;

public class test010 {
    public static void main(String[] args) {
        boolean result1 = solution("a234");
        boolean result2 = solution("1234");

        System.out.println("result1: " + result1);
        System.out.println("result2: " + result2);
        System.out.println(result1 == false && result2 == true ? "pass" : "fail");
    }

    public static boolean solution(String s) {
        return (s.length() == 4 || s.length() == 6) && s.matches("\\d+");
    }
}
