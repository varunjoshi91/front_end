class CachedNode {
  constructor(node, value) {
    this._node = node;
    this._value = value;
  }

  getNode() {
    return this._node;
  }

  getValue() {
    return this._value;
  }

  setValue(value) {
    this._value = value;
    return this;
  }
}

class SimpleStore {
  constructor() {
    this._container = [];
  }

  set(node, value) {
    let cachedNode;
    if (this.has(node)) {
      cachedNode = this.get(node);
      cachedNode.setValue(value);
    } else {
      cachedNode = new CachedNode(node, value);
      this._container.push(cachedNode);
    }

    return this;
  }

  // you might want to change this method so it returns the Node's value not the CachedNode.
  // If you did, that would mean adding another method to get the CachedNode. Easy enough.
  get(node) {
    return this._container.find((cachedNode) => {
      return cachedNode.getNode() === node;
    });
  }

  has(node) {
    return !!this.get(node);
  }
}
