// 시저 암호

package lv1.java;

public class test015 {
    public static void main(String[] args) {
        String result1 = solution("AB", 1);
        String result2 = solution("z", 1);
        String result3 = solution("a B z", 4);

        System.out.println(result1.equals("BC") && result2.equals("a")
                && result3.equals("e F d") ? "pass" : "fail");
    }

    public static String solution(String s, int n) {
        StringBuilder result = new StringBuilder();

        for (char c : s.toCharArray()) {
            if (c == ' ') {
                result.append(' ');
            } else {
                char base = Character.isLowerCase(c) ? 'a' : 'A';
                int shifted = (c - base + n) % 26 + base;
                result.append((char) shifted);
            }
        }

        return result.toString();
    }
}
