import { useRef } from 'react'

const Contact = () => {
    const form = useRef()

    const sendEmail = () => {

    }
    return (
        <section>
            <div className="contact-container">
                <h2 >Contact </h2>
                <form ref={form} onSubmit={sendEmail} className='contact-form'>
                    <input type="text" placehodler='name' name='user_name' required />
                    <input type="email" placehodler='email' name='user_email' required />
                    <input type="text" placehodler='subject' name='subject' required />
                    <textarea name="message" cols="30" rows="10"></textarea>
                    <button type = 'submit' className="contact-button">Send Message</button>
                </form>
            </div>
        </section>
    )
}


export default Contact;