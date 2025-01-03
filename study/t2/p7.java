package study.t2;

public class p7 {
    public static void main(String[] args) {
        int seat = 5;
        String[][] passengers = {{"On", "On", "On"}, {"Off", "On", "-"}, {"Off", "-", "-"}};

        int result = p7.solution(seat, passengers);

        System.out.println(result);
    }

    public static int solution(int seat, String[][] passengers) {
        int num_passenger = 0;
        for(int i=0; i<passengers.length; i++){
            num_passenger += func4(passengers[i]);
            num_passenger -= func3(passengers[i]);
        }
        int answer = func1(seat - num_passenger);
        return answer;
    }
    
    public static int func1(int num){
        if(0 > num){
            return 0;
        }
        else{
            return num;
        }
    }

    public static int func2(int num){
        if(num > 0){
            return 0;
        }
        else{
            return num;
        }
    }
    
    public static int func3(String[] station){
        int num = 0;
        for(int i=0; i<station.length; i++){
            if(station[i].equals("Off")){
                num += 1;
            }
        }
        return num;
    }
    
    public static int func4(String[] station){
        int num = 0;
        for(int i=0; i<station.length; i++){
            if(station[i].equals("On")){
                num += 1;
            }
        }
        return num;
    }
}
