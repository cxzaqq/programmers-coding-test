// 이상한 문자 만들기

package lv1.java;

public class test017 {
    public static void main(String[] args) {
        String result = solution("try hello world");
        System.out.println(result.equals("TrY HeLlO WoRlD") ? "pass" : "fail");
    }

    public static String solution(String s) {
        int idx = 0;
        char[] arr = s.toCharArray();
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] == ' ') {
                idx = 0;
                continue;
            }

            if (idx % 2 == 0) {
                arr[i] = Character.toUpperCase(arr[i]);
            } else {
                arr[i] = Character.toLowerCase(arr[i]);
            }

            idx++;
        }

        return new String(arr);
    }

    public static String solution2(String s) {
        StringBuilder sb = new StringBuilder();
        int idx = 0;

        for (char c : s.toCharArray()) {
            if (c == ' ') {
                sb.append(' ');
                idx = 0;
            } else {
                sb.append(idx % 2 == 0
                        ? Character.toUpperCase(c)
                        : Character.toLowerCase(c));
                idx++;
            }
        }

        return sb.toString();
    }
}
