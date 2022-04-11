import './Brands.scss'
import knight from '../../assets/images/lastknight.svg'
import eye from '../../assets/images/dragoneye.svg'
import questai from '../../assets/images/Quest.svg'
import radio from '../../assets/images/radiotee.svg'
import game from '../../assets/images/gamecommerce.svg'


function Brands() {
    return (
            <section className="brand-wrapper">            
                <h2>All the best brands already use us.</h2>
                <ul className='brand-list'>
                    <li className="brand-item">
                        <a className='brand-link' href='#0'>
                            <img src={knight} alt="last knight" />
                        </a>
                    </li>
                    <li className="brand-item">
                        <a className='brand-link' href='#0'>
                            <img src={eye} alt="dragon eye" />
                        </a>
                    </li>
                    <li className="brand-item">
                        <a className='brand-link' href='#0'>
                            <img src={questai} alt="quest ai" />
                        </a>
                    </li>
                    <li className="brand-item">
                        <a className='brand-link' href='#0'>
                            <img src={radio} alt="radio tee" />
                        </a>
                    </li>
                    <li className="brand-item">
                        <a className='brand-link' href='#0'>
                            <img src={game} alt="logo" />
                        </a>
                    </li>                   
                                   
                </ul>
            </section>       
    );
}

export default Brands;