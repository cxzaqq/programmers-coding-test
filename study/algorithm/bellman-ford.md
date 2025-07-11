# 📘 Bellman-Ford 알고리즘 정리

> **음수 가중치가 있는 그래프에서도 최단 경로를 구할 수 있는 알고리즘**  
> 다익스트라 알고리즘은 음수 간선이 있는 경우 사용할 수 없지만, 벨만-포드는 가능

---

## ✅ 알고리즘 특징

| 항목 | 설명 |
|------|------|
| 이름 | Bellman-Ford Algorithm |
| 시간복잡도 | O(V × E) |
| 공간복잡도 | O(V) |
| 가중치 | **음수 가중치 허용** |
| 사이클 감지 | **음수 사이클도 감지 가능** |
| 음수 사이클 | 있으면 `최단 경로 불가능` 판정 가능 |

---

## 🔄 작동 방식

1. 시작 정점에서 다른 모든 정점까지의 거리를 `무한대`로 초기화
2. 시작 정점의 거리는 `0`으로 설정
3. 모든 간선에 대해 `V-1`번 반복해서 Relaxation 수행
4. 마지막으로 한 번 더 모든 간선을 검사하여 **음수 사이클 존재 여부** 확인

---

## 📌 Relaxation이란?

- `(u, v)` 간선을 검사할 때,  
  `dist[v] > dist[u] + weight(u, v)`이면 `dist[v]`를 더 짧은 값으로 갱신

---

## 📁 예제 코드

```java
import java.util.*;

class Edge {
    int from, to, weight;

    Edge(int from, int to, int weight) {
        this.from = from;
        this.to = to;
        this.weight = weight;
    }
}

public class BellmanFord {
    static final int INF = Integer.MAX_VALUE;

    public static void main(String[] args) {
        int V = 5; // 정점 수
        List<Edge> edges = new ArrayList<>();

        // 예시 그래프 간선 추가
        edges.add(new Edge(0, 1, 6));
        edges.add(new Edge(0, 2, 7));
        edges.add(new Edge(1, 2, 8));
        edges.add(new Edge(1, 3, 5));
        edges.add(new Edge(1, 4, -4));
        edges.add(new Edge(2, 3, -3));
        edges.add(new Edge(2, 4, 9));
        edges.add(new Edge(3, 1, -2));
        edges.add(new Edge(4, 3, 7));
        edges.add(new Edge(4, 0, 2));

        int[] dist = new int[V];
        Arrays.fill(dist, INF);
        dist[0] = 0; // 시작 정점

        // V-1번 Relaxation
        for (int i = 0; i < V - 1; i++) {
            for (Edge e : edges) {
                if (dist[e.from] != INF && dist[e.to] > dist[e.from] + e.weight) {
                    dist[e.to] = dist[e.from] + e.weight;
                }
            }
        }

        // 음수 사이클 확인
        boolean hasNegativeCycle = false;
        for (Edge e : edges) {
            if (dist[e.from] != INF && dist[e.to] > dist[e.from] + e.weight) {
                hasNegativeCycle = true;
                break;
            }
        }

        if (hasNegativeCycle) {
            System.out.println("🚨 음수 사이클이 존재합니다!");
        } else {
            System.out.println("📍 최단 거리 결과:");
            for (int i = 0; i < V; i++) {
                System.out.println("0 -> " + i + " : " + (dist[i] == INF ? "∞" : dist[i]));
            }
        }
    }
}
```