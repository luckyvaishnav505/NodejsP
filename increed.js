/* TODO: Complete func1 so that for any input `arr`
 *       the main function always consoles "Success"
 */
var func1 = function(arr, i, cb)  {
    if (i < arr.length) {
        // Modify the logic here to generate the array elements based on the conditions
        arr[i] = (arr[i]>10 && arr[i]!=100)? 100:arr[i];

        // Recursive call for the next element
        func1(arr, ++i, cb);
    } else {
        // Callback with the generated array
        cb(arr);
    }
    
};
/* ----------------------------------------------- */
/* Do not edit anything below */
var main = function() {
    var arr = [ 1, 30, 40, 20, 10, 9, 8]
    func1(arr, 0, 
             function(output) {
                         console.log(output);

        if (!output || !output.length) {
            console.log("Failure");
            return;
        }
        for (var i = 0; i < output.length; i++) {
            if (output[i] > 10 && output[i] != 100) {
                console.log("Failure");
                return;
            }
        }
        console.log("Success");
    });
}
main();
//----------------------------
// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

console.log("Welcome to Programiz!");

let balls = ['red','blue','red', 'blue', 'blue'];
 let redCount =0;
for(let index=0; index< balls.length; index++){
    
    if(balls[index] === 'red'){
       redCount +=1;
    } 
}

for (let i = 0; i < balls.length; i++) {
        if (i < redCount) {
            balls[i] = 'red';
        } else {
            balls[i] = 'blue';
        }
    }
// n+ n = 0(n)

console.log(balls);