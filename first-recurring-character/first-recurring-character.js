/* 
create a variable to hold repeated char
loop through the array

**/

const charMap = (charArray) => {
  for(let i = 0; i < charArray.length; i++) {
    for(let j = i + 1; j < charArray.length; j++) {
      if(charArray[i] === charArray[j]) {
        console.log(i, j)
        return charArray[i]
      }
    }
  }
  return undefined;
}

const charArray = [2,5,3,2,4,2]

charMap(charArray)

const firstRecurringCharacter = charArray => {
  let map = {};
  for(let i=0; i<charArray.length; i++) {
    if(map[charArray[i]] !== undefined) {
      return charArray[i]
    } else { 
      map[charArray[i]] = i;
    }    
    console.log('****', map)
  }
  return undefined
}

const charArray = [2,5,3,1,4,2]

firstRecurringCharacter(charArray)