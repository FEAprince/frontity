import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa"

function ContactFooter() {
    const SocialShare = [
        {Social: <FaFacebookF /> , link: 'https://www.facebook.com/'},
        {Social: <FaLinkedinIn /> , link: 'https://www.linkedin.com/'},
        {Social: <FaInstagram /> , link: 'https://www.instagram.com/'},
    ]
    return(
        <div className="footer-style-2 ptb--30 bg_image bg_image--1" data-black-overlay="6">
            <div className="wrapper plr--50 plr_sm--20">
                <div className="row align-items-center justify-content-between">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                        <div className="inner text-center">
                            <ul className="social-share rn-lg-size d-flex justify-content-center liststyle">
                                {SocialShare.map((val , i) => (
                                    <li key={i}><a href={`${val.link}`}>{val.Social}</a></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ContactFooter