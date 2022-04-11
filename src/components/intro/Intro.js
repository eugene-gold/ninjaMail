import './Intro.scss'

function Intro() {
    return (
        <article class="hero-container">
           
            <div class="hero-description">
                <h2>Create Stunning Email Campaigns</h2>
                <p>Create and launch email campaigns that captivate your customers in just a few clicks.</p>
                <div className='button-set'>
                    <button className='hero-button trynow'>
                        <a className='herobtn-link' href='#0'>
                            Try now
                        </a>    
                    </button>
                    <button className='hero-button getdemo'>
                        <a className='herobtn-link' href='#0'>
                            Get a Demo
                        </a>    
                    </button>
                </div>
            </div>
        </article>
    );
}

export default Intro;