// Write your code here!

document.getElementById('main').remove();

let newHeader = document.createElement('h1');
// newHeader.setAttribute('id','victory')
newHeader.id = 'victory'
newHeader.innerHTML = 'MARCOS is the champion'

document.body.appendChild(newHeader)