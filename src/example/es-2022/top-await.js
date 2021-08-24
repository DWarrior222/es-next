
async function start() {
  const a = await import('./a');
  console.log(a, 'aaaaa');
}

start();
console.log('es-2022');
