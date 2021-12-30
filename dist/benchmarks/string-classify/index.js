(function(){
  MicroTestClient.run({
    name: 'String Classify',

    setup: function() {
      this.EmberString = require("@ember/string");
      function createRandomWord(length) {
        var consonants = 'bcdfghjklmnpqrstvwxyz',
          vowels = 'aeiou',
          rand = function(limit) {
            return Math.floor(Math.random()*limit);
          },
          i, word='', length = parseInt(length,10),
          consonants = consonants.split(''),
          vowels = vowels.split('');
          for (i=0;i<length/2;i++) {
            var randConsonant = consonants[rand(consonants.length)],
              randVowel = vowels[rand(vowels.length)];
            word += (i===0) ? randConsonant.toUpperCase() : randConsonant;
            word += i*2<length-1 ? randVowel : '';
          }
          return word;
      }
      var stringArray = [];
      for (var i = 0; i < 1000; i++) {
        stringArray.push(createRandomWord(5));
      }
    },

    test: function(){
      stringArray.forEach((string) => {
        this.EmberString.classify(string)
      });
    }
  });

})();
