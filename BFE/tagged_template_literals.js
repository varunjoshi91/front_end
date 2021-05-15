// https://bigfrontend.dev/problem/lit-html-1-tagged-templates
function html(strings, ...values) {
    // your code here
    let i = 0;
    let segs = [];
    for(; i < values.length; i++) {
      segs.push(strings[i]);
      segs.push(values[i]);
    }
    segs.push(strings[i]);
    return segs.join('');
  }
  
  
  // render the result from html() into the container
  function render(result, container) {
    // your code here
    container.innerHTML = result;
  }

  /* 
  function render(result, container) {
  // your code here
  let child = document.createElement('div');
  child.innerHTML = result;
  child = child.firstChild;
  container.appendChild(child);
}
 */