


function anagrams(stringA, stringB){
  const a = stringA.replace(/[^\w]/g, "").toLowerCase()
  const b = stringB.replace(/[^\w]/g, "").toLowerCase()
  
  let aObject = {}
  let bObject = {}

  for(item in a){
    if(!aObject[a[item]]){
        aObject[a[item]] = 1
    }else{
      aObject[a[item]] ++;
    }
  }
  
  for(item in b){
    if(!bObject[b[item]]){
        bObject[b[item]] = 1
    }else{
      bObject[b[item]] ++;
    }
  }

  if(Object.keys(aObject).length 
  !== Object.keys(bObject).length){
    return false;
  }

  for(let char in aObject){
    if(aObject[char] !== bObject[char]){
      return false;
    }
  }

  return true;

}

console.log(anagrams('rail safety', 'fairy tales'))