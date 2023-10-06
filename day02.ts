import { readFileSync } from 'fs';

const test_values = `1-3 a: abcde
1-3 b: cdefg
2-9 c: ccccccccc`.split('\n');

const file = readFileSync('day02.data', { encoding: 'utf-8' }).split('\n');

// let validCount = 0;

// for (const line of file) {
//   const [rule, pw] = line.split(':').map((e) => e.trim());
//   const [interval, letter] = rule.split(' ');
//   const parsedInterval = interval
//     .split('-')
//     .map((e) => +e)
//     .sort((a, b) => a - b);

//   const total = pw
//     .split('')
//     .reduce((count, letter2) => (count += +(letter2 === letter)), 0);

//   if (parsedInterval[0] <= total && total <= parsedInterval[1]) validCount++;
// }

// Part 2
let validCount = 0;

for (const line of file) {
  const [rule, pw] = line.split(':').map((e) => e.trim());
  const [interval, letter] = rule.split(' ');
  const parsedInterval = interval
    .split('-')
    .map((e) => +e)
    .sort((a, b) => a - b);

  const x1 = pw[parsedInterval[0] - 1] === letter,
    x2 = pw[parsedInterval[1] - 1] === letter;

  if ((x1 && !x2) || (!x1 && x2)) validCount++;
}

console.log(validCount);
