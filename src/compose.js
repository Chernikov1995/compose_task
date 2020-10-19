const compose = (arr) => {
  const fns = [...arr]

  return (...args) => {
    return fns.reduceRight((acc, fn, idx) => {
      if (idx === fns.length - 1) {
        return fn(...args)
      }

      return fn(acc)
    }, 0)
  }
}

module.exports = compose
