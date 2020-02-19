// Your code here
function mapToNegativize(arr){
  const result =[];
  for(const elm of arr){
    result.push(-1*elm);
  }
  return result;
}

function mapToNoChange(arr){
  return [...arr];
}
