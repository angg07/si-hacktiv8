let insertionSort = (arr) => {
    for(let i=1;i<arr.length;i++) {
      let left = i -1
      let currentNum = arr[i]
      
      while(left >=0 && arr[left] > currentNum) {
        
        let temp = currentNum
        arr[left + 1] = arr[left]
        arr[left] = temp
        left-=1
        
      }
    }
  
    return arr
  }
  
  module.exports = insertionSort