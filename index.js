// add solution here
var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
var instruments=["Guitar", "Bass guitar", "Lead guitar", "Drums"];

function theBeatlesPlay(musicians, intstruments){
var array=[];
  for (let i=0; i<4; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array
}
