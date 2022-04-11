import './Cards.scss'
import photo1 from '../../assets/images/photo1.png'
import photo2 from '../../assets/images/photo2.png'
function Cards() {
    return (
        <div class="wrapper-middle">
            <article className='article-card'>
                <div class="card-middle">
                    <img src={photo1} alt="one girl" class="picture"/>
                </div>
                <div class="description">
                    <p>Launch campaigns but also find new customers. Our unique platform handles campaigns from start to end.</p>
                    <a href="#0" class="description-link"><span className='link-text'>Learn More > </span></a>
                </div>
            </article>
            <article className='article-card'>
                <div class="card-middle">
                    <img src={photo2} alt="people" class="picture"/>
                </div>
                <div class="description">
                    <p>Start building and sharing with your team today. NinjaMail is renowned for its industry leading team collaboration tools.</p>
                    <a href="#0" class="description-link"><span className='link-text'>Learn More > </span></a>
                </div>
            </article>
            <aside>
                <h2>The source for proven, engaging email campaigns</h2>
                <p>Whether you're a startup, small business, e-commerce store, or want to promote your app, NinjaMail has the feature set tailored for your business.</p>
            </aside>
        </div>
    );
}

export default Cards;