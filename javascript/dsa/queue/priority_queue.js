class PriorityQueue {
  constructor() {
    this.items = []
  }

  enqueue(element, priority) {
    const node = { element, priority }
    this.items.push(node)

    // Sort (lower number = higher priority)
    this.items.sort((a, b) => a.priority - b.priority)
  }

  dequeue() {
    if (this.isEmpty()) {
      console.log("Queue is empty")
      return null
    }
    return this.items.shift()
  }

  peek() {
    return this.isEmpty() ? null : this.items[0]
  }

  isEmpty() {
    return this.items.length === 0
  }

  size() {
    return this.items.length
  }

  print() {
    console.log(this.items)
  }
}