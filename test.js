function arra(num) {
  let arr = [];
  for (let i = 1; i <= num; i++) {
    arr.push(i);
  }

  return arr.filter((x) => x % 2 === 0);
}
console.log(arra(50));
