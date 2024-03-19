/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')


const sendEmail = (e) =>{
    e.preventDefault()

    //serviceID - templateID - #form - publicKey
    emailjs.sendForm('service_s9zh27b','template_a42mksr','#contact-form','bekruE5G1EZCO06kX').then(()=>{
        //show sent message
        contactMessage.textContent = "Message sent successfully"

        // remove message fater five seconds
        setTimeout(() => {
           contactMessage.textContent = ''
        }, 5000);

        //clear input fields
        contactForm.reset()
    }, ()=> {
        //show error message
        contactMessage.textContent = 'Message not sent (service error)'
    })
}

contactForm.addEventListener('submit', sendEmail)