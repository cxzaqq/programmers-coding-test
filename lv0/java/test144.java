// 특정 문자열로 끝나는 가장 긴 부분 문자열 찾기
public class test004 {
    public static void main(String[] args) {
        String myString = "AbcdEFG";
        String pat = "dE";

        String result = test004.solution(myString, pat);
        System.out.println(result);
    }

    public static String solution(String myString, String pat) {
        String answer = "";
        for(int i = myString.length(); i >= pat.length(); i--) {
            String tmp = myString.substring(0, i);
            if(tmp.endsWith(pat)) {
                return tmp;
            }
        }
        return answer;
    }

    public static String solution2(String myString, String pat) {
        String answer = "";

        int idx = myString.lastIndexOf(pat);

        answer = myString.substring(0, idx) + pat;

        return answer;
        // return myString.substring(0, myString.lastIndexOf(pat) + pat.length());
    }
}
