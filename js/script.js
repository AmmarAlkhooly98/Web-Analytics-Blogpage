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
  //get the value from user input
  var name = document.getElementById("usr-name").value;
  //set value to local storage area
  window.localStorage.setItem('userName', name)
  fetchName()
}

//this will fetch from local storage after every page refresh
window.onload = () => fetchName()