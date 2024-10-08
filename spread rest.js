//Copying Objects and Arrays
//  1. Shallow Copy
let student={
    name:'NarasimhaReddy',
    gender:'Male',
    age:'23',
    address:{
        pincode:518401,
        city:'Kurnool',
        street:'VR colony'
    }
}
let studentCopy1 = Object.assign({}, student);

console.log(studentCopy1);

let studentCopy2={...student}
console.log(studentCopy2)

studentCopy1.address.city = 'Nandikotkur';
studentCopy2.address.street = 'Patel center';

console.log('Original student',student)
console.log('assigned studentcopy1',studentCopy1 )
console.log('spread studentcopy2',studentCopy2 )

// 2. Deep Copy
let details={
    Name:'Venkatshiva',
    Age:20,
    gender:'male',
    education:{
        college:'MBU',
        course:'Btech',
        year:3
    }

}
let detailsDeepCopy = JSON.parse(JSON.stringify(details));
detailsDeepCopy.education.college = 'New College';
detailsDeepCopy.education.year = 4;

console.log('Origianl details', details)
console.log('deepcopied details ',detailsDeepCopy)


// Using Spread Operator
// 1. Spread in Arrays
let nums=[12,2,211,23,34]
let cities=['kurnool','nandyala','nandikotkur','atmakur','Hyderabad']

let spread=[...nums,...cities]
console.log(spread)

//2. Spread in Objects
let num={
    num1:12,
    num2:2,
    num3:21,
    num4:23,
    num5:34
}
let city={
    city1:'kurnool',
    city2:'nandyala',
    city3:'nandikotkur',
    city4:'atmakur',
    city5:'Hyderabad'
}

let Spread={...num,...city}
console.log(Spread)



// Using Rest Operator
//1. Rest in Functions
function sum(...numbers){
    return numbers.reduce((a,b)=>a+b,0)

}
console.log(sum(1,2,3))
console.log(sum(200,300,40))
console.log(sum())


//  2. Rest in Array Destructuring
let array=["Narasimha","vinay","vajid","kartheek","venkat"]

let[first,second,...remaining]=array
console.log('First Element is' ,first)
console.log('Second ELement is',second)
console.log('Remaining element is ',remaining)