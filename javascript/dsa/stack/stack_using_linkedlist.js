
class Node {
    constructor(value){
        this.next = null;
        this.value = value
    }
}
class Stack {
    constructor() {
        this.top = null;
        this.size = 0;
    }

    push(value) {
        const node = new Node(value);
        node.next = this.top;
        this.top = node;
        this.size++
    }

    pop() {
        if(this.isEmpty()){
            console.log("This stack is empty")
            return null;
        }
        const removedNode = this.top;
        this.top = this.top.next;
        this.size--;
        return removedNode.value;
    }

    isEmpty(){
        return this.size===0;
    }
    peek(){
        return this.top.value;
    }

    getSize(){
        return this.size;
    }

    printStack(){
        let current = this.top;
        let stackValues = []
        while(current){
            stackValues.push(current.value)
            current = current.next;
        }
        return stackValues.join(" => ") + " => Null"
    }
}


const stack = new Stack()
stack.push(10)
stack.push(20)
stack.push(30)
stack.push(40)
console.log(stack.printStack())