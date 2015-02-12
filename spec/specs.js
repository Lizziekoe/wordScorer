describe("wordScorer", function() {

  it("returns a word given", function (){
    expect(wordScorer('dog')).to.eql(['dog'])
  });
  it("saves two of the same word as one", function(){
    expect(wordScorer('dog dog')).to.eql(['dog'])
  });
  it("saves all nonduplicate words", function() {
    expect(wordScorer("cat dog dog")).to.eql(['dog', 'cat'])
  });
  it("counts the number of times a word appears", function(){
    expect(wordScorer("dog dog dog cat")).to.eql(["dog", "cat"])
  });
  it("orders the words so that the duplicate word is first", function() {
    expect(wordScorer("cat dog dog dog cat bunny")).to.eql(['dog', 'cat', 'bunny'])
  });
  it("does everything", function() {
    expect(wordScorer("i i am am am crazy crazy aey crazy aey aey")).to.eql(['am', 'crazy', 'aey', 'i'])
  });
});
