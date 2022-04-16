import './Intro.scss'
import previewgirl from '../../assets/images/photo-hero.png'

function Intro() {
    return (
        <article class="hero-container">
            <div className="hero-preview">
                <img 
                    src={previewgirl}
                    alt="girl on preveiw"
                />
            </div>           
            <div class="hero-description">
                <h2>Create Stunning Email Campaigns</h2>
                <p>Create and launch email campaigns that captivate your customers in just a few clicks.</p>
                <div className='button-set'>
                        <a className='herobtn-link' href='#0'>
                            Try now
                        </a>    
                        <a className='herobtn-link getdemo' href='#0'>
                            Get a Demo
                        </a>    
                </div>
            </div>
        </article>
    );
}

export default Intro;