function theBeatlesPlay(musicians, instruments){
  var newArray=[];
  
  for(let i = 0; i < musicians.length; i++){
    newArray[i] = musicians[i].concat(" plays ", instruments[i])
  }
  
  return newArray;
  
}

function johnLennonFacts(facts){
  var j = 0;
  var newFacts = [];
  while(j < facts.length){
    newFacts[j] = facts[j].concat("!!!")
    j++
  }
  
  return newFacts;
}