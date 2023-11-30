function generateNumbers(lower: number, higher: number) {
  const a: number[] = [],
    b: number[] = [];

  while (a.concat(b).length < 15) {
    const num = Math.floor(Math.random() * 25) + 1;
    if (a.concat(b).includes(num)) continue;
    if (num <= 15) {
      if (a.length === lower) continue;
      a.push(num);
    } else {
      if (b.length === higher) continue;
      b.push(num);
    }
  }
  console.log(a.concat(b).sort((a, b) => a - b));
  console.log(a.concat(b).length);
}

generateNumbers(9, 6);
generateNumbers(6, 9);

