import java.util.ArrayList;
import java.util.Scanner;

public class Main {

    static int wrongGuessesCounter=0;
    static boolean guessedWord= false;//true if successfully guessed word
    static boolean[] displayTable;

    public static void main(String[] args) {

        Scanner scan = new Scanner(System.in);

        System.out.print("Name your character: ");
        String name = scan.next();
        System.out.print("What gender pronouns does " + name +" use?: ");
        String pronoun = scan.next();

        System.out.println("Hello I am " + name + " my pronouns are " + pronoun + ".");

        wordRandomizer myWords = new wordRandomizer();
        ArrayList<String> choices = myWords.wordArray();
        String myWord = myWords.randomWord(choices);//word to guess
        displayTable= new boolean[myWord.length()];//indices correspond to myWord; if index 1 is true, display letter at index 1 (otherwise display _)


        int dashLocation= findDashLocation(myWord);//return index of where dash is (-1 if nonexistent)
        if(dashLocation != -1)
            displayTable[dashLocation]= true;//if dash is found in word, display it (without user guessing)

        //System.out.println("word have to guess: "+myWord);


        while(wrongGuessesCounter<7 && successfullyGuessedWord()==false){
            System.out.print("Enter letter guess: ");
            String letter= getNextLetter(scan.next());
            //String letter= scan.next();
            if(myWord.contains(letter)){//if letter is in word
                System.out.print("Letter "+letter+" FOUND: ");
                for(int i=0; i<myWord.length();i++){//set each index with guessed letter to true
                    if(String.valueOf(myWord.charAt(i)).equals(letter)){
                        displayTable[i]= true;
                    }
                }
                display(displayTable, myWord);

            }else{//if letter not in word
                System.out.println("Letter NOT found. Guesses remaining: "+ Integer.toString(6-wrongGuessesCounter));
                wrongGuessesCounter++;
            }
            //System.out.println("findDashLocation= "+findDashLocation(myWord));


        }

        if(successfullyGuessedWord()) {
            System.out.println("YOU WON!");
        }else{
            System.out.println("You drowned!");
            System.out.println("The word is: "+myWord);
        }



    }

    //returns index of dash in word if exists; returns -1 if non-existent
    public static int findDashLocation(String word){
        if(word.contains("-")){
            return word.indexOf("-");
        }
        return -1;
    }

    //returns first letter of given String
    public static String getNextLetter(String input){
        return Character.toString(input.charAt(0));
    }

    //If display at index i is true, display letter (otherwise display _)
    public static void display(boolean[] display, String word){
        for(int i=0; i<word.length(); i++){
            if(display[i]){//if true at index i
                System.out.print(word.charAt(i)+" ");
            }else{
                System.out.print("_ ");
            }
        }

        System.out.println();

    }

    //return true if guessed all letters of word
    public static boolean successfullyGuessedWord(){

        //return true if all indices of displayTable is true, otherwise return false
        for(int i=0; i<displayTable.length; i++){
            if(displayTable[i]==false)
                return false;
        }
        return true;
    }



}