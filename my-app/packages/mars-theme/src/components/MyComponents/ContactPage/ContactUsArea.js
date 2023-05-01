import ApiCall from "../../../ApiCall";
import React ,{useState} from "react";
import img from "../../../assets/images/about-6.jpg";
import axios from "axios";
function ContactUsArea() {
  const apiData = ApiCall("contact-us");
  const headerData = apiData?.jsonData[0]?.acf;

  const [rnName, setRnName] = useState()
  const [rnEmail, setRnEmail] = useState()
  const [rnAffair, setRnAffair] = useState()
  const [rnMessage, setRnMessage] = useState()
  const [succesFlag,setSuccesFlag] = useState('');

  const formHandler = () =>{
    const data ={
      rnName,
      rnEmail,
      rnAffair,
      rnMessage
    };

    axios({
      method:'post',
      url:'https://studiosally.com/api/contact/index.php',
      headers: { 'content-type': 'application/json' },
      data
    }).then(result =>{
      setSuccesFlag('Thank you for contacting us.');
    }).catch(setSuccesFlag('Something Went wrong'));
    
  };
  return (
    <div className="contact-form--1">
      <div className="container">
        <div className="row row--35 align-items-start">
          <div className="col-lg-6 order-2 order-lg-1">
            <div className="section-title text-left mb--50">
              <h2 className="title">{headerData?.contact_form_title}</h2>
              <p className="description">
                {headerData?.contact_form_description}
              </p>
            </div>
            <div className="form-wrapper">
              {/* <form action="#"> */}
                <label htmlFor="item01">
                  <input
                    type="text"
                    name="name"
                    id="item01"
                    value={rnName}
                    onChange={(e) => setRnName(e.target.value) }
                    placeholder="Nombre*"
                  />
                </label>

                <label htmlFor="item02">
                  <input
                    type="text"
                    name="email"
                    id="item02"
                    value={rnEmail}
                    onChange={(e) => setRnEmail(e.target.value)}
                    placeholder="Email*"
                  />
                </label>

                <label htmlFor="item03">
                  <input
                    type="text"
                    name="subject"
                    id="item03"
                    value={rnAffair}
                    onChange={(e) => setRnAffair(e.target.value)}
                    placeholder="Asunto"
                  />
                </label>
                <label htmlFor="item04">
                  <textarea
                    type="text"
                    id="item04"
                    name="message"
                    value={rnMessage}
                    onChange={(e) => setRnMessage(e.target.value)}
                    placeholder="Mensaje"
                  />
                </label>
                <button
                  //   onClick={(e) => this.handleFormSubmit(e)}
                  className="rn-button-style--2 btn-solid"
                  type="submit"
                  value="submit"
                  name="submit"
                  onClick={()=>formHandler()}
                  id="mc-embedded-subscribe"
                >
                  Enviar
                </button>
                <div>
                  {succesFlag && <div> {succesFlag} </div>}
                </div>
              {/* </form> */}
            </div>
          </div>
          <div className="col-lg-6 order-1 order-lg-2">
            <div className="thumbnail mb_md--30 mb_sm--30">
              <img src={headerData?.contact_form_image?.url} alt="trydo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ContactUsArea;
