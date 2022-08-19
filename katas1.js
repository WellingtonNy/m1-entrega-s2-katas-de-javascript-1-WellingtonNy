function oneThroughTwenty() {
  let resposta = []
  for (i = 1; i <= 20; i++) {
    resposta.push(i);
  }
  return resposta;
}
console.log(oneThroughTwenty());



function evensToTwenty() {
  let resposta = []
  for (i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
      resposta.push(i);
    }
  }
  return resposta;
}
console.log(evensToTwenty());



function oddsToTwenty() {
  let resposta = []
  for (i = 1; i <= 20; i++) {
    if (i % 2 === 1) {
      resposta.push(i);
    }
  }
  return resposta;
}
console.log(oddsToTwenty());



function multiplesOfFive() {
  let resposta = []
  for (i = 1; i <= 100; i++) {
    if (i % 5 === 0) {
      resposta.push(i);
    }
  }
  return resposta;
}
console.log(multiplesOfFive());



function squareNumbers() {
  let resposta = []
  for (i = 1; i <= 100; i++) {
    if (Number.isInteger(Math.sqrt(i))) {
      resposta.push(i);
    }
  }
  return resposta;
}
console.log(squareNumbers());



function countingBackwards() {
  let resposta = []
  for (i = 20; i >= 1; i--) {
    resposta.push(i);
  }
  return resposta;
}
console.log(countingBackwards());



function evenNumbersBackwards() {
  let resposta = []
  for (i = 20; i >= 1; i--) {
    if (i % 2 === 0) {
      resposta.push(i);
    }
  }
  return resposta;
}
console.log(evenNumbersBackwards());



function oddNumbersBackwards() {
  let resposta = []
  for (i = 20; i >= 1; i--) {
    if (i % 2 === 1) {
      resposta.push(i);
    }
  }
  return resposta;
}
console.log(oddNumbersBackwards());



function multiplesOfFiveBackwards() {
  let resposta = []
  for (i = 100; i >= 1; i--) {
    if (i % 5 === 0) {
      resposta.push(i)
    }
  }
  return resposta
}
console.log(multiplesOfFiveBackwards());



function squareNumbersBackwards() {
  let resposta = []
  for (i = 100; i >= 1; i--) {
    if (Number.isInteger(Math.sqrt(i))) {
      resposta.push(i);
    }
  }
  return resposta;
}
console.log(squareNumbersBackwards());
