import printGreeting, { sayHello, sayGoodbye } from './static-module'

const whos = ['omniverse', 'megaverse', 'ultraverse']

import('./dynamic-module').then(({ sayHello, default: printHello }) => {
  console.warn(sayHello())
  const [first, ...rest] = whos
  printGreeting(sayGoodbye)(first)
  rest.forEach(printHello)
})

console.error(sayHello())
printGreeting(sayHello)('universe')
printGreeting(sayGoodbye)('cruel world')

const sayHowdy = who => `Howdy ${who}!!!`

const printHowdy = printGreeting(sayHowdy)
whos.forEach(printHowdy)
