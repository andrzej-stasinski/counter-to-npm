
import {Counter} from './Counter.js'
import {Button} from './Button.js'

export class Decreasing extends Counter {

    constructor(selector) {
        super(selector)
    }

    dec() {
        this.number = this.number - 1
        this.render()
    }

    render() {
        super.render()

        const button = new Button('-', () => this.dec())

        this.container.appendChild(button.render())
    }

}
export default Decreasing













