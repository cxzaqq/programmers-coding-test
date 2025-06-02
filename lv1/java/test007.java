// 문자열 내 마음대로 정렬하기

package lv1.java;

import java.util.Arrays;

public class test007 {
    public static void main(String[] args) {
        String[] result1 = test007.solution(new String[]{"sun", "bed", "car"}, 1);
        String[] result2 = test007.solution(new String[]{"abce", "abcd", "cdx"}, 2);

        System.out.println("result1: " + String.join(", ", result1));
        System.out.println("result2: " + String.join(", ", result2));
        System.out.println(result1[0].equals("car") && result1[1].equals("bed") && result1[2].equals("sun") &&
                           result2[0].equals("abcd") && result2[1].equals("abce") && result2[2].equals("cdx") ? "pass" : "fail");
    }

    public static String[] solution(String[] strings, int n) {
        Arrays.sort(strings, (s1, s2) -> {
            if (s1.charAt(n) != s2.charAt(n)) {
                return Character.compare(s1.charAt(n), s2.charAt(n));
            }
            
            return s1.compareTo(s2);
        });
        return strings;
    }
}
