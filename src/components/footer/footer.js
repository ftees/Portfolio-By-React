import React from 'react'
import './footer.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCity, faPhone, faAddressCard,fab  } from '@fortawesome/free-solid-svg-icons'
import {faFacebookF, faInstagram , faGoogle, faTwitter} from '@fortawesome/free-brands-svg-icons'
const footer = () => {
    return (
        <div className="footer bg-sub">
            <div className="infomation">
                <h3>Nguyễn Phạm Tiến</h3>
                <h4><FontAwesomeIcon icon={faCity} className="icon"/><a>Hà Nội</a></h4>
                <h4><FontAwesomeIcon icon={faPhone} className="icon"/><a>0384194762</a></h4>
                <h4><FontAwesomeIcon icon={faAddressCard} className="icon"/><a>tiennp8@gmail.com</a></h4>
            </div>
            <div className="social">
               <h3>Follow me</h3>
                <a href="https://www.facebook.com/phamtien810/" target="_blank"><FontAwesomeIcon icon={faFacebookF} size="lg"></FontAwesomeIcon></a>
                <a href="#"><FontAwesomeIcon icon={faInstagram} size="lg"></FontAwesomeIcon></a>
                <a href="#"><FontAwesomeIcon icon={faGoogle} size="lg"></FontAwesomeIcon></a>
                <a href="#"><FontAwesomeIcon icon={faTwitter} size="lg"></FontAwesomeIcon></a>
            </div>
        </div>
    )
}

export default footer
