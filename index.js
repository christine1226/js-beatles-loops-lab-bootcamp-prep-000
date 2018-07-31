// add solution here
var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
var instruments=["Guitar", "Bass guitar", "Lead guitar", "Drums"];

function theBeatlesPlay(musicians, intstruments){
var array=[];
  for (var i=0; i<5; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array
}
