class LinkedList {
  constructor() {
    this.val = null;
    this.next = null;
    this.length = 0;
  }

  /**
   * @param {number} index
   * @return {number}
   */
  get(index) {
    if (!this.length || index < 0) return -1;

    let start = this;
    let count = 0;

    while (start) {
      if (count === index) return start.val;

      start = start.next;
      count += 1;
    }

    return -1;
  }

  addAtHead(val) {
    if (this.val == null) {
      this.val = val;
      return;
    }

    const oldVal = this.val;
    const oldNext = this.next;
    this.length += 1;
    this.val = val;
    this.next = {
      val: oldVal,
      next: oldNext
    };
  }

  addAtTail(val) {
    if (this.val == null) {
      this.val = val;
      return;
    }

    let tail = this
    while (tail && tail.next != null) {
      tail = tail.next;
    }

    this.length += 1;
    tail.next = {
      val: val,
      next: null
    }
  }

  addAtIndex(index, val) {
    if (index === 0) {
      this.addAtHead(val);
      return;
    } 

    if (this.length === index) {
      this.addAtTail(val);
      return;
    }

    let start = this.next;
    let count = 1;

    while (start) {
      if (count === index) {
        const nextVal = start.val;
        const nextPointer = start.next;
        start.val = val;
        start.next = {
          val: nextVal,
          next: nextPointer
        };

        this.length += 1;
        break;
      }

      count += 1;
      start = start.next;
    }
  }

  deleteAtIndex(index) {
    if (index < 0 || this.length < index || this.val == null) return;

    let start = this;
    let count = 0;

    while (start) {
      if (index === count + 1) {
        if (start.next) {
          start.next = start.next.next;
          this.length -= 1;
        }

        break;
      }

      count += 1;
      start = start.next;
    }
  }
}

module.exports = LinkedList;
