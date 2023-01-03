// arrays
let marks_class_12 = [87, 78, 92, "not present", true]
console.log(marks_class_12[0])
console.log(marks_class_12[1])
console.log(marks_class_12[2])
console.log(marks_class_12[3])
console.log(marks_class_12[4])
console.log(marks_class_12[5])  //will be undefined
console.log("The length of marks_class_12 is", marks_class_12.length)
marks_class_12[5] = 84 //adding a new value to array
marks_class_12[2] = 98 //changing a new value of an array
console.log(marks_class_12)
console.log(typeof marks_class_12)

// Array methods
let num = [2, 28, 47, 73]
let b = num.toString //b is now a string
console.log(b, typeof b)
let c = num.join("-")
console.log(c, typeof c)
let d = num.pop() //pop returns the popped value
console.log(num, d)
let e = num.push(38) //push returns the new array length
console.log(num, e)
let f = num.shift() //removes element from start of array
console.log(f, num)
let g = num.unshift(54)
console.log(g, num)

let num2 = [1, 2, 3, 4, 5, 6, 7]
console.log(num2.length)
delete num2[1]
console.log(num2)
console.log(num2.length)

let num3 = [11, 12, 13, 14, 15, 16, 17]
let newArray = num.concat(num3)
console.log(newArray)

let compare = (a, b) => {
  return a - b //assending order (if b - a then it will bw dessending order)
}
let num4 = [392, 2903, 38, 47, 2034837]
num4.sort(compare)
console.log(num4)
num2.reverse()
console.log(num2)

// splice and slice
// splice
let num5 = [1, 2, 3, 4]
num5.splice(2, 1, 89, 76)
console.log(num5)

let num6 = [1, 2, 3, 4, 5, 6]
let deletedValues = num6.splice(3, 2, 45, 65, 57775) //shows deleted values
console.log(deletedValues)
console.log(typeof deletedValues)

// slice
let num7 = [12, 21, 34, 23, 289, 2332]
let newNum = num7.slice(3)  //will get rest of entries after 3rd place(including 3rd)
console.log(newNum)

let num8 = [12, 21, 34, 23, 289, 2332]
let newNum1 = num8.slice(2, 4) //will not include 4th entry
console.log(newNum1)
