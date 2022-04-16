import './Video.scss'
import videopreview from '../../assets/images/video-preview.png'

function Video() {
    return (
        <section class="video-container">
                <img className='video-preview' 
                    src={videopreview}
                    alt='video-preview'
                />
                <div className='preveiwWrapper'>
                    <h2>Reach More Customers</h2>
                    <a className='learnbtn-link' href='#0'>
                        Learn How
                    </a>    
                </div>
        </section>
    );
}
// правильно ли передал картинку
//как задать фон всей странице если он в отдельном файле, и для всех секций
export default Video;