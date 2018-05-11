const app = "I don't do much."

function destructivelyAppendKitten(name){
  kittens.push(name)
  return kittens
}

function destructivelyPrependKitten(name){
  return kittens.unshift(name)
}

function destructivelyRemoveLastKitten(name){
  kittens.pop()
  return kittens
}
destructivelyRemoveFirstKitten(name){
  kittens.shift()
  return kittens
}