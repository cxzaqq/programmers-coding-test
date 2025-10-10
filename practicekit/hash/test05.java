// 베스트앨범

package practicekit.hash;

import java.util.*;

public class test05 {
    static class Song {
        int idx;
        int plays;

        public Song(int idx, int plays) {
            this.idx = idx;
            this.plays = plays;
        }
    }
    public static void main(String[] args) {
        String[] genres = { "classic", "pop", "classic", "classic", "pop" };
        int[] plays = { 500, 600, 150, 800, 2500 };
        int[] answer = { 4, 1, 3, 0 };

        System.out.println(Arrays.equals(answer, solution(genres, plays)) ? "pass" : "fail");
    }

    public static int[] solution(String[] genres, int[] plays) {
        Map<String, Integer> total = new HashMap<>();
        Map<String, List<Song>> genreToSongs = new HashMap<>();

        for (int i = 0; i < genres.length; i++) {
            String g = genres[i];
            int p = plays[i];

            total.put(g, total.getOrDefault(g, 0) + p);

            genreToSongs
                .computeIfAbsent(g, k -> new ArrayList<>())
                .add(new Song(i, p));
        }

        for (List<Song> list : genreToSongs.values()) {
            Collections.sort(list, new Comparator<Song>() {
                public int compare(Song a, Song b) {
                    if (b.plays != a.plays) {
                        return b.plays - a.plays;
                    } else {
                        return a.idx - b.idx;
                    }
                }
            });
        }

        List<String> genreOrder = new ArrayList<>(total.keySet());
        Collections.sort(genreOrder, new Comparator<String>() {
            public int compare(String g1, String g2) {
                return total.get(g2) - total.get(g1);
            }
        });

        List<Integer> resultList = new ArrayList<>();
        for (String g : genreOrder) {
            List<Song> list = genreToSongs.get(g);
            resultList.add(list.get(0).idx);
            if (list.size() > 1) {
                resultList.add(list.get(1).idx);
            }
        }

        int[] answer = new int[resultList.size()];
        for (int i = 0; i < resultList.size(); i++) {
            answer[i] = resultList.get(i);
        }

        return answer;
    }
}
