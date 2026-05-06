let companyName="Testleaf"//address 100
let firstName="Testleaf"//address 100

console.log(companyName===firstName);



let test=('it\'s a reg\tression \ntesting \\ ')
    console.log(test);


let testCase="Create a new lead"
let testCasid=1424
let resultconcat=testCase.concat(testCasid)
console.log(resultconcat);


//+
let resultconcat1=testCasid+"-"+testCase+"passed"
console.log(resultconcat1);

//template literal-> `${}` `backticks`
function funName(a){
console.log(`there is ${a} testacases`)
}

funName(500)


let course="playwright"
//length -property
//index=0
//length=1
console.log(`the length of the string is ${course.length}`);


//charAt()     [used to get character of particular index]

console.log(`the 2nd  character ${course.charAt(1)}`);

//indexof()


console.log(`the index of w is ${course.indexOf('w')}`);


//split()
console.log(course.split(" "));

let course1="playwright Automation"
console.log(course1.split(" "));


//slice

console.log(course.slice(2,5));   // ayw get printed

console.log(course.substring(2,5));   // ayw get printed

console.log(course.slice(5,2)); //start index greater than end index nothing get printed.

console.log(course.substring(5,2)); //substring when start index greater than end index than values get swapped
//==> (2,5)

console.log(course.slice(5,-2));


console.log(course.slice(5));



//substring()
console.log(course.substring(5,-2));//ayw //(5,0)=>(0,5)