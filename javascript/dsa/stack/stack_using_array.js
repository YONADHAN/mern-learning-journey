class Stack {
    constructor(){
        this.items = []
    }

    push(value) {
        this.items.push(value)
    }

    pop(){
        return this.items.pop()
    }

    peek(){
        return this.items[this.items.length-1]
    }

    print(){
        console.log(this.items.join("=>")+"=>Null")
    }
}




const stack = new Stack()
stack.push(10)
stack.push(20)
stack.push(30)
stack.print()
console.log('Top element: ', stack.peek())
console.log('Popped  Element: ', stack.pop())
