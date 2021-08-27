let container = document.getElementById('div-container');
let button = document.getElementById('restartbtn')
const buttonColor = document.getElementById('colorbtn')


for (let i = 0; i < 256; i++) {
    const arbitraryDiv = document.createElement('div');
    arbitraryDiv.backgroundColor = 'pink'
    arbitraryDiv.classList.add('beautiful');
    arbitraryDiv.addEventListener("mouseover", function() {
        arbitraryDiv.style.backgroundColor = 'white'
    })
    button.addEventListener("click", function() {
        arbitraryDiv.style.backgroundColor = 'black';
        arbitraryDiv.addEventListener("mouseover", function() {
            arbitraryDiv.style.backgroundColor = 'white'
        })
      })
      buttonColor.addEventListener("click", function() {
        arbitraryDiv.style.backgroundColor = 'black';
        arbitraryDiv.addEventListener("mouseover", function() {
            arbitraryDiv.style.backgroundColor = getRandomColor()
        })
      })
    container.append(arbitraryDiv)
    

};

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }





