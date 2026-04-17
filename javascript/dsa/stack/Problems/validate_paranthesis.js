class Stack {
    constructor(){
        this.items  = []
    }

    push(value){
        this.items.push(value)
    }

    isEmpty(){
        return this.items.length === 0;
    }

    pop(){
        if(this.items.length===0) {
            return;
        }else{
            return this.items.pop()
        }
    }

    validateParanthesis(paranthesis){
        let obj = {
            "(":")",
            "{":"}",
            "[":"]",
        }
        let stack = new Stack()
        for(let para of paranthesis) {
            if(Object.keys(obj).includes(para)) {
                stack.push(para)
            }else{
                let removedPara = stack.pop()
                if(obj[removedPara]!==para){
                    return false;
                }
            }
        }
        return stack.isEmpty();
    }
}