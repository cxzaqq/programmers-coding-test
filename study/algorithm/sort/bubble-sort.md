# 버블 정렬 (Bubble Sort)

## 개념

버블 정렬은 인접한 두 요소를 비교해 큰 값을 뒤로 보내는 과정을 반복하는 정렬 알고리즘이다.  
매 회차마다 가장 큰 값을 맨 뒤로 "거품처럼" 보내는 방식이다.

- 시간 복잡도: **O(n²)**
- 공간 복잡도: **O(1)**
- 제자리(in-place) 정렬
- **안정 정렬** (같은 값의 순서 유지)

## 동작 방식

1. 인접한 두 요소를 비교
2. 앞의 값이 크면 두 값을 교환
3. 배열 끝까지 반복하면서 가장 큰 값을 뒤로 보냄
4. 위 과정을 배열 크기만큼 반복

## 예시

정렬 전 배열:  
`[29, 10, 14, 37, 13]`

정렬 과정:  
1. `[10, 14, 29, 13, 37]`  
2. `[10, 14, 13, 29, 37]`  
3. `[10, 13, 14, 29, 37]`

정렬 후:  
`[10, 13, 14, 29, 37]`

---

## Java 코드

```java
public class BubbleSort {

    // 버블 정렬 함수
    public static void bubbleSort(int[] arr) {
        int n = arr.length;

        // 총 n-1번 반복
        for (int i = 0; i < n - 1; i++) {
            boolean swapped = false;

            // 아직 정렬되지 않은 부분만 비교
            for (int j = 0; j < n - 1 - i; j++) {
                if (arr[j] > arr[j + 1]) {
                    // 값 교환
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                    swapped = true;
                }
            }

            // 더 이상 교환이 없으면 정렬 완료
            if (!swapped) break;
        }
    }

    // 테스트용 main 함수
    public static void main(String[] args) {
        int[] arr = {29, 10, 14, 37, 13};

        System.out.println("정렬 전:");
        printArray(arr);

        bubbleSort(arr);

        System.out.println("정렬 후:");
        printArray(arr);
    }

    // 배열 출력 함수
    private static void printArray(int[] arr) {
        for (int num : arr) {
            System.out.print(num + " ");
        }
        System.out.println();
    }
}
```