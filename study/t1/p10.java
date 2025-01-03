package study.t1;

import java.util.Arrays;
import java.util.List;

public class p10 {
    public static void main(String[] args) {
        int[][] data = {{1, 20300104, 100, 80}, {2, 20300804, 847, 37}, {3, 20300401, 10, 8}};
        String ext = "date";
        int val_ext = 20300501;
        String sort_by = "remain";

        int[][] result = p10.solution(data, ext, val_ext, sort_by);
        for(int[] intArr : result) {
            System.out.println(Arrays.toString(intArr));
        }
    }

    public static int[][] solution(int[][] data, String ext, int val_ext, String sort_by) {
        List<String> column = List.of("code", "date", "maximum", "remain");

        int extIdx = column.indexOf(ext);
        int sortIdx = column.indexOf(sort_by);

        return Arrays.stream(data)
            .filter(e -> e[extIdx] < val_ext)
            .sorted((a, b) -> Integer.compare(a[sortIdx], b[sortIdx]))
            .toArray(int[][]::new);
    }
}
