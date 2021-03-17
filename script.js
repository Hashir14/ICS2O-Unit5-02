document.getElementById('button').addEventListener('click', message)
/* The command above goes into the HTML file and looks for the tag that has the id "button". Then, the event listener waits to perform a function to that id. In this case, the event listener will "listen", or wait, for a click before applying the function to that id. */

document.getElementById('button2').addEventListener('click', changeColor)
/* The document.getElementById grabs the button that has an id: button2 from the HTML file. The event listener waits to apply a function to the tag with this id. In this case, the event listener will apply the function once the content of this tag has been clicked. */

document.getElementById('button3').addEventListener('click', image)
/* The id in this case is "button3" which is a button tag in the HTML file. The function that will be applied later on will not happen until the event listener detects that the tag content has been clicked. */

document.getElementById('button4').addEventListener('click', multi)
/* Document.getElementById is the command that grabs a content tag from the HTML file by looking for a tag with the id that is inserted in the brackets right after. The id of the HTML element is "button4". Then, the event listener stops the function from applying to that tag until the action in the next bracket is completed. In this case, the event listener waits to apply the function until the content in that element tage has been clicked on the webpage. */

document.getElementById('button5').addEventListener('click', background)
/* Just like the other commands above, this document.getElementById command will go into the HTML file and look for a tag with an id:button5 which will change the background when clicked. Then the addEventListener will wait for the button to be clicked, and then apply a function that has been described later on in the code. The "click" is telling the event listener to wait for a click on the button before applying the function. The word next to the "click" is the word that the function command uses to identify which one of these "document.getElementById" commands to apply its function to. */

function message () {
  alert('Hello World!')
  alert('Goodbye World')
}
/* The word "function" tells what functions need to be applied to the word next to it. The word next to "function" is the same word that goes at the end of the corresposnding event listener, telling this function to apply everything in the curly brackets to be applied to the element tag specified in the corresponding event listener. */

function changeColor () {
  document.getElementById('text').style.color = 'purple'
}
/* In this case, the function will be applied to "changeColor" which is the name of the event listener for the HTML paragraph element which has the id of "text". */

function image () {
  document.getElementById('pic').style.display = 'block'
}
/* The "style" command tells the function command what to do to the element tag specified in the corresponding event listener. */

function multi () {
  document.getElementById('extra').style.fontSize = '150%'
  document.getElementById('extra').style.color = 'pink'
  document.getElementById('extra').style.fontFamily = 'arial, sansSerif'
}
/* Everything in the curly brackets will be applied to the "multi" event listener. The "document.getElementById('extra') is telling the "function" to take that tag with the "extra" id and apply these three things to it. */

function background () {
  document.body.style.backgroundColor = 'blue'
}
/* The functions in the curly brackets will be applied to the event listener "background" which is for the body element in the HTML file. "backgroundColor = 'blue'" will tell the event listener to carry out this function and apply it to the body. This means that when the button for this command, button5, is clicked, it will take the body element and change its background color to blue. */
