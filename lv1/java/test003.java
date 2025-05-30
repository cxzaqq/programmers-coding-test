// 가운데 글자 가져오기

package lv1.java;

public class test003 {
    public static void main(String[] args) {
        String s1 = "abcde";
        String a1 = "c";

        String s2 = "qwer";
        String a2 = "we";

        String result1 = test003.solution(s1);
        String result2 = test003.solution(s2);

        System.out.println("result1: " + result1);
        System.out.println("result2: " + result2);
        System.out.println(result1.equals(a1) && result2.equals(a2) ? "pass" : "fail");
    }

    public static String solution(String s) {
        int length = s.length();
        if (length % 2 == 0) {
            return s.substring(length / 2 - 1, length / 2 + 1);
        } else {
            return String.valueOf(s.charAt(length / 2));
        }
    }
}
