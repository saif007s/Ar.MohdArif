import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import "./style.scss";

const ContactInfo = () => {
    return (
        <div className="contact-info-box">
            <h4>
                I would be happy to answer any questions you may have about
                architect.
            </h4>
            <div className="contact-option">
                <FaPhoneAlt />
                <a href="tel:7870139586">
                <span className="text">+91 7870139586</span>
                </a>
                
            </div>
            <div className="contact-option">
                <MdEmail />
                <a href="mailto:arifswn@gmail.com">
                <span className="text">arifswn@gmail.com</span>
                </a>
            </div>
        </div>
    );
};

export default ContactInfo;
