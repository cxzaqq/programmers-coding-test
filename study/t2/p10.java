package study.t2;

import java.util.Arrays;

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
        // 정렬
        Arrays.sort(mats);

        // 큰 것부터 조회
        for(int i = mats.length - 1; i >= 0; i--) {
            int size = mats[i];

            // 돗자리 설치 가능 확인
            if(canPlaceMat(size, park)) {
                return size;
            }
        }

        // 가능한 돗자리가 없는 경우
        return -1;
    }

    // 돗자리 설치 가능한지
    private static boolean canPlaceMat(int size, String[][] park) {
        int rows = park.length;
        int cols = park[0].length;

        for (int i = 0; i <= rows - size; i++) {
            for (int j = 0; j <= cols - size; j++) {
                if (isAreaEmpty(i, j, size, park)) {
                    return true;
                }
            }
        }
        return false;
    }

    // 특정 영역이 빈 공간인지 확인
    private static boolean isAreaEmpty(int startX, int startY, int size, String[][] park) {
        for (int i = 0; i < size; i++) {
            for (int j = 0; j < size; j++) {
                if (!park[startX + i][startY + j].equals("-1")) {
                    return false;
                }
            }
        }
        return true;
    }
}


/*
해야 할 일을 크게 나눈 후 세부적으로 생각

1. mats를 내림차순 정렬

2. mats를 순회하며 해당 돗자리 크기 영역이 모두 -1인지 확인
- 해당 사이즈의 돗자리가 빈자리 상관 없이 설치가 가능한지
- 가능하면 해당 사이즈의 돗자리가 들어갈 빈자리가 있는지지

3. 있으면 멈추고 없으면 -1 반환

*/