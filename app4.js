function appendRow(node) {
    const span = document.createElement("SPAN");
    const txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
  }
  
  function deleteRow(li) {
      for (i = 0; i < close.length; i++) {
          close[i].onclick = function() {
            const div = this.parentElement;
            div.style.display = "none";
          }
  }
  }
// Create a "close" button and append it to each list item
const myNodelist = document.getElementsByTagName("li");

    Array.from(myNodelist).forEach(mode);{
    appendRow(node);
}

// Click on a close button to hide the current list item
const close = document.getElementsByClassName("close");
deleteRow(li);

// Add a "checked" symbol when clicking on a list item
const list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'li') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
    const li = document.createElement("li");
    const inputValue = document.getElementById("myInput").value;
    const t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  appendRow(li);
  deleteRow(li);

  

}