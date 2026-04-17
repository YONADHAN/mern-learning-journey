class Stack {
    constructor(){
        this.items = []
    }


    push(value){
        this.items.push(value)
    }

    pop(){
        return this.items.pop()
    }

    isEmpty(){
        return this.items.length === 0;
    }

   sortWithStack(){
        let input = this.items;
        let tempStack = [];
        while(input.length>0) {
            let temp = input.pop();
            
            while(tempStack.length>0 && tempStack[tempStack.length-1]>temp){
                input.push(tempStack.pop())
            }


            tempStack.push(temp)
        }
        return tempStack;
   }
}