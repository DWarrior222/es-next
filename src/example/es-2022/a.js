
// 提案：https://github.com/tc39/proposal-top-level-await
export function then(f, r) {
  console.log(f, r, 'thenthenthen');
  f(111);
}