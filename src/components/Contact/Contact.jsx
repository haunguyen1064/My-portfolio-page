import React, { useContext, useState, useRef } from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';


const Contact = () => {
  const { contact } = useContext(PortfolioContext);
  const { cta, btn, email } = contact;
  const [isClick, setClick] = useState(false);
  const [isCopy, setCopy] = useState("Copy")
  const ref = useRef();

  const copyEmail = () => {
    const content = ref.current.innerText
    navigator.clipboard.writeText(content)
    setCopy("Copied")
  }
  
  const placeHolder = (<div style={{height:'61px'}}></div> )
  const showEmail = (
    <Fade top>
    <div className='contact-wrapper__emailContainer fadeIn'>
    <p  ref={ref} className="contact-wrapper__myEmail rounded ">haunguyen1064@gmail.com</p>
    <button className="contact-wrapper__copyEmailBtn rounded " onClick={copyEmail}>{isCopy}</button>
    </div>
    </Fade>
  )

const clickhandler = () => {
  setClick(()=>{return !isClick})
  
}
  return (
    <section id="contact">
      <Container>
        <Title title="Contact" />
        <Fade bottom duration={1000} delay={800} distance="30px">
          <div className="contact-wrapper">
            <p className="contact-wrapper__text">
              {cta || 'Would you like to work with me? Awesome!'}
            </p>
            <a
              className="cta-btn btn cta-btn--resume"
              
              onMouseDown={clickhandler}
            >
              {btn || "Let's Talk"}
            </a>
            {isClick ? showEmail : placeHolder}
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Contact;
