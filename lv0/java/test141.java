// 공백으로 구분하기 1
public class test141 {
    public static void main(String[] args) {
        String inputStr = "i love you";
        String[] result = test141.solution(inputStr);

        for(String str: result) {
            System.out.println(str);
        }
    }

    public static String[] solution(String my_string) {
        return my_string.split("\\s");
    }
}
