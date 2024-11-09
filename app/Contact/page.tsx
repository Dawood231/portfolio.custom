import Header from '../components/Header'
import './contact.css'
import { MdEmail } from "react-icons/md";
import { BiSolidPhoneCall } from "react-icons/bi";
import { TiLocation } from "react-icons/ti";
import Footer from '../components/Footer';


export default function page() {
  return (
    <div className='contact-page'>
        <Header/>

        <div className='contact-cont'>
          <h1 className='con-h1-1 bounce-in-top'>I’d love to talk to you</h1>

            <div className='cont-sec'>

                <div className='con-text'>
                    <h1 className='con-h1 '>Lets Work  <span> Together </span></h1>
                    <p className='con-para'>Share your vision for your next project with us now. Please contact us for basic question. I’m here to help you.</p>

                    <div className='con-icons'>
                        <div className='con-call'>
                        <div className='con-social-icon'>
                        <BiSolidPhoneCall  />
                        </div>
                        <span className='bold'>Contact: </span>
                        
                        +92 334 3112920 
                        </div>

                        <div className='con-email'>
                        <div className='con-social-icon'>
                        <MdEmail />
                        </div>
                        <span className='bold'>Email: </span>siddiquidawood2020@gmail.com
                        </div>

                        <div className='con-location'>
                        <div className='con-social-icon'>
                        <TiLocation />
                        </div>
                        <span className='bold'>
                        Location: 
                        </span>
                        Gulshan iqbal karachi block 10 A central  government housing society
                        </div>
                    </div>
                </div>
                
                <div className='con-fields'>
                    <div className='con-row-1'><input type="text" placeholder='First Name' />
                    <input type="text" placeholder='Last Name'/></div>

                    <div className='con-row-2'>
                    <input type="email" placeholder='Email Address' required/>
                    </div>

                    <div className='con-row-3'>
                    <input type="text" placeholder='Services Interested in' />
                    <input type="text" placeholder='Subjects'/>
                    </div>

                    <div className='con-row-4'>
                        <textarea placeholder='Tel Us about Your Projects'></textarea>
                    </div>

                    <button className='con-btn'>Submit</button>

                </div>
            </div>
        </div>

        <Footer/>
    </div>
  )
}
