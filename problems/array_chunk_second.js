

function chunk(array, size){
  const chunkArr = []
  let index = 0
  while(index < array.length){
    chunkArr.push(array.slice(index , (index + size)))
    console.log(chunkArr, array)
    index += size;
    
  }
  return chunkArr
}

console.log(chunk([1,2,3,4,5], 2))