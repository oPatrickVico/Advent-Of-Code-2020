import { readFileSync } from 'fs';

const mock = `abc

a
b
c

ab
ac

a
a
a
a

b`.split('\n\n');

const data = readFileSync('day06.data', { encoding: 'utf-8' }).split('\n\n');

function countInstances(strings: string[]) {
  let total = 0;

  for (const str of strings) {
    const gotted: string[] = [];
    for (const char of str) {
      if (char === '\n' || char === '') continue;
      if (!gotted.includes(char)) {
        gotted.push(char);
        total++;
      }
    }
  }

  console.log(total);
}

function countInstances2(strings: string[]) {
  let total = 0;

  for (const str of strings) {
    let answers: Record<string, number> = {};
    for (const char of str) {
      if (char === '\n') continue;
      if (!answers[char]) answers[char] = 0;
      answers[char]++;
    }
    for (const v of Object.values(answers)) {
      if (v === str.trim().split('\n').length) total++;
    }
  }

  console.log(total);
}

countInstances2(data);
