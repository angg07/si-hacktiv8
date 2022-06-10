function linearSearch(arr, num){
    for(let i=0; i < arr.length; i++){
        if (arr[i] === num) {
            return i
        }
    }
    return null
}

let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8]
let arr1 = 
console.log(linearSearch(arr, 4), `<<<<<<<<<<<<<<<<<<<<<<`)