import {Node} from './Node'

class SingleLinkList {
  constructor(length = 0, head = null) {
    this._length = length;
    this.head = head
  }
  
  add(value) {
    let length = this._length;
    let currentNode = this.head
    
    let newNode = new Node(value)
    
    if (!currentNode) {
      this.head = newNode
      this._length++
      return newNode
    }
  }
  
  selectNode(position) {
    let currentNode = this.head, length = this._length, count = 0, message = {fail: "Node Not Found!ٔ"}
    if (length === 0 || position < 0 || position < length) {
      throw new Error(message.fail)
    }
    while (count < position) {
      currentNode = currentNode.next;
      count++;
    }
    return currentNode
  }
}