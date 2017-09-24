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

function* totalCostOfStarships(...ids) {
  const promises = ids.map(fetchStarWarsStarship)

  try {
    const responses = yield Promise.all(promises)
    const starships = yield responses.filter(({ name }) => name != null)
    const total = starships.reduce(
      (total, { cost_in_credits }) => (total += parseInt(cost_in_credits, 10)),
      0
    )

    return total
  } catch (error) {
    console.warn(error)
  }
}

const it = totalCostOfStarships(1, 2, 3)

it
  .next()
  .value.then(responses => {
    console.log(`Responses:  ${responses}`)
    return responses
  })
  .then(responses => it.next(responses).value)
  .then(starships => {
    console.log(`Starships:  ${starships}`)
    return starships
  })
  .then(starships => it.next(starships).value)
  .then(total => {
    console.log(`Total cost: ${total}`)
  })
  .then(() => console.log(`All done:  ${it.next().done}`))
