import printHello, { sayHello } from './static-module'

console.error(sayHello())
printHello('universe')

import('./dynamic-module').then(module => {
  const sayHello = module.sayHello
  const printHello = module.default
  console.warn(sayHello())
  printHello('omniverse')
})
