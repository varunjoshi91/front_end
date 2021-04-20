// https://bigfrontend.dev/problem/virtual-dom-II-createElement

/**
 * MyElement is the type your implementation supports
 *
 * type MyNode = MyElement | string
 */

/**
 * @param { string } type - valid HTML tag name
 * @param { object } [props] - properties.
 * @param { ...MyNode} [children] - elements as rest arguments
 * @return { MyElement }
 */
 function createElement(type, props, ...children) {
    // your code here
    return {
      type,
      props: {
        ...props,
        children
      }
    }
  }
  
  
  /**
   * @param { MyElement }
   * @returns { HTMLElement } 
   */
  function render(myElement) {
    // your code here
    if (typeof myElement === 'string') {
      return document.createTextNode(myElement);
    }
  
    const {type, props: {children, ...attrs}} = myElement;
    const element = document.createElement(type);
  
    for(const [attr, value] of Object.entries(attrs)) {
      element[attr] = value;
    }
  
    const childrenArr = Array.isArray(children) ? children : [children];
  
    for(let child of childrenArr) {
      element.append(render(child));
    }
  
    return element;
  }
  