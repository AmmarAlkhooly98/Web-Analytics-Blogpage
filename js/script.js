const fetchName = () => {
  let target = document.getElementById('usr-inserted-name');
  let storedName = localStorage.getItem('userName')
  if(storedName.length){
    target.innerHTML = `Welcome, ${storedName.toString()}`;
  }
  else {
    target.innerHTML = "Plese enter your name above.";
  }
}

const signUp = () => {
  var name = document.getElementById("usr-name").value;
  window.localStorage.setItem('userName', name)
  // Get the element you want to add your new element before or after
  fetchName()
}

window.onload = () => fetchName()