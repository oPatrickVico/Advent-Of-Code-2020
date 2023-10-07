/**
 * A string of 10 characters
 * 7 first denote F\B
 * 3 last denote L/R
 */

import { readFileSync } from 'fs';

const getMid = (a: number, b: number) => Math.ceil((a - b) / 2);

function parseSeatPosition(str: string) {
  let h1 = 127,
    l1 = 0,
    mid = 0;
  for (const letter of str.slice(0, 7)) {
    mid = getMid(h1, l1);
    if (letter === 'F') {
      // lower
      h1 -= mid;
    }
    if (letter === 'B') {
      // upper
      l1 += mid;
    }
  }

  let h2 = 7,
    l2 = 0,
    mid2 = 0;
  for (const letter of str.slice(7, 10)) {
    mid2 = getMid(h2, l2);
    if (letter === 'L') {
      // lower
      h2 -= mid2;
    }
    if (letter === 'R') {
      // upper
      l2 += mid2;
    }
  }

  if (h1 === l1 && h2 === l2) {
    let id = h1 * 8 + h2;
    // console.log('found id', id, ' of row ', h1, ' and column ', h2);
    return id;
  } else {
    console.log('something went wrong');
    console.log(h1, l1);
    console.log(h2, l2);
    return 0;
  }
}

parseSeatPosition('FFFBBBFRRR');

const file = readFileSync('day05.data', { encoding: 'utf-8' }).split('\n');

// const highest = file.reduce((a: number, b: string) => {
//   let c = parseSeatPosition(b);
//   if (!c) throw new Error(`Entry ${b} is invalid`);
//   return a > c ? a : c;
// }, 0);

let magic = 53; // Magic number. Don't ask

file
  .sort((a, b) => {
    return parseSeatPosition(a) - parseSeatPosition(b);
  })
  .forEach((a) => {
    if (parseSeatPosition(a) === magic + 1) {
      magic++;
    } else {
      console.log('found ', magic + 1);
    }
  });
