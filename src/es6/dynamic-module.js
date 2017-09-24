const DEFAULT_WHO = 'multiverse'

export const sayHello = (who = DEFAULT_WHO) => `Hello ${who}!`

export default who => console.log(sayHello(who))
