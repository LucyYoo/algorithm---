//내가 푼 방법
function reverse(string){
  const reverseArr = [];
  function reverseString(string){
      if(!string.length) return;
   
      reverseArr.push(string[string.length - 1]);
   
      reverseString(string.slice(0, string.length - 1))
  }
 reverseString(string);
 return reverseArr.join('');
}

//모법답안
function reverse(str) {
    if(str.length <= 1) return str;
    
    return reverse(str.slice(1)) + str[0]
}
