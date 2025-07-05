// 서울에서 김서방 찾기

package lv1.java;

public class test011 {
    public static void main(String[] args) {

        String[] seoul = { "Jane", "Kim" };
        String result = solution(seoul);

        System.out.println("result: " + result);
        System.out.println(result.equals("김서방은 1에 있다") ? "pass" : "fail");
    }

    public static String solution(String[] seoul) {

        int idx = 0;

        for (String e : seoul) {
            if (e.equals("Kim"))
                break;
            idx++;
        }

        // return "김서방은 " + idx + "에 있다";

        return new StringBuilder("김서방은 ").append(idx).append("에 있다").toString();
    }
}
