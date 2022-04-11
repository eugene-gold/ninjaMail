import './Member.scss'
import member1 from '../../assets/images/member1.png'
import member2 from '../../assets/images/member2.png'
import member3 from '../../assets/images/member3.png'

function Member() {
    return (
        <main>
            <section className="content">
                <div className="member-wrapper">
                    <div className="member-card">
                        <img src={member1} alt="member 1" />
                        <div className='member-descr'>
                            <h3>Frankie</h3>
                            <p>Member since 2016</p>
                        </div>
                    </div>
                    <div className="member-card">
                        <img src={member2}  alt="member 2" />
                        <div className='member-descr'>
                            <h3>Camile</h3>
                            <p>Member since 2012</p>
                        </div>
                    </div>
                    <div className="member-card">
                        <img src={member3}  alt="member 2" />
                        <div className='member-descr'>
                            <h3>Elayne</h3>
                            <p>Member since 2018</p>
                        </div>    
                    </div>
                </div>  
                <h1>Learn how others are reaching their audience easier than ever before.</h1>
                <form className="subscribe-form">
                    <label className="form-label">
			            <span>Thanks! Email received</span>
                        <input className='input-email' type="email" placeholder="Enter your email" />
                    </label>    
                    <button className='button-join'>
                        Join our list
                    </button>                    
                </form>            
            </section>            
        </main>   
    );
}

export default Member;