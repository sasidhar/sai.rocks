// Selections
/*
    1. document.getElementsByTagName - array of elements
    2. document.getElementsByClassName - array of elements
    3. document.getElementById - one element
*/

// About attribute of an element (CURD)
/*
    * Assume "element" contains reference to the element

    CREATE/UPDATE
    1. element.setAttribute('attribute-name', 'value') - for writing

    READ
    2. element.getAttribute('attribute-name') - for reading
    3. element.hasAttributes() 
        - Check if element has any attributes or not
        - If it has any attributes - returns true
        - If it doesn't have any attributes - returns false
    4. element.hasAttribute('attribute-name')
        - Check if element has that particular attribute available or not
        - If it has that attribute - returns true
        - If it doesn't have that attribute - returns false
    5. element.attributes - For reading all attributes (Read Only)
        - Get reference to the element
        - const attrs = element.attributes (this is an array)
        - To iterate on all attributes
            for(let i = 0; i < attrs.length; i++) {
                const attr = attrs[i];
                console.log(`Attribute Name: ${attr.name}`);
                console.log(`Attribute Value: ${attr.value}`);
            }
    
    DELETE
    6. element.removeAttribute('attribute-name') - for deleting
*/

// CURD

/* Read: Start */

// Total HTML
console.log(document)

// Head
console.log(document.head)

// Body
console.log(document.body)

// Read all meta tags in the head
const metaEls = document.getElementsByTagName('meta'); // Array
console.log(metaEls)

// Get first element
const metaElFirst = metaEls[0];

// Get charset attribute
console.log(metaElFirst.getAttribute('charset'));

// Try to get some attribute which doesn't exist - null
console.log(metaElFirst.getAttribute('sasidhar'));

// Set a new attribute
metaElFirst.setAttribute('sasidhar', "Sai and Lasya")
console.log(metaElFirst.getAttribute('sasidhar'));

// Remove attribute
metaElFirst.removeAttribute('sasidhar');
console.log(metaElFirst.getAttribute('sasidhar'));

// How to get data-sasi and data-mahi values on class container
const containerEls = document.getElementsByClassName('container');
const containerElFirst = containerEls[0];
console.log(containerElFirst.getAttribute('data-sasi'));
console.log(containerElFirst.getAttribute('data-mahi'));

/* Read: End */