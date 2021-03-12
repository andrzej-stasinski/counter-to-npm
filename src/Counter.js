

import {Button} from './Button.js'
import {Header} from './Header.js'

export const Counter = class {
    constructor(selector, start = 0) {
        const container = document.querySelector(selector)
        if(!container) throw new Error('Container not found')
        this.selector = selector
        this.container = container
        this.number = start
    }
    init() {
        this.render()
    }
    render() {
        this.container.innerText = ''
        const h1 = new Header(this.number)
        const button = new Button('[ ++ ]',() => this.inc())
        this.container.appendChild(h1.render())
        this.container.appendChild(button.render())
    }
    inc() {
        this.number++
        this.render()
    }
    status() {
        console.log('Current number is: ' + this.number)
        return this.number
    }
    toString() {
        return 'Current number is: ' + this.number
    }
    valueOf() {
        return this.number
    }
}
export default Counter


























































