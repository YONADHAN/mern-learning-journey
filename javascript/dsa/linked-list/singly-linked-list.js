class Node {
    constructor(value) {
        this.value = value
        this.next = null;
    }
}


class LinkedList {
    constructor() {
        this.head = null
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0;
    }

    append(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
            this.size++;
        } else {
            let curr = this.head;
            while (curr.next) {
                curr = curr.next;
            }
            curr.next = node;
            this.size++;
        }
    }

    prepend(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
            this.size++;
        } else {
            node.next = this.head;
            this.head = node;
            this.size++;
        }
    }


    insertValue(value, index) {
        const node = new Node(value);
        if (index < 0 || index > this.size) {
            return;
        } else if (index === 0) {
            node.next = this.head;
            this.head = node;
            this.size++;
        }
        else {
            let curr = this.head;
            for (let i = 0; i < index - 1; i++) {
                curr = curr.next;
            }
            node.next = curr.next;
            curr.next = node;
            this.size++;
        }
    }


    removeFrom(index) {
        if(index<0 || index>=this.size) {
            return;
        }
        else if(index === 0) {
            this.head = this.head.next;
            this.size--;
        }     
        else{
            let prev = this.head;
            for (let i = 0;i<index-1;i++) {
                prev = prev.next;
            }
            let removedNode = prev.next;
            prev.next = removedNode.next;
            this.size--;
        }
    }

    removedValue(value) {
        if(this.isEmpty ()) {
            console.log("Not possible")
            return;
        }
        else if(this.head.value === value) {
            this.head = this.head.next;
            this.size--;
        }
        
        else {
            let curr = this.head;
            while(curr.next!==null && curr.next.value!==value) {
                curr  = curr.next;
            }

            if(curr.next) {
                let removedNode = curr.next;
                curr.next = removedNode.next;
                this.size--;
                return removedNode.value;
            }
        }
        return null;
    }

    search(value) {
    let curr = this.head;
    let index = 0;

    while (curr) {
        if (curr.value === value) return index;
        curr = curr.next;
        index++;
    }

    return -1;
}


    reverse(){
        if(this.isEmpty()){
            return;
        }else{
            let prev = null
            let curr = this.head;

            while(curr) {
                let next = curr.next;
                curr.next = prev;
                prev = curr;
                curr = next;
            }
            this.head = prev;
        }
    }

 print() {
    if (this.isEmpty()) {
        console.log("List is empty");
        return;
    }

    let curr = this.head;
    let result = "";

    while (curr) {
        result += curr.value + " -> ";
        curr = curr.next;
    }

    console.log(result + "null");
}
}


const list = new LinkedList()

list.append(10)
list.append(20)
list.append(30)

list.print()
// 10 -> 20 -> 30 -> null

list.reverse()
list.print()
// 30 -> 20 -> 10 -> null