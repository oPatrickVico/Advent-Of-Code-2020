/**
 * x y = cartesian coordinates
 * w h = width and height
 * p = page number
 * t = amount of trees struck
 */

import { readFileSync } from 'fs';

const mock = `..##.......
#...#...#..
.#....#..#.
..#.#...#.#
.#...##..#.
..#.##.....
.#.#.#....#
.#........#
#.##...#...
#...##....#
.#..#...#.#`.split('\n');

const file = readFileSync('day03.data', { encoding: 'utf-8' }).split('\n');

function computeTreesStruck(stream: string[], right = 1, down = 1) {
  let w = stream[0].length;
  let h = stream.length;
  let y = 0;
  let t = 0;

  for (let row = 0; row < h; row += down) {
    t += +(stream[row].charAt(y % w) === '#');
    y += right;
  }

  return t;
}

console.log(
  computeTreesStruck(file) *
    computeTreesStruck(file, 3) *
    computeTreesStruck(file, 5) *
    computeTreesStruck(file, 7) *
    computeTreesStruck(file, 1, 2)
);
