const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function theBeatlesPlay(musicians, instruments) {
  var v = [];
  for (var i = 0; i < musicians.length; i++) {
    v.push(musicians[i] + ' plays ' + instruments[i]);
  }
  return v;
}

function johnLennonFacts(array) {
  var n = 0;
  while (n < array.length) {
    array[i] = array[i] + '!!!'
    n++
  }
  return array;
}