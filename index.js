// Your code here
function mapToNegativize(arr){
  const result =[];
  for(const elm of arr){
    result.push(-1*elm);
  }
  return result;
}
function mapToDouble(arr){
  const result =[];
  for(const elm of arr){
    result.push(2*elm);
  }
  return result;
}
function mapToSquare(arr){
  const result =[];
  for(const elm of arr){
    result.push(elm**2);
  }
  return result;
}

function mapToNoChange(arr){
  return [...arr];
}

function(arr){
  const total = 0; 
  for (const elm of arr){
    total += elm;
  }
  return total;
}