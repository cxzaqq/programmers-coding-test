// 문자열 내림차순으로 배치하기

package lv1.java;

import java.util.Comparator;
import java.util.stream.Collectors;

public class test009 {
    public static void main(String[] args) {
        String result = test009.solution("Zbcdefg");

        System.out.println("result: " + result);
        System.out.println(result.equals("gfedcbZ") ? "pass" : "fail");
    }

    public static String solution(String s) {
        return s.chars().boxed().sorted(Comparator.reverseOrder())
                .map(c -> String.valueOf((char) (int) c))
                .collect(Collectors.joining());
    }
}
