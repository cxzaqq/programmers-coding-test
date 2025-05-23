// 소문자로 바꾸기
public class test148 {
    public static void main(String[] args) {
        String myString = "aBcDeFg"	;

        String result = test148.solution(myString);
        System.out.println(result);
    }

    public static String solution(String myString) {
        return myString.toLowerCase();
    }
}
