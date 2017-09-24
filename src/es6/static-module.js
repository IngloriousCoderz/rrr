const DEFAULT_WHO = 'world'

export const sayHello = (who = DEFAULT_WHO) => `Hello ${who}!`

export const sayGoodbye = (who = DEFAULT_WHO) => `Goodbye ${who}...`

export default (greeting, who) => console.log(greeting(who))
