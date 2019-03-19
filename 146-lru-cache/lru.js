// https://zhuanlan.zhihu.com/p/34133067
class ListNode {
  constructor(key, value, pre = null, next = null) {
    this.key = key
    this.value = value
    this.pre = pre
    this.next = next
  }
}

/**
 * @param {number} capacity
 */
class LRUCache {
  constructor(capacity) {
    this.capacity = capacity
    this.map = new Map()
    this.head = new ListNode()
    this.tail = new ListNode()
    this.head.next = this.tail
    this.tail.pre = this.head
  }
  /**
   * @param {number} key
   * @param {number} value
   * @return {void}
   */
  put(key, value) {
    if (!this.map.has(key)) {
      if (this.map.size === this.capacity) {
        let last = this.tail.pre
        this.removeNode(last)
        this.map.delete(last.key)
        this.size--
      }
      let node = new ListNode(key, value)
      this.addToHead(node)
      this.size++

      this.map.set(key, node)
    } else {
      const node = this.map.get(key)
      node.value = value
      // not necessary to move
      if (this.head.next === node) return
      this.removeNode(node)
      this.addToHead(node)
    }
  }
  /**
  * @param {number} key
  * @return {number}
  */
  get(key) {
    if (this.map.has(key)) {
      const node = this.map.get(key)
      if (this.head.next === node) return node.value
      this.removeNode(node)
      this.addToHead(node)
      return node.value
    } else {
      return -1
    }
  }
  // head link to node
  addToHead(node) {
    const first = this.head.next
    this.head.next = node
    node.pre = this.head
    node.next = first
    first.pre = node
  }
  // node.pre link to node.next
  removeNode(node) {
    const preNode = node.pre
    const nextNode = node.next
    preNode.next = nextNode
    node.next = null
    nextNode.pre = preNode
    node.pre = null
  }
}
