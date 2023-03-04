import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        System.out.print("Name your character: ");
        String name = scan.next();
        System.out.print("What gender pronouns does " + name +" use?: ");
        String pronoun = scan.next();
        System.out.println("Hello I am " + name + " my pronouns are " + pronoun + ".");
        wordRandomizer myWords = new wordRandomizer();
        for(int i=0; i<20; i++){
            System.out.println(myWords.wordArray().get(i));
        }

    }
}
