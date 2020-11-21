
function anagrams(stringA,stringB ){
  const a = stringA
  .replace(/[^\w]/g, "")
  .toLowerCase()
  .split("")
  .sort()
  .join("")
  const b = stringB.replace(/[^\w]/g, "").toLowerCase()
    .replace(/[^\w]/g, "")
    .toLowerCase()
    .split("")
    .sort()
    .join("")

  return a === b ? true : false
}


console.log(anagrams('rail safety', 'fairy tales'))