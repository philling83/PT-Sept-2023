const chai = require("chai");
const expect = chai.expect;

const { Word } = require("../class");

describe("Word", function () {
  describe("Word constructor function", function () {
    it('should have a "word" property', function () {
      const newWord = new Word("computer");

      expect(newWord).to.have.property("word");
    });

    it('should set the "word" property when a new word is created', function () {
      const newWord = new Word("banana");

      expect(newWord.word).to.equal("banana");
    });
  });

  describe("removeVowels function", function () {
    it("should return a the word with all vowels removed", function () {
      const newWord = new Word("dog");

      const result = newWord.removeVowels();

      expect(result).to.equal("dg");
    });
  });

  describe("removeConsonants function", function () {
    it("should return the word with the consonants removed", function () {
      const newWord = new Word("racecar");

      const result = newWord.removeConsonants();

      expect(result).to.equal("aea");
    });
  });

  describe("pigLatin function", function () {
    it("should return the word converted to pig latin", function () {
      const newWord1 = new Word("apple");
      const newWord2 = new Word("trash");

      const result1 = newWord1.pigLatin();
      const result2 = newWord2.pigLatin();

      expect(result1).to.equal("appleyay");
      expect(result2).to.equal("ashtray");
    });
  });
});
