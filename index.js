
var katzDeliLine = [];

var counter = 0;

function takeANumber(katzDeliLine, name) {
   katzDeliLine.push(name);
   counter++
  return `Welcome, ${name}. You are number ${counter} in line.`
}

takeANumber(katzDeliLine, 'Frank')


function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return `There is nobody waiting to be served!`;
  } else {
    return `Currently serving ${katzDeliLine.shift()}.`;
  }
}


function currentLine(katzDeliLine) {
  let displayLine = [];
  if (katzDeliLine.length === 0) {
    return `The line is currently empty.`;
  } else {
    for (let i = 0; i<katzDeliLine.length; i++) {
      displayLine.push(` ${i+1}. ${katzDeliLine[i]}`)
    }
    return `The line is currently:${displayLine}`;
  }
  
}

line.push(` `+[i+1]+`. `  + katzDeli[i])