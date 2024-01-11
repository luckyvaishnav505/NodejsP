console.log("Welcome to Programiz!");
const str="codingstar";
function maxVowelsString( str){
    const vowels = ['a','e','i','o','u'];

    let outputString ={maxVowelString:'', vowels:0};
    let tempString='';
    let vowelCount= 0;
    
    for(let index=0; index< str.length;){
                            console.log(tempString,vowelCount);

        if(vowels.indexOf(str[index])>=0){
            vowelCount++;
        }

        tempString +=str[index];

         if(tempString.length ==3){
             if(vowelCount >outputString.vowels ){
                 outputString.maxVowelString =tempString;
                 outputString.vowels = vowelCount;
                 
             }
             tempString ='';
             vowelCount =0;
             index--;
         }else{
             index++;
         }
    }
    console.log(outputString);
    return  outputString.maxVowelString;
}
console.log(maxVowelsString("codingstaraeiou"));
