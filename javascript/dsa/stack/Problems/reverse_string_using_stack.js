class Stack {
    constructor() {
        this.item = [];
    }
    push(value) {
        this.item.push(value);
    }
    pop(){
        return this.item.pop()
    }
    
    reverse(str) {
        let reversedString = ""
        let newStack = new Stack();
        for(let i = 0;i<str.length;i++) {
            newStack.push(str[i])
        }
        while(newStack.item.length>0){
            reversedString+=newStack.pop()
        }
        return reversedString;
    }
}