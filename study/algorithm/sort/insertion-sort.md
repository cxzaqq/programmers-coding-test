# 삽입 정렬 (Insertion Sort)

## 개념

삽입 정렬은 현재 위치의 데이터를 그 앞쪽에 있는 정렬된 데이터들과 비교하여 알맞은 위치에 삽입하는 방식으로 정렬하는 알고리즘이다.

- 시간 복잡도: **O(n²)** (최악의 경우)
- 공간 복잡도: **O(1)**
- 제자리(in-place) 정렬
- **안정 정렬** (같은 값의 순서가 유지됨)

## 동작 방식

1. 두 번째 요소부터 시작하여 그 앞의 요소들과 비교
2. 자신보다 큰 값을 오른쪽으로 한 칸씩 밀어낸 뒤
3. 알맞은 자리에 현재 값을 삽입
4. 이 과정을 배열의 끝까지 반복

## 예시

정렬 전 배열:  
`[29, 10, 14, 37, 13]`

정렬 과정:  
1. `[10, 29, 14, 37, 13]` → 29와 10 교환  
2. `[10, 14, 29, 37, 13]` → 14를 29 앞에 삽입  
3. `[10, 14, 29, 37, 13]` → 자기 자리  
4. `[10, 14, 29, 13, 37]` → 13을 3번째 위치로 삽입 → `[10, 13, 14, 29, 37]`

정렬 후:  
`[10, 13, 14, 29, 37]`

---

## Java 코드

```java
public class InsertionSort {

    // 삽입 정렬 함수
    public static void insertionSort(int[] arr) {
        int n = arr.length;

        for (int i = 1; i < n; i++) {
            int key = arr[i];     // 삽입할 값
            int j = i - 1;

            // key보다 큰 값들을 오른쪽으로 이동
            while (j >= 0 && arr[j] > key) {
                arr[j + 1] = arr[j];
                j--;
            }

            // 올바른 위치에 key 삽입
            arr[j + 1] = key;
        }
    }

    // 테스트용 main 함수
    public static void main(String[] args) {
        int[] arr = {29, 10, 14, 37, 13};

        System.out.println("정렬 전:");
        printArray(arr);

        insertionSort(arr);

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