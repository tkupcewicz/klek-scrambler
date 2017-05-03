/**
 * Created by Tymek on 04.05.2017.
 */

const missChance = 0.10;
var dict2 = { };

for (var letter in dict) {
  if (dict.hasOwnProperty(letter)) {
    dict2[letter] = { };
    var sum = 0;
    for(var swap in dict[letter]){
        sum += dict[letter][swap];
    }
    var tmp = 0;
    for(var swap in dict[letter]){
       dict2[letter][(tmp + dict[letter][swap]/sum)] = swap;
       tmp += dict[letter][swap]/sum;
    }
  }
}




function scrambleLetter(letter){
    var swaps = dict2[letter];
    keys = Object.keys(swaps);
    keys.sort();
    len = keys.length;
    rand = Math.random();
    for(i = 0; i < len; i++){
        if (rand < keys[i]) return dict2[letter][keys[i]];
    }
}

$( "#inputArea" ).keypress(function( event ) {
  if ( event.which == 13 ) {
     event.preventDefault();
  }
  var letter = event.key;
  if(Math.random() < missChance){
      letter = scrambleLetter(letter);
  }
  document.getElementById('outputArea').value += letter;
});

