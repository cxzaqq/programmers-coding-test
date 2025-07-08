// 수박수박수박수박수박수?

package lv1.java;

public class test013 {
    public static void main(String[] args) {
        String result1 = solution(3);
        String result2 = solution(4);

        System.out.println("result1: " + result1);
        System.out.println("result2: " + result2);
        System.out.println(result1.equals("수박수") && result2.equals("수박수박")
                ? "pass"
                : "fail");
    }

    public static String solution(int n) {
        char[] arr = new char[n];

        for (int i = 0; i < n; i++) {
            if (i % 2 == 0)
                arr[i] = '수';
            else
                arr[i] = '박';
        }

        return new String(arr);
    }
}
