import java.util.Arrays;

// 배열에서 문자열 대소문자 변환하기기
public class test147 {
    public static void main(String[] args) {
        String[] strArr = {"AAA","BBB","CCC","DDD"};	;
        String[] result = test147.solution(strArr);

        System.out.println(Arrays.toString(result));
    }

    public static String[] solution(String[] strArr) {
        for(int i = 0; i < strArr.length; i++) {
            if(i % 2 == 0) {
                strArr[i] = strArr[i].toLowerCase();
            } else {
                strArr[i] = strArr[i].toUpperCase();
            }
        }

        return strArr;
    }

    public static String[] solution2(String[] strArr) {
        for(int i = 0; i < strArr.length; i++) {
            strArr[i] = i % 2 == 0
                            ? strArr[i] = strArr[i].toLowerCase()
                            : strArr[i].toUpperCase();
        }

        return strArr;
    }
}
