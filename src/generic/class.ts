import { IStack } from "../types";

class Stack<T> implements IStack<T> {
  private storage: T[] = [];

  constructor(private capacity = 4) {}

  push(item: T): void {
    if (this.size() === this.capacity) {
      throw Error("stack is full");
    }

    this.storage.push(item);
  }

  pop(): T | undefined {
    return this.storage.pop();
  }

  peek(): T | undefined {
    return this.storage[this.size() - 1];
  }

  size(): number {
    return this.storage.length;
  }
}

// const stringStack = new Stack<string>();
// stringStack.push("hello");
// stringStack.push("world");
// stringStack.push("!");
// stringStack.push("!"); // 4번째
// // stringStack.push("!");

// console.log(stringStack.peek());

const numberStack = new Stack<number>();
numberStack.push(1);
numberStack.push(2);
numberStack.push(3);
numberStack.push(100);

console.log(numberStack.peek()); // 100
console.log(numberStack.size()); // 4

// numberStack.push(101); // ❌ Error: stack is full
