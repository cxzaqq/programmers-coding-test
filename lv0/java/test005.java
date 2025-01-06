// 특정한 문자를 대문자로 바꾸기
public class test005 {
    public static void main(String[] args) {
        String my_string = "programmers";
        String alp = "p";

        String result = test005.solution(my_string, alp);
        System.out.println(result);
    }

    public static String solution(String my_string, String alp) {
        char[] chars = my_string.toCharArray();
        char target = alp.charAt(0);

        for(int i = 0; i < chars.length; i++) {
            if(chars[i] == target) {
                chars[i] = Character.toUpperCase(chars[i]);
            }
        }

        return new String(chars);
    }

    public static String solution2(String my_string, String alp) {
        String a = alp.toUpperCase();
        return my_string.replaceAll(alp, a);

        // return my_string.replaceAll(alp, alp.toUpperCase());
    }
}
