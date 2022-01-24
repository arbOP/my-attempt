const longestWord = require('./index')
const wordFinder = new longestWord()
const foundLongest = wordFinder.findLongestWord

describe('Longest word in string ', () => {
    let testString = 'The cow jumped over the moon.';

    test('does the return value equal jumped 6 for test string', () => {
        expect(foundLongest(testString)).toBe('jumped 6')
    })

    test('is the return value a string', () => {
        expect(typeof foundLongest(testString)).toBe("string")
    })

    test('does the value returned include punctuation', () => {
        expect(foundLongest(testString)).not.toMatch(/[^,!?]+[=|!.'"()?]+(\s|$)/g)
    })

    test('check if the argument passed is a string ', () => {
        const spy = jest.spyOn(wordFinder, "findLongestWord")
        const results = wordFinder.findLongestWord(testString)

        expect(spy).toHaveBeenCalled()
        expect(spy).toHaveBeenCalledWith(expect.any(String))
    })
});
