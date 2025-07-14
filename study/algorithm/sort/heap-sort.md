# 힙 정렬 (Heap Sort)

## 개념

힙 정렬은 **완전 이진 트리**(Complete Binary Tree)를 기반으로 한 정렬 알고리즘으로,  
최대 힙(Max Heap)을 만들어 가장 큰 값을 꺼내 정렬하는 방식이다.

- 시간 복잡도: **O(n log n)**
- 공간 복잡도: **O(1)** (제자리 정렬)
- 제자리(in-place) 정렬
- **불안정 정렬** (같은 값의 순서가 바뀔 수 있음)

## 동작 방식

1. 배열을 최대 힙(Max Heap)으로 변환
2. 루트(가장 큰 값)를 배열의 마지막 요소와 교환
3. 힙 크기를 줄이고 다시 힙 속성 복구 (heapify)
4. 이 과정을 배열 크기만큼 반복

## 예시

정렬 전 배열:  
`[29, 10, 14, 37, 13]`

1. 최대 힙 구성: `[37, 29, 14, 10, 13]`  
2. 37 ↔ 13 스왑 → `[13, 29, 14, 10, 37]`  
3. 다시 힙 재구성 → `[29, 13, 14, 10, 37]`  
4. 29 ↔ 10 스왑 → `[10, 13, 14, 29, 37]`  
5. 반복...

정렬 후:  
`[10, 13, 14, 29, 37]`

---

## Java 코드

```java
public class HeapSort {

    // 힙 정렬 함수
    public static void heapSort(int[] arr) {
        int n = arr.length;

        // 1. 최대 힙 구성
        for (int i = n / 2 - 1; i >= 0; i--) {
            heapify(arr, n, i);
        }

        // 2. 힙에서 하나씩 꺼내 정렬
        for (int i = n - 1; i > 0; i--) {
            // 현재 루트(최대값)와 마지막 요소 스왑
            int temp = arr[0];
            arr[0] = arr[i];
            arr[i] = temp;

            // 줄어든 힙에 대해 heapify
            heapify(arr, i, 0);
        }
    }

    // 힙 속성 유지 함수 (Max Heap)
    private static void heapify(int[] arr, int heapSize, int rootIndex) {
        int largest = rootIndex;
        int left = 2 * rootIndex + 1;
        int right = 2 * rootIndex + 2;

        // 왼쪽 자식이 더 크면 largest 업데이트
        if (left < heapSize && arr[left] > arr[largest]) {
            largest = left;
        }

        // 오른쪽 자식이 더 크면 largest 업데이트
        if (right < heapSize && arr[right] > arr[largest]) {
            largest = right;
        }

        // 루트가 가장 크지 않다면 교환 후 재귀 호출
        if (largest != rootIndex) {
            int swap = arr[rootIndex];
            arr[rootIndex] = arr[largest];
            arr[largest] = swap;

            heapify(arr, heapSize, largest);
        }
    }

    // 테스트용 main 함수
    public static void main(String[] args) {
        int[] arr = {29, 10, 14, 37, 13};

        System.out.println("정렬 전:");
        printArray(arr);

        heapSort(arr);

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