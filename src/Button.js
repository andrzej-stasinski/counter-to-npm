export class Button {
// export const Button = class {
    constructor(label, onClick) {
        this.label = label 
        this.onClick = onClick
    }
    render() {
        const button = document.createElement('button')
        button.textContent = this.label
        button.addEventListener('click', () => this.onClick())
        button.style.borderRadius = '4px'
        button.style.outline = 'none'
        button.style.border = '1px solid red'
        button.style.padding = '5px 10px'
        button.style.cursor = 'pointer'
        return button        
    }
}
export default Button









