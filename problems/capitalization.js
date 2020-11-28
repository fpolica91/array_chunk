


function capitalize(str){
  let result =  ""

    for(let i =0; i < str.length; i++){

     if(str[i-1] === " " && i !== 0){
        result += "" + str[i].toUpperCase()
        console.log('i am result 1', result, i)
      }

      else if(str[i] && i===0 ){
        result = str[0].toUpperCase()
        console.log('i am result 2', result, i)
      }
       else result += str[i]
       console.log('i am result 3', result, i)
    }
    return result;
}


function caps(str){
  let sentence = str.split(" ")
  let words = []
  for(let word of sentence){
    console.log(word.slice(1))
    words.push(word[0].toUpperCase() + word.slice(1))
    
    
  }
  console.log(words)
  return words.join(' ')
}

console.log(caps("hi there, how is it going?"));

// console.log(capitalize("a short sentence"))
// console.log(capitalize("a lazy fox"))
// console.log(capitalize("look it is working!"))

