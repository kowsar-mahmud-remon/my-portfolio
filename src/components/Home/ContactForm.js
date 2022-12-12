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
    e.target.reset();
  };

  return (
    <div class="mx-5 my-10" id='contact'>

      <div class=" justify-center">
        <div class="">
          <div class="section-title mt-5 mb-10">
            <h2 class="text-center font-bold mt-5 pb-5 text-4xl text-primary">Contact Me</h2>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2">
        <div class=" mb-3 pl-28">
          <div class="contact-tex flex p-2 mb-1">
            <i class="bi bi-envelope mx-3 text-primary font-bold text-2xl "></i>
            <p class="text-base font-bold">kowsar.remon@gmail.com</p>
          </div>
          <div class="contact-tex flex p-2 mb-1">
            <i class="bi bi-telephone-outbound mx-3 text-primary font-bold text-2xl "></i>
            <p class="text-base font-bold">+880 1521525803</p>
          </div>

          <div class="contact-tex flex p-2 mb-1">
            <i class="bi bi-geo-alt mx-3 text-primary font-bold text-2xl "></i>
            <p class="text-base font-bold">Cumilla, Bangladesh</p>
          </div>
        </div>

        <div class=" mb-3">
          <form ref={form} onSubmit={sendEmail}>
            <div class="">

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name="user_name" placeholder="Full Name" className="input input-bordered mb-2 w-1/2" required />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text" name="user_email" placeholder="Email" className="input input-bordered mb-2 w-1/2" required />
              </div>

              <div class="col-md-12 mb-3">
                <label>Message</label>
                <br />
                <textarea name="message" id="" placeholder="Message" class="form-control border w-1/2 textarea textarea-bordered rounded " cols="30" rows="3" required></textarea>
              </div>
            </div>
            <input className='btn btn-primary' type="submit" value="Send" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;