class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}


class Queue {
    constructor(){
        this.front = null
        this.rear = null;
        this.size = 0;
    }
    isEmpty(){
        return this.size === 0;
    }

    enqueue(value) {
        const node = new Node(value);
        if(this.isEmpty()) {
            this.front = node;
            this.rear = node;
            this.size++;
        }else{
            this.rear.next = node;
            this.rear = node;
            this.size++;
        }
    }

    dequeue() {
        if(this.isEmpty()) {
            return null;
        }else{
            let nodeToreturn = this.front;
            this.front = this.front.next;
            this.size--;
            return nodeToreturn.value;
        }
    }

    peek(){
        return this.front?this.front.value: "Queue is empty."
    }

    isEmpty() {
        return this.size === 0;
    }

    getSize() {
        return this.size;
    }
}


const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30)