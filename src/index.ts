export function* seeran(seed: number | string = Date.now()) {
  seed = typeof seed === 'string' ? hash(seed) : seed

  let s0 = seed >>> 0
  let s1 = (Math.imul(48271, s0) + 1) >>> 0
  let s2 = (Math.imul(2567483615, s1) + 1) >>> 0
  let c = 1

  while (true) {
    let t = (Math.imul(2091639, s0) + c) >>> 0
    s0 = s1
    s1 = s2
    c = t >> 31
    s2 = (t & 2147483647) >>> 0
    yield (s2 >>> 0) / 2147483648
  }
}

function hash(seed: string) {
  let hash = 0

  if (seed.length !== 0) {
    for (let i = 0; i < seed.length; i++) {
      let char = seed.charCodeAt(i)
      hash = (hash << 5) - hash + char
      hash = hash & hash
    }
  }

  return hash
}
