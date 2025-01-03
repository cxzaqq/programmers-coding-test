package study.t2;

public class p10 {
    public static void main(String[] args) {
        int[] mats = {5, 3, 2};
        String[][] park = {
                            {"A", "A", "-1", "B", "B", "B", "B", "-1"}
                          , {"A", "A", "-1", "B", "B", "B", "B", "-1"}
                          , {"-1", "-1", "-1", "-1", "-1", "-1", "-1", "-1"}
                          , {"D", "D", "-1", "-1", "-1", "-1", "E", "-1"}
                          , {"D", "D", "-1", "-1", "-1", "-1", "-1", "F"}
                          , {"D", "D", "-1", "-1", "-1", "-1", "E", "-1"}
        };

        int result = p10.solution(mats, park);
        System.out.println(result);
    }

    public static int solution(int[] mats, String[][] park) {
        int answer = 0;

        return answer;
    }
}
