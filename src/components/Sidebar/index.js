import {Link, NavLink} from 'react-router-dom';
import './index.scss';
import LogoS from '../../assets/images/AB2.jpeg';
import LogoSubtitle from '../../assets/images/Bean1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faEnvelope,  faEye, faCog } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faSlack } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => {
    return (
    <div className='nav-bar'>
        <Link className='logo' to='/' >
            <img className='rounded-full' src = {LogoS} alt='logo'  />
            <img className='sub-logo' src= {LogoSubtitle} alt='Bean' />
        </Link>
        <nav>
            <NavLink exact='true' activeclassname='active' to='/'>
                <FontAwesomeIcon icon={faHome} color='#4d4d4e' />
            </NavLink>
            <NavLink exact='true' activeclassname='active' className='about-link' to='/about'>
                <FontAwesomeIcon icon={faUser} color='#4d4d4e' />
            </NavLink>
            <NavLink exact='true' activeclassname='active' className='skills-link' to='/skills'>
                <FontAwesomeIcon icon={faCog} color='#4d4d4e' />
            </NavLink>
            <NavLink exact='true' activeclassname='active' className='work-link' to='/work'>
                <FontAwesomeIcon icon={faEye} color='#4d4d4e' />
            </NavLink>
            <NavLink exact='true' activeclassname='active' className='contact-link' to='/contact'>
                <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target='_blank' rel='norefferer' href='https://www.linkedin.com/in/arbean1978'>
                    <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e' />
                </a>
            </li>
            <li>
                <a target='_blank' rel='norefferer' href='https://github.com/arbean1978'>
                    <FontAwesomeIcon icon={faGithub} color='#4d4d4e' />
                </a>
            </li>
            <li>
                <a target='_blank' rel='norefferer' href='https://slack.com/arbean1978'>
                    <FontAwesomeIcon icon={faSlack} color='#4d4d4e' />
                </a>
            </li>

        </ul>

    </div>
    )
}

export default Sidebar;