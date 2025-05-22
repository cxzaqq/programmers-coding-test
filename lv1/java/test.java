package lv1.java;

public class test {
    public static void main(String[] args) {
        move("31:11", "-10");
    }

    public static String solution(String video_len, String pos, String op_start, String op_end, String[] command) {
        String result = "";
        return result;
    }

    public static String skipOp (String curPos, String op_start, String op_end) {
        // 만약 op_start < op_end면
        // op_end로 이동
        return "";
    }
    
    public static String next (String  curPos, String video_len) {
        // 만약 curPos + 10s가 video_len보다 크면 video_len으로
        // 아니면 그냥 curPos + 10
        return "";
    }
    
    public static String prev (String curPos) {
        // 만약 curPos - 10이 00:00보다 작으면 00:00으로
        // 아니면 그냥 curPos - 10
        return "";
    }
    
    public static String move (String curPos, String sign) {
        String result = "";
        String[] splitedArr = curPos.split(":");
        int[] intedArr = {Integer.parseInt(splitedArr[0]), Integer.parseInt(splitedArr[1])};
        // for(String str : splitedArr) {
        //     System.out.println(str);
        // }
        
        /**
         * sign이 -일 때
         * 우선 현재 몇 초인지 보고 10초 이상 남았는가?
         * O => 그냥 10초만 빼기
         * X => 몇 분인지 확인
         *      1분 이상인가?
         *      O => 10초 - 현재초, 현재 분 - 1, 60 - 계산된 초
         *      X => 그냥 00:00을 반환
         */
        if(intedArr[1] >= 10) {
            // 현재 초가 10초 이상 남았을 경우
            result = splitedArr[0] + ":" + (intedArr[1] - 10);
        } else {
            // 현재 초가 10초 미만으로 남았을 경우
            if(intedArr[0] >= 1) {
                // 현재 1분 이상 남았는가
                int remainM = 10 - intedArr[1];
                result = (intedArr[0] - 1) + ":" + (60 - remainM);
            } else {
                // 현재 1분 미만인가
                result = "00:00";
            }
        }

        /**
         * sign이 +일 때
         * 우선 현재 몇 초인지 보고 50초 미만으로 남았는가?
         * O => 그냥 10초만 더하기
         * X => 몇 분인지 확인
         *      video_len의 분 - 1인가?
         *      O => 10초 - 현재초, 현재 분 - 1, 60 - 계산된 초
         *      X => 그냥 00:00을 반환
         */
        
        return result;
    }
}
