const header = document.querySelector('.header');
const scrollThreshold = 50; 


window.addEventListener('scroll', () => {
    if (window.scrollY > scrollThreshold) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });


  function sendEmail(e) {
    e.preventDefault(); 

    emailjs.sendForm('service_lttp8jr','template_s5bthgg ', e.target, '4q3EDvSbUERLdROh0')
      .then((result) => {
          alert('Message sent successfully!'); 
          e.target.reset(); 
      }, (error) => {
          alert('Error sending message. Please try again.');
          console.log(error.text);
      });
}