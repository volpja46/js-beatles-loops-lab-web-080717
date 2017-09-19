
    const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];

    const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

  function theBeatlesPlay (musicians, instruments) {
    const array = []

    for (var i = 0; i < musicians.length; i++){
      array.push(`${musicians[i]} plays ${instruments[i]}`)
        }
        return array
      }

      const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

      function johnLennonFacts(facts) {
        const Facts = []

          let i = 0
            while (i < facts.length) {
              Facts.push(`${facts[i]}!!!`)
              i++
            }
            return Facts
  }

        function iLoveTheBeatles(n) {
          let array = [];
            do {
              array.push('I love the Beatles!')
              n++
            } while(n< 15)
            return array;
      }

    // it("returns an array of strings containing what instruments each musician plays",
