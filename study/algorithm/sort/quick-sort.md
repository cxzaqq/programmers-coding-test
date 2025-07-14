# 퀵 정렬 (Quick Sort)

## 개념

퀵 정렬은 분할 정복(divide and conquer) 전략을 사용하는 효율적인 정렬 알고리즘이다.  
배열에서 하나의 **피벗(pivot)** 을 기준으로 작은 값은 왼쪽, 큰 값은 오른쪽으로 나눈 뒤  
각 부분 배열에 대해 같은 과정을 재귀적으로 반복한다.

- 평균 시간 복잡도: **O(n log n)**
- 최악 시간 복잡도: **O(n²)** (피벗이 항상 최솟값 또는 최댓값일 경우)
- 공간 복잡도: **O(log n)** (재귀 호출 스택)
- 제자리(in-place) 정렬
- **불안정 정렬** (같은 값의 순서가 바뀔 수 있음)

## 동작 방식

1. 피벗을 선택한다 (보통 첫 번째, 마지막, 중간값, 혹은 랜덤)
2. 피벗보다 작은 값은 왼쪽, 큰 값은 오른쪽으로 분할
3. 분할된 부분 배열에 대해 재귀적으로 퀵 정렬 수행
4. 각 재귀가 끝나면 정렬 완료

## 예시

정렬 전 배열:  
`[29, 10, 14, 37, 13]`

정렬 과정:  
- 피벗: 29 → `[10, 14, 13]` | `29` | `[37]`  
- `[10, 14, 13]` → 피벗: 10 → `[ ]` | `10` | `[14, 13]`  
- `[14, 13]` → 피벗: 14 → `[13]` | `14` | `[ ]`  
- 재조합: `[10, 13, 14] + 29 + 37`

정렬 후:  
`[10, 13, 14, 29, 37]`

---

## Java 코드

```java
public class QuickSort {

    // 퀵 정렬 함수
    public static void quickSort(int[] arr, int low, int high) {
        if (low < high) {
            // 피벗을 기준으로 분할
            int pivotIndex = partition(arr, low, high);

            // 분할된 부분 배열 정렬
            quickSort(arr, low, pivotIndex - 1);
            quickSort(arr, pivotIndex + 1, high);
        }
    }

    // 분할 함수 (피벗보다 작은 것은 왼쪽, 큰 것은 오른쪽)
    private static int partition(int[] arr, int low, int high) {
        int pivot = arr[high];  // 마지막 요소를 피벗으로 선택
        int i = low - 1;

        for (int j = low; j < high; j++) {
            if (arr[j] <= pivot) {
                i++;
                // 스왑
                int temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }

        // 피벗을 제자리로 이동
        int temp = arr[i + 1];
        arr[i + 1] = arr[high];
        arr[high] = temp;

        return i + 1;
    }

    // 테스트용 main 함수
    public static void main(String[] args) {
        int[] arr = {29, 10, 14, 37, 13};

        System.out.println("정렬 전:");
        printArray(arr);

        quickSort(arr, 0, arr.length - 1);

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