const compose = require('./compose.js')
describe('Parallel:', () => {
  test ('Must be define', () => {
  	expect(compose).toBeDefined()
  })
  test ('Simple test', ()=>{
  	const f1 = x => x - 8
    const f2 = x => x ** 2
    const f3 = (x, y) => (y > 0 ? x + 3 : x - 3)

    const fn = compose([f1, f2, f3])

    expect(fn('3',1)).toBe(1081)
    expect(fn(3,-1)).toBe(-8)
  })
}
