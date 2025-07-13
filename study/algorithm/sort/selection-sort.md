# 선택 정렬 (Selection Sort)

## 개념

선택 정렬은 가장 작은 데이터를 선택해 맨 앞에 있는 데이터와 바꾸고, 그다음 작은 데이터를 선택해 앞에서 두 번째 데이터와 바꾸는 과정을 반복하는 정렬 알고리즘이다.

- 시간 복잡도: **O(n²)**
- 공간 복잡도: **O(1)**
- 제자리(in-place) 정렬
- **안정 정렬이 아님** (같은 값의 순서가 바뀔 수 있음)

## 동작 방식

1. 배열의 첫 번째 요소부터 시작하여 가장 작은 값을 찾아 현재 위치의 값과 교환
2. 그다음 인덱스로 이동하여 같은 작업 반복
3. 배열의 끝까지 반복

## 예시

정렬 전 배열:  
`[29, 10, 14, 37, 13]`

정렬 과정:  
1. `[10, 29, 14, 37, 13]` → 29와 10 교환  
2. `[10, 13, 14, 37, 29]` → 29와 13 교환  
3. `[10, 13, 14, 37, 29]` → 자기 자리  
4. `[10, 13, 14, 29, 37]` → 37과 29 교환  

정렬 후:  
`[10, 13, 14, 29, 37]`

---

## Java 코드

```java
public class SelectionSort {

    // 선택 정렬 함수
    public static void selectionSort(int[] arr) {
        int n = arr.length;

        for (int i = 0; i < n - 1; i++) {
            // 가장 작은 값의 인덱스 찾기
            int minIndex = i;
            for (int j = i + 1; j < n; j++) {
                if (arr[j] < arr[minIndex]) {
                    minIndex = j;
                }
            }

            // 현재 위치와 최소값 위치 교환
            int temp = arr[minIndex];
            arr[minIndex] = arr[i];
            arr[i] = temp;
        }
    }

    // 테스트용 main 함수
    public static void main(String[] args) {
        int[] arr = {29, 10, 14, 37, 13};

        System.out.println("정렬 전:");
        printArray(arr);

        selectionSort(arr);

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