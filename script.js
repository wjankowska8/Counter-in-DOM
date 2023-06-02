const Counter = function (selector){
    const container = document.querySelector(selector)

    if (!container) throw new Error('Container does not exist')
    this.selector = selector
    this.container = container
    this.number = 0 
}

Counter.prototype.init = function () {
    this.render()
}

Counter.prototype.render = function () {
    this.container.innerText = ''

    const h1 = document.createElement('h1')
    const button  = document.createElement('button')

    h1.innerText = this.number
    button.innerText = '+'

    const self = this 

    button.addEventListener(
        'click',
        function(){
            self.inc()
        }
    )

    this.container.appendChild(h1)
    this.container.appendChild(button)
}

Counter.prototype.inc = function () {
    this.number = this.number + 1
    this.render()
}

Counter.prototype.status = function () {
    console.log('Current number is: ' + this.number)
    return this.number
}

