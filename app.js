// grab DOM elements
const nameInput = document.getElementById('name-input');
const nameDisplay = document.getElementById('name-display');
console.log(nameDisplay);
// set event listeners
nameInput.addEventListener('input', () => {
    const name = nameInput.value;
    console.log('input value is', name);

});
    // get info from user input
    // use user input to update state
    // update DOM to reflect the new state
