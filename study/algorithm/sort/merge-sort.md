# 병합 정렬 (Merge Sort)

## 개념

병합 정렬은 **분할 정복(Divide and Conquer)** 전략을 사용하는 정렬 알고리즘이다.  
배열을 반으로 나누고, 각각 정렬한 후 병합하는 과정을 반복한다.

- 시간 복잡도: **O(n log n)**  
- 공간 복잡도: **O(n)** (임시 배열 필요)  
- **안정 정렬** (같은 값의 순서 유지)  
- **비제자리 정렬** (추가 공간 필요)

## 동작 방식

1. 배열을 반으로 나눈다.
2. 각각의 하위 배열에 대해 병합 정렬을 재귀적으로 수행한다.
3. 정렬된 두 배열을 병합(merge)한다.

## 예시

정렬 전 배열:  
`[29, 10, 14, 37, 13]`

1. 분할: `[29, 10]` | `[14, 37, 13]`  
2. 재귀 정렬: `[10, 29]` | `[13, 14, 37]`  
3. 병합: `[10, 13, 14, 29, 37]`

---

## Java 코드

```java
public class MergeSort {

    // 병합 정렬 함수
    public static void mergeSort(int[] arr, int left, int right) {
        if (left < right) {
            int mid = (left + right) / 2;

            // 좌우 분할
            mergeSort(arr, left, mid);
            mergeSort(arr, mid + 1, right);

            // 병합
            merge(arr, left, mid, right);
        }
    }

    // 병합 함수
    private static void merge(int[] arr, int left, int mid, int right) {
        int n1 = mid - left + 1;
        int n2 = right - mid;

        // 임시 배열 생성
        int[] L = new int[n1];
        int[] R = new int[n2];

        // 데이터 복사
        for (int i = 0; i < n1; i++) {
            L[i] = arr[left + i];
        }
        for (int j = 0; j < n2; j++) {
            R[j] = arr[mid + 1 + j];
        }

        // 병합
        int i = 0, j = 0, k = left;
        while (i < n1 && j < n2) {
            if (L[i] <= R[j]) {
                arr[k++] = L[i++];
            } else {
                arr[k++] = R[j++];
            }
        }

        // 남은 요소 복사
        while (i < n1) {
            arr[k++] = L[i++];
        }
        while (j < n2) {
            arr[k++] = R[j++];
        }
    }

    // 테스트용 main 함수
    public static void main(String[] args) {
        int[] arr = {29, 10, 14, 37, 13};

        System.out.println("정렬 전:");
        printArray(arr);

        mergeSort(arr, 0, arr.length - 1);

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