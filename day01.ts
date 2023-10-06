import { readFile } from 'node:fs/promises';

const test_values = [1721, 979, 366, 299, 675, 1456];

function doubleForLoop(values: number[]) {
  for (let i = 0; i < values.length - 1; i++) {
    for (let j = 1; j < values.length; j++) {
      if (values[i] + values[j] === 2020) {
        console.log(values[i] * values[j]);
        return;
      }
    }
  }
}

function tripleForLoop(values: number[]) {
  for (let i = 0; i < values.length - 2; i++) {
    for (let j = 1; j < values.length - 1; j++) {
      for (let k = 2; k < values.length; k++) {
        if (values[i] + values[j] + values[k] === 2020) {
          console.log(values[i] * values[j] * values[k]);
          return;
        }
      }
    }
  }
}

const path = './day01.data';
const givenValues = await readFile(path, { encoding: 'utf8' })
  .then((text) => text.split('\n'))
  .then((array) => array.map((s) => parseInt(s)));

// doubleForLoop(givenValues);
tripleForLoop(givenValues);
