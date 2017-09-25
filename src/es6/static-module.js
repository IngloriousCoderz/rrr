// @flow

const DEFAULT_WHO = 'world'

export const sayHello = (who: string = DEFAULT_WHO): string => `Hello ${who}!`

export const sayGoodbye = (who: string = DEFAULT_WHO): string =>
  `Goodbye ${who}...`

export default (greeting: Function) => (who: string): void =>
  console.log(greeting(who))

sayHello(Math.PI) // this gives a flow error
sayGoodbye() // this doesn't
