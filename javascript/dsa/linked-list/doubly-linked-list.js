class Node {
    constructor(value) {
        this.value = value
        this.next = null
        this.prev = null
    }
}


class DoublyLinkedList {
    constructor(){
        this.head = null;
        this.size = 0;
    }


    isEmpty(){
        return this.size === 0;
    }

    append(value) {
        const node = new Node(value);

        if(this.isEmpty()) {
            this.head = node;            
        }else {
            let curr = this.head;
            while(curr.next){
                curr = curr.next
            }
            curr.next = node;
            node.prev = curr;

            this.size++;
        }
    }

    prepend(value) {
        const node = new Node(value);

        if(this.isEmpty()) {
            this.head = node;
            this.size++;
        }else {
            node.next = this.head;
            this.head.prev = node;
            this.head = node;
            this.size++;
        }
    }

    insertValue(value, index) {
        if(index<0 || index>=this.size) {
            return;
        }else if (index === 0) {
            this.prepend(value);
        }else {
            let curr = this.head;
            for(let i = 0;i<index-1;i++) {
                curr = curr.next;
            }
            node.next = curr.next;
            curr.next.prev  = node;
            curr.next = node;
            node.prev = curr;
            this.size++
        }
    }

    removeValue(value) {
        if(this.isEmpty()){
            return ;
        }else if(this.head.value === value) {
            this.head = this.head.next;
            this.head.prev = null;
            this.size--;
        }else {
            let prev = this.head;
            for(let i = 0;i<index-1;i++) {
                prev = prev.next;
            }
            let removedNode = prev.next;
            prev.next = removedNode.next;
            removedNode.prev = prev;
            this.size--;
        }
    }

    removedDuplicates(){
        if(this.isEmpty() || this.size ==1) return;

        let seen = new Set()

        let curr = this.head;
        let prev = null;

        while(curr) {
            if(seen.has(curr.value)) {

            }else{
                seen.add(curr.value)
                prev = curr;
            }
            curr = curr.next;
        }
    }
}