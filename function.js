//  this is file to write function 

const validstr =  function validString(s){
    let count = 0;
    for(let i = 0;i<s.length;i++){
        if(s.charAt(i)=='(')count++;
        else{
            count--
            if(count<0)return false
        }
    }
    return count==0;
}
module.exports = validstr
