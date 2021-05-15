/* 
https://www.glassdoor.com/Interview/Round-1-Given-a-string-and-a-style-array-render-HTML-pretty-much-like-a-rich-text-editor-For-example-Hello-world-QTN_2230757.htm
*/

/* 
Round 1: Given a string and a style array render HTML pretty much like a rich text editor.
For example: 'Hello, world', [[0, 2, 'i'], [4, 9, 'b'], [7, 10, 'u']]
Output: '<i>Hel</i>l<b>o, w<u>orl</u></b><u>d</u>
something like that.

*/

/* 
1. Convert input string into an array of characters, this makes it easier to prepend and append tags at a certain index
2. Iterate over array of formatting tags and prepend start tags before the character at specified index in the above array. Similarly append end tags after the character at set index
3. Convert HTML string to DOM node using new DOMParser().parseFromString
4. Browser should automatically fix mis-nested active formatting tags when creating DOM node
https://html.spec.whatwg.org/multipage/parsing.html#an-introduction-to-error-handling-and-strange-cases-in-the-parser
5. Return the innerHTML string from newly created DOM node. This string should not have mis-nested active formatting tags
*/

/* 
You can answer it as an algorithm question. Or you can answer it like a true FEE by leveraging the platform.

1. Flatten the tags into a single array of open and close tag pairs.
2. Sort the flattened tags by injection index.
3. Insert tags in reverse order to preserve shifting index.
4. Join the string and pass it to innerHTML and let the browser handle the rest
*/

function toHTML(string, markups) {
  const fragments = markups.reduce(
    (chars, [start, end, tag]) => {
      chars[start] = `` + chars[start];
      chars[end] += ``;
      return chars;
    },
    [...string]
  );
  // Modern browser handle misnested active formatting tags in a special way.
  // In particular they will create new formatting elements to accommodate
  // formatting tags that extend past their parent
  // https://html.spec.whatwg.org/multipage/parsing.html#an-introduction-to-error-handling-and-strange-cases-in-the-parser
  return new DOMParser().parseFromString(fragments.join(""), "text/html").body
    .innerHTML;
}

toHTML("Hello, World", [
  [0, 2, "i"],
  [0, 2, "u"],
  [3, 5, "s"],
  [4, 9, "b"],
  [7, 10, "u"],
]);
/* Output: '<i>Hel</i>l<b>o, w<u>orl</u></b><u>d</u> */

// 'Hello, world', [[0, 2, 'i'], [4, 9, 'b'], [7, 10, 'u']]

// [<i>H,e,l,</i>,'l', <b>, , ,<u>, , </u></b>, <u> ]
// stack [b, u]

function renderHTML(str, styles) {
  const flattenedStyles = [];
  styles.forEach((i) => {
    const [startIdx, endIdx, style] = i;
    let existingStartStyle = flattenedStyles[startIdx];
    if (!existingStartStyle) {
      flattenedStyles[startIdx] = `<${style}>`;
    } else {
      flattenedStyles[startIdx] += `<${style}>`;
    }

    let existingEndStyle = flattenedStyles[endIdx];
    if (!existingEndStyle) {
      flattenedStyles[endIdx] = `</${style}>`;
    } else {
      flattenedStyles[endIdx] += `</${style}>`;
    }
  });
  console.log(flattenedStyles);
  let final = str.split("");

  for (let i = flattenedStyles.length - 1; i >= 0; i--) {
    const style = flattenedStyles[i];
    if (style) {
      if (style.match("/")) {
        final.splice(i + 1, 0, style);
      } else {
        final.splice(i, 0, style);
      }
    }
  }
  const htmlString = final.join("");
  document.getElementById("nodeA").innerHTML = new DOMParser().parseFromString(
    htmlString,
    "text/html"
  ).body.innerHTML;

  /* let styleStack = [];
    let i = 0;

    while(i < str.length) {
        const style = flattenedStyles[i];

        if (style) {
            if (style.match('/')) { // closing tag
                final.push(str[i]);

                const tempStack = [];
                while(styleStack.length) {
                    const poppedStyle = styleStack.pop();
                    if (poppedStyle === style.replace(/\//g, '')) {
                        final.push(style);
                        break;
                    } else {
                        tempStack.push(poppedStyle);
                        const newClosing = poppedStyle.split('');
                        newClosing.splice(1, 0, '/');
                        final.push(newClosing.join(''));
                    }
                }
                if (tempStack.length) {
                    styleStack.push(...tempStack);
                }
            } else {
                styleStack.push(style);
                final.push(style);
                final.push(str[i]);
            }
        } else {
            final.push(str[i]);
        }
        i++;
    } */

  return final.join("");
}


function simpleRenderHTML(str, styles, node) {
    const strArr = str.split('');
    styles.forEach(style => {
        const [start, end, tagName] = style;

        strArr.splice(start, 0, `<${tagName}>`);
        strArr.splice(end + 1, 0, `</${tagName}>`);

    });
    const parser = new DOMParser();
    node.innerHTML = parser.parseFromString(strArr.join(''), 'text/html').body;
}

console.log(
  renderHTML("Hello, world", [
    [0, 2, "i"],
    [4, 9, "b"],
    [7, 10, "u"],
  ])
);
