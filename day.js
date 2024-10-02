const dayjs = require("dayjs")

let comparison = dayjs("10/02/2024").isBefore("11/05/2024")

console.log(comparison);


const dayjs = require("dayjs")
var relativeTime = require("dayjs/plugin/relativeTime")
dayjs.extend(relativeTime)
let date = dayjs("2024-02-10").fromNow()
console.log(date);