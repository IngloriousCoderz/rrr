import printGreeting, { sayHello, sayGoodbye } from './static-module'

import('./dynamic-module').then(({ sayHello, default: printHello }) => {
  console.warn(sayHello())
  const whos = ['omniverse', 'megaverse', 'ultraverse']
  const [first, ...rest] = whos
  printGreeting(sayGoodbye, first)
  rest.forEach(printHello)
})

console.error(sayHello())
printGreeting(sayHello, 'universe')
printGreeting(sayGoodbye, 'cruel world')
