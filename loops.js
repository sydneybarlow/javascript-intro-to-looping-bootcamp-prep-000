function forLoop(array) {
  for (let i = 0; i < 25; i++) {
  if ( i === 1 ) {
    array.push("I am 1 strange loop.")
  } else {
    array.push(`I am ${i} strange loops.`)
  }
  }
  return array
}

function whileLoop(t) {
  while (t>0) {
    console.log(--t)
  }
  return "done"
}

function doWhileLoop(array) {
  return Math.random() >= 0.5
}
  do {
  console.log('doo-bee-doo-bee-doo')
} while (array.length++ > 0 && maybeTrue());
  return array
}