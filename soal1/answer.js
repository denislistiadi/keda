// POINT !
const pointOne = (number) => {
  for (let i = number; i > 0; i--) {
    if (i % 5 == 0 && i % 3 == 0) {
      console.log("fish bash")
      return "fish bash"
    }
    if (i % 5 == 0) {
      console.log("bash")
      return "bash"
    }
    if (i % 3 == 0) {
      console.log("fish")
      return "fish"
    }
  }
}

// pointOne(10)

// POINT 2
// Descending function
const pointTwoDesc = (array) => {
  let done = false
  while (!done) {
    done = true
    for (let i = 1; i < array.length; i += 1) {
      if (array[i - 1] < array[i]) {
        done = false
        let tmp = array[i - 1]
        array[i - 1] = array[i]
        array[i] = tmp
      }
    }
  }

  console.log(array)
  return array
}

// Ascending function
const pointTwoAsc = (array) => {
  let done = false
  while (!done) {
    done = true
    for (let i = 1; i < array.length; i += 1) {
      if (array[i - 1] > array[i]) {
        done = false
        let tmp = array[i - 1]
        array[i - 1] = array[i]
        array[i] = tmp
      }
    }
  }

  console.log(array)
  return array
}

// pointTwoAsc('asc',[12, 10, 15, 11, 14, 13, 16])
// pointTwoDesc([12, 10, 15, 11, 14, 13, 16])

// POINT 3
const pointThree = (string) => {
  const stringReverse = string.split("").reverse().join("")
  if (string === stringReverse) return true
  return false
}

// console.log(pointThree('kata'))

module.exports = {
  pointOne,
  pointTwoAsc,
  pointTwoDesc,
  pointThree,
}
