

const compose = (fns) => {
 return  (...args) => {
   return  fns.reduceRight((result, fn) => {
    return  fn(...[result, ...args.slice(1)])
     }, args[0])
  }
}
// const compose = (fns) => {
//   return (...args) => {
//     return fns.reduceRight((acc, fn) => {
//       return fn[...(...acc)]
//     }, args)
//   }
// }

const f1 = x => x - 8
const f2 = x => x ** 2
const f3 = (x, y) => (y > 0 ? x + 3 : x - 3)

const fn = compose([])

console.log(fn('3',1))
console.log(fn(3,-1))

module.exports = compose

