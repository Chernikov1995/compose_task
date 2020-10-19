const compose = (fns) =>{
	
 return (...args) => {
  let last = fns[fns.length-1](...args)
  return fns.slice(0, fns.length-1).reduceRight((acc, fn) =>{
  	return fn(acc)
  	}, last) 
 }
}
module.exports = compose
