// A 강조하기
public class test146 {
    public static void main(String[] args) {
        String myString = "abstract algebra";

        String result = test146.solution(myString);
        System.out.println(result);
    }

    public static String solution(String myString) {
        return myString.toLowerCase().replaceAll("a", "A");
    }
}
