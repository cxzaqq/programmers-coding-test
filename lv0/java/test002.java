import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

// ad 제거하기
public class test002 {
    
    public static void main(String[] args) {
        String[] inputStrArr = {"and", "notad", "abcd"};
        String[] result = test002.solution(inputStrArr);

        for(String str: result) {
            System.out.println(str);
        }
    }

    public static String[] solution(String[] strArr) {
        List<String> list = new ArrayList<String>();

        for(String str: strArr) {
            if(!str.contains("ad")) {
                list.add(str);
            }
        }

        return list.toArray(new String[0]);
    }

    public static String[] solution2(String[] strArr) {
        return Arrays.stream(strArr)
                .filter(str -> !str.contains("ad"))
                .toArray(String[]::new);
    }
}

