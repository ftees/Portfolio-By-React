import React from 'react'
import emailjs from 'emailjs-com'
import './contact.css'

const contact = () => {
    function sendEmail(e){
        e.preventDefault();
        emailjs.sendForm("service_cukae7e",'template_reieew5',e.target,'user_cc8zQJRfGbVOTngsQg4SG')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    }
    
    return (
        <div className="contact-contain">
          
            <h2>Contact Me</h2>
            
            
            <div className="contact-form">
            <form className="contact-form" onSubmit={sendEmail}>
            <label>Name</label><br/>
            <input className="txt" type="text" name="from_name" />
            <br/>
            <label>Email</label>
            <input className="txt" type="email" name="from_email" />
            <br/>
            <label>Message</label><br/>
            <textarea className="txtMess" name="message" />
            <br/>
            <input className="btnSubmit" type="submit" value="Send" data-toggle="modal" data-target="#exampleModalCenter" />
            </form>
                </div>               
                <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h3 class="modal-title" id="exampleModalLongTitle">Contact me</h3>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        Send Email Successfully !
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                
                    </div>
                    </div>
                </div>
                </div>
                                    
        </div>
    )
}

export default contact
