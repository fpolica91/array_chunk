
const array = [1,2,3,4,5,6]

function chunk(size, array){
  const chunk_array = []
 
  for(let i =0; i < array.length; i++){
  console.log(chunk_array, 'at the beginning')
  let lastItem = chunk_array[chunk_array.length - 1]
  console.log(lastItem, 'last item at the beginning')
  if(!lastItem || lastItem.length === size) chunk_array.push([array[i]])
  else lastItem.push(array[i])

  console.log(lastItem, 'last item')
  console.log(chunk_array, 'end of loop')
    console.log("-------END---------")
  }
  return chunk_array
}

chunk(2, array)