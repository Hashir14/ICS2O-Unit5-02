document.getElementById('button').addEventListener('click', message)
document.getElementById('button2').addEventListener('click', changeColor)
document.getElementById('button3').addEventListener('click', image)
document.getElementById('button4').addEventListener('click', multi)
document.getElementById('button5').addEventListener('click', background)

function message () {
  alert('Hello World!')
  alert('Goodbye World')
}

function changeColor () {
  document.getElementById('text').style.color = 'purple'
}

function image () {
  document.getElementById('pic').style.display = 'block'
}

function multi () {
  document.getElementById('extra').style.fontSize = '150%'
  document.getElementById('extra').style.color = 'pink'
  document.getElementById('extra').style.fontFamily = 'arial, sansSerif'
}

function background () {
  document.body.style.backgroundColor = 'blue'
}
