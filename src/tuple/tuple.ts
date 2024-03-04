const user1: [number, string] = [1, 'user1'];
const user2: [number, string?] = [2];
const user3: readonly [number, string, ...number[]] = [2, 'user3', 1, 2];

// user3[1] = 'test';

console.log(user1);
console.log(user2);
console.log(user3);