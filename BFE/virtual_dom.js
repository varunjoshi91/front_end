/**
 * @param {HTMLElement} 
 * @return {object} object literal presentation
 */
 function virtualize(element) {
    // your code here
    const result = {
      type: element.tagName.toLowerCase(),
      props: {}
    }
  
    // props without children
  
    for(let attr of element.attributes) {
      const name = attr.name === 'class' ? 'className' : attr.name;
      result.props[name] = attr.value;
    }
  
    const children = [];
    for(let elem of element.childNodes) {
      if (elem.nodeType === 3) { // textNode
        children.push(elem.textContent);
      } else {
        children.push(virtualize(elem));
      }
    }
  
    result.props.children = children.length === 1 ? children[0] : children;
  
    return result;
  }
  
  
  /**
   * @param {object} valid object literal presentation
   * @return {HTMLElement} 
   */
  function render(obj) {
    // your code here
    if (typeof obj === 'string') {
      return document.createTextNode(obj);
    }
  
    const {type, props: {children, ...attrs}} = obj;
    const elem = document.createElement(type);
  
    for(let [attr, value] of Object.entries(attrs)) {
      elem[attr] = value;
    }
  
    const childrenArr = Array.isArray(children) ? children : [children];
  
    for(let child of childrenArr) {
      elem.append(render(child));
    }
  
    return elem;
  }
  