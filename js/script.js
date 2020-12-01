const fetchName = () => {
  /* If the page loads and there is no username in the 
    local storage it will exit this function */
  if (localStorage.getItem('userName') == null) {
    // this targets the logged-in welcome block and hides it
    let loggedInBlock = document.getElementById('logged-in');
    loggedInBlock.style.display = 'none'

    // now this return statement will exit the function
    return;
  }

  // targets the h1 tag to display the welcome
  let target = document.getElementById('usr-inserted-name');

  // this fetches the stored name in our local storage
  let storedName = localStorage.getItem('userName')

  // this is the sign-up form div
  let signUpForm = document.getElementById('sign-up-form');

  /* If user has made an input then it will display the welcome block.
    Otherwise, it will prompt the user to input the name */
  if(storedName.length){
    target.innerHTML = `Welcome, ${storedName.toString().toUpperCase()}`;
    signUpForm.style.display = 'none';
  }
  else {
    target.innerHTML = "Plese enter your name above.";
  }
}

const signUp = () => {
  // get the value from user input
  var name = document.getElementById("usr-name").value;

  // set value to local storage area
  window.localStorage.setItem('userName', name)

  // this will empty the entered value after it's saved to local storage
  document.getElementById("usr-name").value = ""

  // this targets the logged-in welcome block and displays it
  let loggedInBlock =  document.getElementById('logged-in');
  loggedInBlock.style.display = 'block'

  fetchName()
}

const logOut = () => {
  // this will reomve the username key and value pairs stored in the local storage 
  localStorage.removeItem("userName");

  // this targets the logged-in welcome block and hides it
  let loggedInBlock = document.getElementById('logged-in');
  loggedInBlock.style.display = 'none'

  // this will display the sign-up form
  let signUpForm = document.getElementById('sign-up-form');
  signUpForm.style.display = 'block';
}

// This will call the fetchName function after every page refresh
window.onload = () => fetchName()