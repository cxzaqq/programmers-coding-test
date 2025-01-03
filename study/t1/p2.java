package study.t1;

import java.util.Scanner;

public class p2 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        try {
            int a = sc.nextInt();
            int c = sc.nextInt();

            int b_square = c * c - a * a;

            System.out.println(b_square);
        } finally {
            sc.close();
        }
        
    }
}
