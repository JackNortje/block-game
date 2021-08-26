let container = document.getElementById('div-container');
let button = document.querySelector('button')

for (let i = 0; i < 256; i++) {
    const arbitraryDiv = document.createElement('div');
    arbitraryDiv.backgroundColor = 'pink'
    arbitraryDiv.classList.add('beautiful');
    arbitraryDiv.addEventListener("mouseover", function() {
        arbitraryDiv.style.backgroundColor = 'white'
    })
    button.addEventListener("click", function() {
        arbitraryDiv.style.backgroundColor = 'black';
        
      })
    container.append(arbitraryDiv)
    

}




