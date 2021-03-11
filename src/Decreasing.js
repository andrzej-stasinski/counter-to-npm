
import {Button} from './Button.js'
import {Counter} from './Counter.js'

class Decreasing extends Counter {
    constructor(selector) {
        super(selector)
    }
    dec() {
        this.number--
        this.render()
    }
    render() {
        super.render()
        const button = new Button('[ - ]',() => this.dec())
        this.container.appendChild(button.render())
    }
}
export default Decreasing













