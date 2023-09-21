import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Emailjs = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_gxoxrhl', 'template_2niw7wp', form.current, 'VvbV6Urc1UDyz6uju')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text"/>
            <label>Email</label>
            <input type="email" />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" />
        </form>
    );
};