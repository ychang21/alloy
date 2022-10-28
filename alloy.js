//setting up a listener for the click event on the submit button. 
//Prevent default should prevent the form from reloading before the form's details are captured.
const btn = document.getElementById("submit");
btn.addEventListener('click', event => {
  event.preventDefault();

//capture the last name from the input box by assigning it to value lastname
var lastname = document.getElementById("name_last").value;

//if else logic for last name with different messages depending on the input from user
if lastname == 'Review'{
    result.append('Thanks for submitting your application, we’ll be in touch shortly.');
  }
  else if lastname == 'Deny' {
    result.append('Sorry, your application was not successful.');
  }
  //Post logic from the API documentation
  //changed url to one provided and not same as documentation
  else {
  const options = {
  method: 'POST',
  headers: {
    accept: 'application/json',
    authorization: 'Basic ' + config,
  }
}
fetch('https://sandbox.alloy.co/v1/evaluations/', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));
}
result.append('Success!');
  });
