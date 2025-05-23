# Stream
배열이나 컬렉션에 담긴 데이터를 간결하고 선언적으로 처리할 수 있게 도와주는 API<br>
=> 데이터를 하나씩 꺼내면서 가공하거나 필터링하고 원하는 결과로 모으는 흐름

```java
// 반복문
int[] arr = {1, 2, 3, 4, 5};

for (int n : arr) {
    if (n % 2 == 0) {
        System.out.println(n);
    }
}
```

```java
// Stream
int[] arr = {1, 2, 3, 4, 5};

Arrays.stream(arr)                      // 스트림 생성
        .filter(n -> n % 2 == 0)        // 짝수만 필터링
        .forEach(System.out::println);  // 출력
```

보통 스트림을 3단계 구조를 가짐

|단계|설명|예시|
|-|-|-|
|1. 생성|배열, 리스트 등에서 스트림을 생성|`Arrays.stream(arr)`|
|2. 중간 연산|데이터를 가공, 필터링 (결과는 다시 Stream)|`.filter()`, `.map()`, `.sorted()` 등|
|3. 최종 연산|결과 도출 (스트림 소비)|`.collect()`, `.forEach()`, `.sum()` 등|
<br><br>

* Stream은 데이터 처리 흐름 방식이다
* 원본 데이터를 변경하지 않는다
* 중간 연산은 계속 연결할 수 있고 최종 연산이 될 때 전체가 처리된다. (지연 처리)

## collectingAndThen()
collect한 결과를 한 번 더 가공 가능.

```java
int[] arr = {1, 1, 2, 3, 4, 5}

Arrays.stream(arr).boxed() // IntStream -> Stream<Integer>
    .collect(Collectors.collectingAndThen(Collectors.toSet(),
    e -> Integer.min(e.size(), nums.length / 2)));
```
위에서 `e`의 타입이 `Set<Integer>` 즉 `Collectors.toSet()`의 결과