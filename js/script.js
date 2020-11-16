
const signUp = () => {
  
  let name = document.getElementById("usr-name").value;
  window.localStorage.setItem('userName', name)
  let storedName = localStorage.getItem('userName')
  // Get the element you want to add your new element before or after
  var target = document.querySelector('#usr-inserted-name');
  const content = target.innerHTML;

  target.innerHTML = `Welcome, ${storedName.toString()}`;
  // Create the new element
  // This can be any valid HTML element: p, article, span, etc...
  var h1 = document.createElement('h1');

  // Add content to the new element
  h1.innerHTML = 'Your content, markup, etc.';
}
