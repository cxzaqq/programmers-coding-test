// 조건에 맞게 수열 변환하기 2

import java.util.Arrays;

public class test013 {
    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 100, 99, 98};

        int result = test013.solution(arr);
        System.out.println(result);
    }

    public static int solution(int[] arr) {
        int answer = 0;
        int[] beforeArr = new int[arr.length];
        beforeArr = Arrays.copyOf(arr, arr.length);

        while(true) {
            for(int i = 0; i < arr.length; i++) {
                if(arr[i] >= 50 && arr[i] % 2 == 0) {
                    arr[i] /= 2;
                }
                else if(arr[i] < 50 && arr[i] % 2 != 0) {
                    arr[i] = arr[i] * 2 + 1;
                }
            }
            answer++;
            System.out.println(Arrays.toString(arr));
            boolean check = true;
            for(int i = 0; i < arr.length; i++) {
                if(arr[i] != beforeArr[i]) {
                    check = false;
                }
            }
            // Arrays.equals(arr, beforeArr);
            if(check) {
                break;
            } else {
                beforeArr = Arrays.copyOf(arr, arr.length);
            }
        }
        return answer - 1;
    }

    public static int solution2(int[] arr) {
        return Arrays.stream(arr).map(i -> cntAction(i)).max().getAsInt();
    }

    private static int cntAction(int n) {
        int cnt = 0;
        boolean flag = true;

        while(flag) {
            if(n % 2 == 0 && 50 <= n) {
                n /= 2;
                cnt++;
            } else if(n % 2 != 0 && n < 50) {
                n *= 2;
                n += 1;
                cnt++;
            } else {
                flag = false;
            }
        }
        return cnt;
    }
}
