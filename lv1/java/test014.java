// 문자열을 정수로 바꾸기

package lv1.java;

public class test014 {
    public static void main(String[] args) {
        int result1 = solution("1234");
        int result2 = solution("-1234");

        System.out.println(result1 == 1234 && result2 == -1234
                ? "pass"
                : "fail");
    }

    public static int solution(String s) {
        return Integer.parseInt(s);
    }
}
