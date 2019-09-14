/* Changes the display properties of the list description element when
 * button is pressed. This allows showing and hiding the more detailed
 * descriptions. The script assumes following html-structure:
 *  <div><button></div>
 *  <div class="simple-list-item-description">
 */
var buttons = document.getElementsByTagName('button');
for(i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
    var description = this.parentNode.nextElementSibling;
    if(description.style.display === "block") {
      this.innerHTML = "+";
      description.style.display = "none";
    } else {
      this.innerHTML = "-";
      description.style.display = "block";
    }
  });
}


/* Either sets all descriptions visible or hides them by setting the
 * display property to none. After looping through all the descriptions:
 * 1) if an open description can be found, then all descriptions are closed.
 * 2) if an open descriptions cannot be found, then all are opened.
 *
 * Script assumes following html-structure:
 * <div>
 *   <button id="c3">+</button>
 * </div>
 * <div id="desc3" class="simple-list-item-description">
 * var button = descriptions[i].previousElementSibling.children[1]
 */
document.getElementsByClassName('collapse')[0].addEventListener("click", function() {
  var is_descriptions_open = false;
  var descriptions = document.getElementsByClassName('simple-list-item-description');
  for(i = 0; i < descriptions.length; i++) {
    if(descriptions[i].style.display === "block" || is_descriptions_open == true) {
      is_descriptions_open = true;
      descriptions[i].style.display = "none";
      var button = descriptions[i].previousElementSibling.children[2];
      button.innerHTML = "+";
    }
  }
  if(is_descriptions_open === false) {
    for(i = 0; i < descriptions.length; i++) {
      descriptions[i].style.display = "block";
      var button = descriptions[i].previousElementSibling.children[2];
      button.innerHTML = "-";
    }
  }
});
