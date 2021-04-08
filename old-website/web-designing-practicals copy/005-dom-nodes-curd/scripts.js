/*
    * Make sure to get a reference for the required element

    CREATE
    * document.createElement('tag-name')

    UPDATE
    * element.textContent = "new-content"
        - Adds new text content
    * element.append(...nodes/...strings)
        - It can append multiple items
        - It can append text strings as well
    * element.appendChild(node)
        - It can append only one node at a time
        - It cannot append text strings.

    READ
    * element.childElementCount (read only)
        - Returns number of child elements.
        - It only counts childs. Not grand children.
    * element.children (read only)
        - Returns an array of all child elements.
        - We can iterate on them and process them as needed.
    * element.firstElementChild
        - Returns first element child or null
    * element.lastElementChild
        - Returns last element child or null

    DELETE
    * element.remove()
        - Removes that element

*/

// CURD

// Get reference to container element
const container = document.getElementById('container');

// Read
const numberOfChildren = container.childElementCount;
console.log(numberOfChildren);

const children = container.children
console.log(children)
for (let i = 0; i < children.length; i++) {
    console.log(children[i])
}

console.log("First and Last Children")
const firstChild = container.firstElementChild;
console.log(firstChild)

const lastChild = container.lastElementChild;
console.log(lastChild)

console.log("Removing elements")
firstChild.remove()
lastChild.remove()

const remainingChildren = container.children
console.log(remainingChildren)
for(let i = remainingChildren.length - 1; i >= 0; i--) {
    remainingChildren[i].remove()
}

const newDivEl = document.createElement('div');
newDivEl.style.border = "1px solid red";
newDivEl.textContent = "This is new text added from JavaScript";

const anotherDivEl = document.createElement('div');
anotherDivEl.style.border = "1px solid blue";
anotherDivEl.textContent = "This is another new text added from JavaScript";

// container.append(newDivEl, anotherDivEl)

container.appendChild(newDivEl)
container.appendChild(anotherDivEl)

