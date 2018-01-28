const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(musicians, instruments) {
  var v = [];
  for (var i = 0; i < musicians.length; i++) {
    v.push(musicians[i] + ' plays ' + instruments[i]);
  }
}
