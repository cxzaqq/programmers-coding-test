// 원하는 문자열 찾기
public class test150 {
    public static void main(String[] args) {
        String myString = "AbCdEfG";
        String pat = "aBc";

        int result = test150.solution(myString, pat);
        System.out.println(result);
    }

    public static int solution(String myString, String pat) {
        myString = myString.toLowerCase();
        pat = pat.toLowerCase();
        if(myString.length() < pat.length()) return 0;
        if(myString.contains(pat)) return 1;
        else return 0;
    }

    public static int solution2(String myString, String pat) {
        int answer = 0;
        if(myString.toLowerCase().contains(pat.toLowerCase())) answer = 1;
        return answer;
    }
}
