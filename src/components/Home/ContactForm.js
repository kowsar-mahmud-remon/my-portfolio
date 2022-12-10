import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


const ContactForm = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_dvgrfav',
      'template_al801yf',
      form.current, 'MUM7mY_LjxUeHpwrc')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (

    // <form ref={form} onSubmit={sendEmail}>
    //   <label>Name</label>
    //   <input type="text" name="user_name" />
    //   <label>Email</label>
    //   <input type="email" name="user_email" />
    //   <label>Message</label>
    //   <textarea name="message" />
    //   <input type="submit" value="Send" /> 
    // </form>



    <div class="mx-5 my-10" id='contact'>

      <div class=" justify-center">
        <div class="">
          <div class="section-title my-5">
            <h2 class="text-center font-bold mt-5 pb-5 text-4xl text-primary">Contact Me</h2>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2">
        <div class=" mb-3 pl-28">
          <div class="contact-tex flex p-2 mb-1">
            <i class="bi bi-telephone-outbound mx-3 text-primary font-bold text-2xl "></i>
            <p class="text-base font-bold">+880 15548454564</p>
          </div>
          <div class="contact-tex flex p-2 mb-1">
            <i class="bi bi-envelope mx-3 text-primary font-bold text-2xl "></i>
            <p class="text-base font-bold">info@website.com</p>
          </div>
          <div class="contact-tex flex p-2 mb-1">
            <i class="bi bi-geo-alt mx-3 text-primary font-bold text-2xl "></i>
            <p class="text-base font-bold">3434 Pearlman Avenue
              Acton, MA 01720</p>
          </div>
          <div class="contact-tex flex p-2 mb-1">
            <i class="bi bi-globe mx-3 text-primary font-bold text-2xl "></i>
            <p class="text-base font-bold">www.yourwebsite.com</p>
          </div>
        </div>

        <div class=" mb-3">
          <form ref={form} onSubmit={sendEmail}>
            <div class="row">
              <div class=" mb-3">
                <input className=' border w-1/2 border-gray-400 p-1 rounded' type="text" name="user_name" placeholder="Full Name" class="form-control" />
              </div>
              <div class=" mb-3">
                <input className=' border w-1/2 border-gray-400 p-1 rounded' type="email" name="user_email" placeholder="Email" class="form-control" />
              </div>
              <div class="col-md-12 mb-3">
                <textarea name="message" id="" placeholder="Message" class="form-control border w-1/2 border-gray-400 p-1 rounded " cols="30" rows="3"></textarea>
              </div>
            </div>
            <input className='btn btn-primary' type="submit" value="Send" />
            {/* <a href="#" class="btn btn-outline-success "><i class="bi bi-chevron-double-up"></i> Send</a> */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;