# 🚀 Dijkstra Algorithm 정리

> **가중치가 있는 그래프**에서 단일 시작점으로부터의 **최단 경로**를 구하는 알고리즘  
> 모든 간선의 가중치는 **0 이상 (양수)**이어야 하며, 음수 간선이 존재하면 사용 불가

---

## ✅ 알고리즘 특징

| 항목       | 설명                                      |
|------------|-------------------------------------------|
| 알고리즘명 | 다익스트라 알고리즘 (Dijkstra's Algorithm) |
| 복잡도     | O(E log V) (우선순위 큐 사용 시)           |
| 가중치     | 양수만 허용 (음수 ❌)                      |
| 출발점     | 단일 시작 정점                             |
| 목적       | 시작점으로부터 모든 정점까지의 최단 거리   |

---

## 🔄 작동 순서

1. 모든 정점의 거리를 `무한대(∞)`로 초기화하고, 시작 정점만 `0`으로 설정
2. 우선순위 큐(PriorityQueue)를 이용해 **가장 가까운 정점**을 선택
3. 해당 정점에서 인접한 정점들을 순회하며 Relaxation 수행
4. 모든 정점에 대해 위 과정을 반복

---

## ✨ Relaxation이란?

> 더 짧은 거리로 갈 수 있는지 확인해서, 가능하면 거리값을 갱신하는 과정

```java
import java.util.*;

class Node implements Comparable<Node> {
    int index, cost;

    Node(int index, int cost) {
        this.index = index;
        this.cost = cost;
    }

    @Override
    public int compareTo(Node other) {
        return this.cost - other.cost; // 우선순위 큐에서 cost 기준 정렬
    }
}

public class Dijkstra {
    static final int INF = Integer.MAX_VALUE;

    public static void main(String[] args) {
        int V = 5; // 정점 수
        List<List<Node>> graph = new ArrayList<>();

        for (int i = 0; i < V; i++) {
            graph.add(new ArrayList<>());
        }

        // 그래프 정의 (u → v, cost)
        graph.get(0).add(new Node(1, 10));
        graph.get(0).add(new Node(3, 5));
        graph.get(1).add(new Node(2, 1));
        graph.get(1).add(new Node(3, 2));
        graph.get(2).add(new Node(4, 4));
        graph.get(3).add(new Node(1, 3));
        graph.get(3).add(new Node(2, 9));
        graph.get(3).add(new Node(4, 2));
        graph.get(4).add(new Node(0, 7));
        graph.get(4).add(new Node(2, 6));

        int[] dist = new int[V];
        Arrays.fill(dist, INF);
        dist[0] = 0; // 시작 정점: 0번

        PriorityQueue<Node> pq = new PriorityQueue<>();
        pq.offer(new Node(0, 0)); // 시작 노드 삽입

        while (!pq.isEmpty()) {
            Node current = pq.poll();
            int now = current.index;
            int nowCost = current.cost;

            // 이미 더 짧은 경로로 처리되었으면 skip
            if (dist[now] < nowCost) continue;

            for (Node next : graph.get(now)) {
                int newCost = dist[now] + next.cost;
                if (newCost < dist[next.index]) {
                    dist[next.index] = newCost;
                    pq.offer(new Node(next.index, newCost));
                }
            }
        }

        // 최종 거리 출력
        System.out.println("📍 최단 거리 결과:");
        for (int i = 0; i < V; i++) {
            System.out.println("0 → " + i + " : " + (dist[i] == INF ? "∞" : dist[i]));
        }
    }
}
```
