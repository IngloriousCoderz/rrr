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

const handleErrors = (type, id) => response => {
  if (!response.ok) {
    console.warn(`${type} - ${id} not found`)
    // throw new Error(`${response.status} - ${response.statusText}`)
  }
  return response
}

const fetchStarWarsData = type => (id = 1) =>
  fetch(`https://swapi.co/api/${type}/${id}`)
    .then(handleErrors(type, id))
    .then(response => response.json())

const fetchStarWarsCharacter = fetchStarWarsData('people')

const fetchStarWarsStarship = fetchStarWarsData('starships')

async function fetchC3PO() {
  try {
    const c3po = await fetchStarWarsCharacter(2)
    console.log(c3po)
  } catch (error) {
    alert(error)
  }
}

fetchC3PO()

const totalCostOfStarships = async (...ids) => {
  const promises = ids.map(fetchStarWarsStarship)

  try {
    const responses = await Promise.all(promises)
    const starships = responses.filter(({ name }) => name != null)
    const total = starships.reduce(
      (total, { cost_in_credits }) => (total += parseInt(cost_in_credits, 10)),
      0
    )

    console.log(total)
  } catch (error) {
    console.warn(error)
  }
}

totalCostOfStarships(1, 2, 3)
