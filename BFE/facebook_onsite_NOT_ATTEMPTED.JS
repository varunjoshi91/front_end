// https://leetcode.com/discuss/interview-question/1055231/Facebook-Onsite-Interview-Question%3A-getTextBetweenNodes(node1-node2)

// Think of the problem as iterating (in-order) from node 1 to node 2 and retrieving all the text nodes you come across.
/* 
QUESTION

Given two references to two DOM nodes, return the text between them.

Assume you have access to:

Node's children as an array: node.children
Node's parent: node.parentNode
Get text content of a node (naive approach): node.textContent
EXAMPLE

Given this HTML:

<html>
  <head>
  </head>
  <body>
    <main>
      <section>
        Text that shouldn't be in the output
        <div>Text that shouldn't be in the output</div>
        <header>
          Text that shouldn't be in the output
          <h1>Text that shouldn't be in the output</h1>
          <h2>On this Page</h2>  <!-- node1 -->
          <button>
            Jump to section
          </button>
        </header>
        <ul>
          <li><span><span><span><span><span><span>Properties</span></span></span></span></span></span></li>
          <li><span><span><span><span><span><span>Methods</span></span></span></span></span></span></li>
          <li><span><span><span><span><span><span>Examples</span></span></span></span></span></span></li>
          <li><span><span><span><span><span><span>Specifications</span></span></span></span></span></span></li>
          <li><span><span><span><span><span><span>Browser compatibility</span></span></span></span></span></span></li>
          <li><span><span><span><span><span><span>Related topics</span></span></span></span></span></span></li>
        </ul>
      </section>
    </main>
    <div>
      <article>
        text that should be included
        <p> <!-- node2 -->
          <span>
            The <strong>DOM</strong>&nbsp;<strong><code>Node</code></strong>&nbsp;interface is an abstract base class upon which many other DOM API objects are based, thus letting those object types to be used
            similarly and often interchangeably.
          </span>
          As an abstract class, there is no such thing as a plain <code>Node</code> object. All objects that implement <code>Node</code> functionality are based on one of its subclasses. Most notable are
          <strong><code>Document</code></strong>, <strong><code>Element</code></strong>, and <strong><code>DocumentFragment</code></strong>.
        </p>
        <p>
          Text that shouldn't be in the output
          In addition, every kind of DOM node is represented by an interface based on <code>Node</code>. These include <strong><code>Attr</code></strong>,
        </p>
      </article>
    </div>
  </body>
</html>
The output should be:

getTextBetweenNodes(node1, node2);
["On this Page", "Jump to section", "Properties", "Methods", "Examples", "Specifications", "Browser compatibility", "Related topics", "text that should be included", "The ", "DOM", "Node", "Node", "Node", "Document", "Element", "DocumentFragment"]


As much as you can get there. I'd say some of the topics could be:

public api for the widget
any server requirements (if relevant)
internal state and async data flow management
performance
accessibility
components breakdown
layout
theming
extensibility
And then whatever interviewer might be interested in. As it's usually suggested: ask questions to make sure you understand the scope. In my case it was to build very generic component, so most of its parts should've been configurable.


*/