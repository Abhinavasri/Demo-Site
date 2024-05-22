document.getElementById('contactForm').onsubmit = function(event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    
    if(name && email && message) {
      // Here you can implement the code to send the form data to your server
      alert('Thank you for contacting us, ' + name + '. We will get back to you shortly.');
    } else {
      alert('Please fill out all the fields.');
    }
  };

  