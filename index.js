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
function destructivelyRemoveFirstKitten(name){
  kittens.shift()
  return kittens
}

function appendKitten(name){
  return[...kittens,name]
}
function prependKitten(name){
  return [name,...kittens]
}

function removeLastKitten(){
  
}