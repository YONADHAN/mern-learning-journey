class CircularQueue {
    constructor(size) {
        this.size = size;
        this.queue = new Array(size);
        this.front = -1;
        this.rear = -1;
    }

    isEmpty() {
        return this.front === -1;
    }

    isFull() {
        return (this.reaar + 1) % this.size === this.front;
    }

    enqueue(value) {
        if(this.isFull()) {
            console.log("Queue")
        }
    }
}