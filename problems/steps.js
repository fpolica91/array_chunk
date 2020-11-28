
function steps(n){
  for(let i = 1; i <= n; i++){  
    console.log("#".repeat(i) + " ".repeat(n-i))  
  }
}


function bySteps(n){
  for(let row = 0; row < n; row++){
    // create empty string for each iteration, needs to be empty each time
    //we reiterate over row.
    let step ="";
    for(let column = 0; column < n; column++){
      if(column <= row){
        step += "#"
      }else{
        step += " "
      }
    }
    console.log(step)
  }
}




bySteps(4)