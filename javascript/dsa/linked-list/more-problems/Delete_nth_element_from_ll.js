class Node {
    constructor(value) {
        this.next = null;
        this.value = value;
    }
}


class LinkedList {
    constructor() {
        this.head = null
        this.size = 0;
    }



    isEmpty(){
        return this.size === 0;
    }

    append(value) {
        const node = new Node(value);

        if(this.isEmpty()) {
            this.head  = node;
        }else {
            let current = this.head;
            while(current.next){
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }


    prepend(value){
        const node = new Node(value);

        if(this.isEmpty()) {
            this.head = node;

        }else{
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }

    insertValue(value, index){
        let node = new Node(value)
        if(index<0 || index>=this.size){
            return null;
        }else {
            
            let curr = this.head;
            for(let i = 0;i<index-1;i++) {
              
                curr = curr.next;
            }

           node.next = curr.next;
           curr.next = node;
           this.size++

        }
    }

    removeFrom(index) {
      
        if(index<0 || index>this.size) {
            console.log("Not possible");
            return
        }else if (index==0){
            this.head = this.head.next;
            this.size--;
        }else {
            let prev = this.head;
            for (let i = 0;i<index-1;i++) {
                prev = prev.next;
            }
            let removedNode = prev.next;
            prev.next = removedNode.next;
            this.size--;
            return removedNode.value
        }
    }

    
}