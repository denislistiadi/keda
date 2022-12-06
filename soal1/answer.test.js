const {
  pointOne,
  pointTwoAsc,
  pointTwoDesc,
  pointThree,
} = require("./answer.js")

test("point one", () => {
  expect(pointOne(10)).toBe("bash")
})

test("point two ascending", () => {
  expect(pointTwoAsc([12, 10, 15, 11, 14, 13, 16])).toEqual([
    10, 11, 12, 13, 14, 15, 16,
  ])
})

test("point two descending", () => {
  expect(pointTwoDesc([12, 10, 15, 11, 14, 13, 16])).toEqual([
    16, 15, 14, 13, 12, 11, 10,
  ])
})

test("point three", () => {
  expect(pointThree("katak")).toBe(true)
})
