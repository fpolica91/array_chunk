
const array = [1,2,3,4,5]
//create an empty array

function chunking(array, size){
  console.log('this is chunking')
  const chunks = []
  for(let i =0; i < array.length;i++){
    let last = chunks[chunks.length -1] 
    if(!last || last.length === size){
      chunks.push([array[i]])
    }else{
      last.push(array[i])
    }
  }
  return chunks
}

console.log(chunking(array, 2))