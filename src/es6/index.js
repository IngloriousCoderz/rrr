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

const fetchStarWarsCharacter = (id = 1) =>
  fetch(`https://swapi.co/api/people/${id}`)
    .then(response => response.json())
    .then(console.log)
    .catch(alert)

fetchStarWarsCharacter(2)
