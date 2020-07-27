/**
 * Initialize your data structure here.
 */
class MyQueue {
  constructor() {
    this.stack = [];
    this.front = "";
  }

  /**
   * Push element x to the back of queue.
   * @param {number} x
   * @return {void}
   */
  push(x) {
    let auxiliaryStack = [];
    // if(this.stack.length === 0) {
    //   this.front = x;
    // }

    if (this.stack.length === 0) {
      this.front = x;
    }

    while (this.stack.length > 0) {
      auxiliaryStack.push(this.stack.pop());
    }

    auxiliaryStack.push(x);

    while (auxiliaryStack.length > 0) {
      this.stack.push(auxiliaryStack.pop());
    }
  }

  /**
   * Removes the element from in front of queue and returns that element.
   * @return {number}
   */
  pop() {
    if (this.stack.length !== 0) {
      this.front = this.stack[this.stack.length - 2];
    }
    return this.stack.pop();
  }

  /**
   * Get the front element.
   * @return {number}
   */
  peek() {
    return this.stack.length ? this.front : undefined;
  }

  /**
   * Returns whether the queue is empty.
   * @return {boolean}
   */
  empty() {
    return this.stack.length ? false : true;
  }
}
