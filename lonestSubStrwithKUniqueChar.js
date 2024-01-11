//Find the longest substring with k unique characters in a given string

function longestKSubstr(str, allowedUniqueChars) {
    let ouputStr = '';
    let n = str.length;
    
    for(let i=0; i < n ;i++){
        let distictChars = new Set();
        let temString ='';
        for(let j=i; j <n ;j++){
           distictChars.add(str[j]);
           
           if(distictChars.size > allowedUniqueChars){
               break;
           }
                      temString+=str[j];

           
        }
        
         if(temString.length >ouputStr.length ){
               ouputStr = temString;
           }
        
    }
    return ouputStr;
}



let s = "aabacbebebe";
let k = 3;
 
// Function call
console.log(longestKSubstr(s, k));

//output: cbebebe