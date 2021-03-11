export class Header {
    constructor(label) {
        this.label = label 
    }
    render() {
        const header = document.createElement('h1')
        header.textContent = this.label
        header.style.color = 'green'
        header.style.border = '1px dotted green'
        return header        
    }
}
export default Header










