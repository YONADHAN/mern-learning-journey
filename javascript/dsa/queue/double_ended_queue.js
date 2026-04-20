class Deque {
  constructor() {
    this.items = {}
    this.front = 0
    this.rear = 0
  }

  // Add to rear (same as enqueue)
  addRear(element) {
    this.items[this.rear] = element
    this.rear++
  }

  // Add to front
  addFront(element) {
    if (this.isEmpty()) {
      this.addRear(element)
    } else if (this.front > 0) {
      this.front--
      this.items[this.front] = element
    } else {
      // Shift everything right (costly but needed)
      for (let i = this.rear; i > this.front; i--) {
        this.items[i] = this.items[i - 1]
      }
      this.items[this.front] = element
      this.rear++
    }
  }

  // Remove from front
  removeFront() {
    if (this.isEmpty()) {
      console.log("Deque is empty")
      return null
    }

    const item = this.items[this.front]
    delete this.items[this.front]
    this.front++

    this.reset()
    return item
  }

  // Remove from rear
  removeRear() {
    if (this.isEmpty()) {
      console.log("Deque is empty")
      return null
    }

    this.rear--
    const item = this.items[this.rear]
    delete this.items[this.rear]

    this.reset()
    return item
  }

  peekFront() {
    return this.isEmpty() ? null : this.items[this.front]
  }

  peekRear() {
    return this.isEmpty() ? null : this.items[this.rear - 1]
  }

  isEmpty() {
    return this.rear - this.front === 0
  }

  size() {
    return this.rear - this.front
  }

  reset() {
    if (this.isEmpty()) {
      this.front = 0
      this.rear = 0
      this.items = {}
    }
  }

  print() {
    console.log(this.items)
  }
}