let person = {
    name: 'udin',
    height: 170,
    weight: 60,
    idealWeight: () => {
        return person.height - 110
    },
    isIdealWeight: () =>  {
        return person.idealWeight() === person.weight
    }
}

person.car = {
    name: 'civic',
    merk: 'honda'
}

person.weight = 50


let idealWeight = person.idealWeight()
let isIdeal = person.isIdealWeight()



/**
 * exercise 1
 */



// const removeSpace = (text) => {
    
// }

// const reverseText = (text) => { // hacktiv8, index=0 => h index terakhir => 8
//     console.log(text, `<=================== ini baru reverse ==================`);
    
//     // bikin variable penampung => 8vi...
//     // looping start dari index terakhir sampai index ke 0
//     // kita masukin per character ke variable penampung
//     // return variable penampung
// }

// const updateVowels = (text) => {
    
// }

// const encryptPassword = (text) => { // hacktiv 8 
//     let noSpaces = removeSpace(text) // hacktiv8
//     let reversed = reverseText(noSpaces) // 8vitkcah
//     let encryptedPassword = updateVowels(reversed) // 8vjtkcbh
    
//     return encryptedPassword
// }

// console.log(encryptPassword('hacktiv         8')) // 8vjtkchb

const removeSpace = (text) => {
    return text
    .split(' ')
    .join('')
 }
// console.log(removeSpace('hacktiv 8'))

const reverseText = (text) => {
  return text
    .split('')
    .reverse()
    .join('')
}
// console.log(reverseText('hacktiv8'))

const updateVowels = (text) => {
    let textLower = text.toLowerCase() // edge case
    let mapVowelsToCharAfter = {
        a: 'b',
        e: 'f',
        i: 'j',
        o: 'p',
        u: 'v'
    }
    
    let updatedVowels = ''
    
    for (let i = 0; i < textLower.length; i++) {
        let char = textLower[i];
        
        // console.log(mapVowelsToCharAfter[char], char, "<=========== log") m[8] => undefined, m[i] => j
        // true => jika nilainya ada, bukan undefined bukan false, bukan null bukan Nan
        
        if (mapVowelsToCharAfter[char]) {
            let charAfterVowel = mapVowelsToCharAfter[char]; // textLower[i] => a
            updatedVowels += charAfterVowel; // 'hacktiv8'.replace('a', 'b')
        } else {
            updatedVowels += char
        }
    }
    
    return updatedVowels
}

const updateVowels2 = (text) => {
    return text
      .replace('a','b')
      .replace('i','j')
      .replace('u','v')
      .replace('e','j')
      .replace('o','p')
  }

const encryptPassword = (text) => { // hacktiv 8 
    let noSpaces = removeSpace(text) // hacktiv8
    let reversed = reverseText(noSpaces) // 8vitkcah
    let encryptedPassword = updateVowels(reversed) // 8vjtkcbh
    
    return encryptedPassword
}

console.log(encryptPassword('hAcktiv 8')) // 8vjtkchb
console.log(encryptPassword('test')) // tsft

// if(0) {
//     console.log('if')
// } else {
//     console.log('else')
// }

// exercise 2

let numbers = [1,2,2,3,4,5,6,7,8,3,9,10,10,11,12,13,22,24,1,13,5,12,6,4,24]

// hint nested loop (looping dalam looping)
// bikin sebuah array yang isinya unique dari array numbers => [7,8,9,11,22]

const getUniqueNumbers = (arr) => {
    // looping numbers 22
    
    let uniqueNumbers = []
    for(i=0;i<arr.length;i++) {
        let currentNumber = arr[i] // 4
        
        let isNumberUnique = true
        for(j=0;j<arr.length;j++) { // 1 1 2 3
            let compareNumber = arr[j]
            
            if(i!==j && currentNumber === compareNumber) {
                isNumberUnique = false
            }
        }
        
        if(isNumberUnique) {
            uniqueNumbers.push(currentNumber)
        }
        
    }
    return uniqueNumbers
}

console.log(getUniqueNumbers([1,1,2,3,3,4]), `<===================  ==================`);
console.log(getUniqueNumbers(numbers), `<===================  ==================`);