// @flow

import printGreeting, { sayHello, sayGoodbye } from './static-module'

const whos: Array<string> = ['omniverse', 'megaverse', 'ultraverse']

import('./dynamic-module').then(
  ({ sayHello: Function, default: printHello }) => {
    console.warn(sayHello())
    const [first: string, ...rest: Array<string>] = whos
    printGreeting(sayGoodbye)(first)
    rest.forEach(printHello)
  }
)

console.error(sayHello())
printGreeting(sayHello)('universe')
printGreeting(sayGoodbye)('cruel world')
printGreeting(sayHello)(Math.PI)

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

const fetchStarWarsData = (type: string) => (id: number = 1): Promise<Object> =>
  fetch(`https://swapi.co/api/${type}/${id}`)
    .then(handleErrors(type, id))
    .then(response => response.json())

const fetchStarWarsCharacter = fetchStarWarsData('people')

const fetchStarWarsStarship = fetchStarWarsData('starships')

async function fetchC3PO(): Promise<void> {
  try {
    const c3po = await fetchStarWarsCharacter(2)
    return c3po
  } catch (error) {
    alert(error)
  }
}

fetchC3PO().then(console.log)

function* totalCostOfStarships(...ids: Array<number>) {
  const promises: Array<Promise<Object>> = ids.map(fetchStarWarsStarship)

  try {
    const responses: Array<Object> = yield Promise.all(promises)
    const starships: Array<Object> = yield responses.filter(
      ({ name }) => name != null
    )
    const total: number = starships.reduce(
      (total, { cost_in_credits }) => (total += parseInt(cost_in_credits, 10)),
      0
    )

    return total
  } catch (error) {
    console.warn(error)
  }
}

const it: Generator<
  Array<Object>,
  number,
  Array<Object>
> = totalCostOfStarships(1, 2, 3)

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

const NEW_METHOD = 'sayMyAgeInDogYears'

const person = {
  age: 0,

  sayMyAge() {
    return `My age is ${this.age}`
  },

  get ageInDogYears() {
    return Math.round(this.age / 7 * 10) / 10
  },

  set ageInDogYears(age) {
    this.age = age * 7
  },

  [NEW_METHOD]() {
    return `If I was a dog it would be about ${this.ageInDogYears} years`
  },

  printGreeting
}

person.age = 34
console.log(person.sayMyAge())
console.log(person.sayMyAgeInDogYears())

person.ageInDogYears = 1.8
console.log(person.sayMyAge())

person.printGreeting(sayHowdy)('neighbours')

class Person {
  _age = 0

  constructor(age) {
    this._age = age || this._age
  }

  get age() {
    return this._age
  }

  set age(age) {
    this._age = age
    return this
  }

  calculateAgeInDogYears() {
    return Math.round(this._age / 7 * 10) / 10
  }
}

const me = new Person(34)
console.log(`My age in dog years is ${me.calculateAgeInDogYears()}`)

class Woman extends Person {
  get age() {
    return this._age >= 30 ? 29 : super.age
  }

  set age(age) {
    super.age = age
  }

  calculateAgeInDogYears() {
    return 'WHAT?!'
  }
}

const wife = new Woman()
wife.age = 31
console.log(`My wife's age is ${wife.age}`)
console.log(
  `When asked her age in dog years she replied '${wife.calculateAgeInDogYears()}'`
)
