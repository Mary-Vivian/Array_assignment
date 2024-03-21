// last item of the following array
let arr1=[3,7,34,90,12]
let arr2=[true,"green","where",12,56]
console.log('last item', arr1.slice(-1))
console.log(arr2.slice(-1))

// joining element in an array
 let stringmyPets=["Cow","Bird","Snake","Dog"]
 console.log((stringmyPets.join("")))

//  sorting items in an array
 let arr3=[-5,9,5,3,2,-3,6,8,4,1]
 console.log((arr3.sort()))

// finding a word in an a array
let arr5=["the","way","x",4]
if (arr5.includes("food")){
console.log((arr5))}
else{
    console.log(("the search word was not found"))
}
// sorting a string
let word="renniw"
console.log(word.split('').sort().join(''))
// // removing duplicates
 let arr=["boy","man","girl",  "school", "girl","Woman"]
 let unique=[...new Set(arr)]
 let duplicatearray=arr.filter((item,index) =>arr.indexOf(item)!==index)
 console.log((unique))
 console.log((duplicatearray))

// inserting an element
let fruits=["Apple","Mango","Grapes","Kiwi","Orange","Banana","Melon","Guava","Lemon","Dragonfruit"]
fruits.slice(5,0,"Tomato")
console.log((fruits))


