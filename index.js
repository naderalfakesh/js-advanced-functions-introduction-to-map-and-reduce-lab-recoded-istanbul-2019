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
function mapToDouble(arr){
  const result =[];
  for(const elm of arr){
    result.push(Math.sqrt(elm));
  }
  return result;
}

function mapToNoChange(arr){
  return [...arr];
}
