
const signUp = () => {
  let name = document.getElementById("usr-name").value;
  window.localStorage.setItem('userName', name)
  let storedName = localStorage.getItem('userName')
  // Get the element you want to add your new element before or after
  var target = document.querySelector('#usr-inserted-name');
  const content = target.innerHTML;

  if(storedName.length){
    target.innerHTML = `Welcome, ${storedName.toString()}`;
  }
  else {
    target.innerHTML = "Plese enter your name above.";
  }
}
