/**
 * MyElement is the type your implementation supports
 *
 * type MyNode = MyElement | string
 * type FunctionComponent = (props: object) => MyElement
 */

/**
 * @param { string | FunctionComponent } type - valid HTML tag name or Function Component
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
  
    const { type, props} = myElement;
  
    if (typeof type === 'function') {
      return render(myElement.type(props));
    }
  
    const { children, ...attrs } = props;
  
    const element = document.createElement(type);
  
    for(const [attr, value] of Object.entries(attrs)) {
      element[attr] = value;
    }
  
    const childrenArr = Array.isArray(children) ? children : [children];
  
    for(const child of childrenArr) {
      element.append(render(child));
    }
  
    return element;
  }
  