import { readFileSync, readSync } from 'fs';

const mock = `light red bags contain 1 bright white bag, 2 muted yellow bags.
dark orange bags contain 3 bright white bags, 4 muted yellow bags.
bright white bags contain 1 shiny gold bag.
muted yellow bags contain 2 shiny gold bags, 9 faded blue bags.
shiny gold bags contain 1 dark olive bag, 2 vibrant plum bags.
dark olive bags contain 3 faded blue bags, 4 dotted black bags.
vibrant plum bags contain 5 faded blue bags, 6 dotted black bags.
faded blue bags contain no other bags.
dotted black bags contain no other bags.`;

function extractRules(string: string) {
  let list1 = string
    .replaceAll(/\./g, '')
    .replaceAll(/bags|bag/g, '')
    .split('\n')
    .map((elem) => elem.split(' contain '));

  let list2 = list1.map((e) => [
    e[0].trim(),
    e[1].split(/,/).map((f) => f.replaceAll(/\d/g, '').trim()),
  ]);

  return Object.fromEntries(list2);
}

function containsShiny(initialBag: string, rules: Record<string, string[]>) {
  let currentPath = [initialBag];
  let visited: { [key: string]: boolean } = { [initialBag]: true };

  major: while (currentPath.length > 0) {
    // Phase 1
    const neighbours = rules[currentPath.at(-1)!];
    if (!neighbours || neighbours.includes('no other')) {
      currentPath.pop();
      continue major;
    }

    // Phase 2
    for (const neigh of neighbours) {
      if (neigh === 'shiny gold') {
        return true;
      }

      if (!visited[neigh]) {
        visited[neigh] = true;
        currentPath.push(neigh);
        continue major;
      }
    }

    // Phase 3
    // Case all neighbours are visited
    currentPath.pop();
  }

  return false;
}

function showResult(rules: any) {
  console.log(
    Object.keys(rules).reduce((a, b) => a + +containsShiny(b, rules), 0)
  );
}

const actualRules = readFileSync('day08.data', { encoding: 'utf-8' });

showResult(extractRules(actualRules));
