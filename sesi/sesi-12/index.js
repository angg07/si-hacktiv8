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



const removeSpace = (text) => {
    // return text.split(' ').join('');

    let removeSpaces = text.replace(/\s/g, '')
    return removeSpaces
}

const reverseText = (text) => {
    return text.split('').reverse().join('')
}

const updateVowels = (text) => {
    let textLower = text.toLowerCase()
    let m = {}
    m['a'] = 0;
    m['e'] = 1;
    m['i'] = 2;
    m['o'] = 3;
    m['u'] = 4;

    let arr = ['b', 'f', 'j', 'p', 'v'];
    
    for (let i = 0; i < textLower.length; i++) {
        let vowelsFind = textLower[i];
        
        if (vowelsFind === 'a' || vowelsFind === 'e' || vowelsFind === 'i' || vowelsFind === 'o' || vowelsFind === 'u') {
            index = m[textLower[i]];
            textLower = textLower.replace(textLower[i], arr[index]);
            // console.log(textLower)
        }
    }
    
    return textLower
}

const encryptPassword = (text) => { // hacktiv 8 
    let noSpaces = removeSpace(text) // hacktiv8
    let reversed = reverseText(noSpaces) // 8vitkcah
    let encryptedPassword = updateVowels(reversed) // 8vjtkcbh
    
    return encryptedPassword
}

// console.log(encryptPassword('hAcktiv 8')) // 8vjtkchb

let numbers = [1,2,2,3,4,5,6,7,8,3,9,10,10,11,12,13,22,24,1,13,5,12,6,4,24]

const getUniqueNumbers = (arr) => {
    const unique = [];
    arr.forEach(item => {
      const isExsit = unique.find(inputItem => {
        return item === inputItem;
      });
      if (!isExsit) {
        unique.push(item);
      }
    });
    return unique;
  }

  console.log(getUniqueNumbers(numbers));