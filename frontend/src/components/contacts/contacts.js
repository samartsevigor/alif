import React from 'react';
import './contacts.css'

const Contacts = () => {
    return (
        <div>
            <div className="map">
                <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2985.7505540730003!2d-87.68462939639836!3d41.99756219270366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd1c2dc8db613%3A0xb25ce5bf80bd2f3e!2zMjI0NSBXIERldm9uIEF2ZSwgQ2hpY2FnbywgSUwgNjA2NTnYjCDYp9mE2YjZhNin2YrYp9iqINin2YTZhdiq2K3Yr9ip!5e0!3m2!1sar!2sae!4v1602702197533!5m2!1sar!2sae"
    width="100%" height="450" frameBorder="0" allowFullScreen="" aria-hidden="false"
    tabIndex="0"/>
                <div className="findus">
                    <h2 className="findus__title"><span>Our</span> location</h2>
                    <div className="findus__contacts">
                        <strong>Bundoo Khan</strong><br />
                        2539 W Devon Ave, Chicago, IL 60659
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contacts;