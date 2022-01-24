// create a class (not really needed but helps with testing)

class longestWord {

    findLongestWord(sentence) {
        // splits the passed argument into an array
        sentence = sentence.split(" ")
        // returns the sorted array, so first element is the longest string
        return sentence.sort((a, b) => b.length - a.length)[0] + " " + sentence.length
    }
}

let newSentence = new longestWord()

console.log(newSentence.findLongestWord('The cow jumped over the moon.'))

module.exports = longestWord;