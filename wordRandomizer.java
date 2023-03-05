import java.util.ArrayList;
import java.util.Arrays;
import java.util.Random;

public class wordRandomizer {

    public ArrayList<String> wordArray(){
        ArrayList<String> words = new ArrayList<>();
        words.addAll(Arrays.asList(("algorithm object-oriented fractal concatenate " +
                "javascript hacking iteration recursion pointer garbage-collection blockchain " +
                "ubuntu neural-network string instance machine-learning brute-force binary big-endian little-endian").split(" ")));
        return words;
    }

    public String randomWord(ArrayList<String> wordList){
        Random rand = new Random();
        String luckyWord = wordList.get(rand.nextInt(20));
        return luckyWord;
    }

}