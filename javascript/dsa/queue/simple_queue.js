class Queue {
    constructor(){
        this.items = {}
        this.front = 0;
        this.rear = 0;
    }


    enqueue(element) {
        this.items[this.rear] = element;
        this.rear++;
    }

    isEmpty(){
        return this.rear - this.front === 0
    }

    dequeue(){
        if(this.isEmpty()) {
            return null;
        }

        let item = this.items[this.front];
        delete this.items[this.front];
        this.front++;



        if(this.isEmpty()) {
            this.items = {}
            this.rear = 0;
            this.front = 0;
        }

        return item
    }


    size(){
        return this.rear - this.front;
    }

    print() {
        console.log(this.items)
    }
}