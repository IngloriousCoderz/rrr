import printGreeting, { sayHello, sayGoodbye } from './static-module'

import('./dynamic-module').then(module => {
  const sayHello = module.sayHello
  const printHello = module.default
  console.warn(sayHello())
  printHello('omniverse')
})

console.error(sayHello())
printGreeting(sayHello, 'universe')
printGreeting(sayGoodbye, 'cruel world')
