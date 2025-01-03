package study.t1;

import java.util.Scanner;

public class p3 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        try {
            int year = sc.nextInt();
            String age_type = sc.next();
            int answer = 0;
    
            if (age_type.equals("Korea")) {
                answer = 2031 - year;
            } else if (age_type.equals("Year")) {
                answer = 2030 - year;
            }
    
            System.out.println(answer);
        } finally {
            sc.close();
        }
        
    }
}
