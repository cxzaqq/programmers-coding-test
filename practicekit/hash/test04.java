// 의상

package practicekit.hash;

import java.util.HashMap;
import java.util.Map;

public class test04 {
    public static void main(String[] args) {
        String[][] clothes = { { "yellow_hat", "headgear" }, { "blue_sunglasses", "eyewear" },
                { "green_turban", "headgear" } };
        int answer = 5;

        System.out.println(solution(clothes) == answer ? "pass" : "fail");
    }

    public static int solution(String[][] clothes) {
        Map<String, Integer> map = new HashMap<>();

        for (String[] cloth : clothes) {
            map.put(cloth[1], map.getOrDefault(cloth[1], 0) + 1);
        }

        int answer = 1;
        for (int cnt : map.values()) {
            answer *= (cnt + 1);
        }

        return answer - 1;
    }
}
