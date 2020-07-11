function findByFloyd(inp: number[]) {
  let t = inp[0]
  let h = inp[0]
  // eslint-disable-next-line no-constant-condition
  while (true) {
    t = inp[t]
    h = inp[inp[h]]
    if (t === h) {
      break
    }
  }
  let p1 = inp[0]
  let p2 = t
  while (p1 !== p2) {
    p1 = inp[p1]
    p2 = inp[p2]
  }
  return p1
}

const ret = findByFloyd([3, 1, 3, 4, 2])
console.log(ret)