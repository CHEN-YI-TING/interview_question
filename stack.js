class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  push(value) {
    let newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let currentNode = this.head;
      while (currentNode.next !== null) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
    }
    this.length++;
  }

  pop() {
    if (!this.head) {
      return null;
    } else if (this.length === 1) {
      let popNode = this.head;
      this.head = null;
      this.length = 0;
      return popNode.value;
    } else {
      let currentNode = this.head;
      for (let i = 1; i < this.length - 1; i++) {
        currentNode = currentNode.next;
      }
      let popNode = currentNode.next;
      currentNode.next = null;
      this.length--;
      return popNode.value;
    }
  }

  size() {
    return this.length;
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.pop());
console.log(stack.size());
