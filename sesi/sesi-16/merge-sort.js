const merge = (leftArr, rightArr) => {
    let sortedArr = []
    console.log(leftArr, rightArr)
    while(leftArr.length && rightArr.length) {
      if(leftArr[0] < rightArr[0]) {
        sortedArr.push(leftArr.shift())
      } else {
        sortedArr.push(rightArr.shift())
      }
    }
  
    console.log(sortedArr, 'sorted', leftArr, rightArr)
  
    return [...sortedArr, ...leftArr, ...rightArr]
  }
  
  
  const mergeSort = (arr) => {
    if(arr.length < 2) return arr
  
    let midPoint = parseInt(arr.length/2)
    let leftArr = arr.slice(0, midPoint)
    let rightArr = arr.slice(midPoint, arr.length)
    console.log(leftArr, 'left', rightArr, 'right')
    return merge(mergeSort(leftArr), mergeSort(rightArr))
  }
  
  module.exports = mergeSort