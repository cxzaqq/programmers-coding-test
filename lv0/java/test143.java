// 문자열이 몇 번 등장하는지 세기
public class test003 {
    public static void main(String[] args) {
        String myString = "Banana";
        String pat = "ana";

        int result = test003.solution(myString, pat);

        System.out.println(result);
    }

    public static int solution(String myString, String pat) {
        int answer = 0;
        for(int i = 0; i <= myString.length() - pat.length(); i++) {
            boolean check = true;
            for(int j = 0; j < pat.length(); j++) {
                if(myString.charAt(i + j) != pat.charAt(j)) {
                    check = false;
                }
            }
            if(check) {
                answer++;
            }
        }
        return answer;
    }

    public static int solution2(String myString, String pat) {
        int answer = 0;
        for(int i = 0; i < myString.length(); i++) {
            if(myString.substring(i).startsWith(pat)) {
                answer++;
            }
        }
        return answer;
    }

    public static int solution3(String myString, String pat) {
        int idx = myString.indexOf(pat);
        return idx == -1 ? 0 : (1 + solution(myString.substring(idx + 1), pat));
    }
}
