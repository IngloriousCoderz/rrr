var DEFAULT_WHO = 'world'

export function sayHello(who = DEFAULT_WHO) {
  return `Hello ${who}!`
}

export default function printHello(who) {
  console.log(sayHello(who))
}
