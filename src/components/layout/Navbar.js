import { useCallback, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Logo from '../../assets/img/logo192.png';
import LogoW from '../../assets/img/logo192w.png';

/* css */
import styles from './Navbar.module.scss';

function Navbar() {
  const [navBar, setNavBar] = useState(true);
  const [navLogo, setNavLogo] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();

  console.log(location);

  const controlNavbar = useCallback(() => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY) {
        setNavBar(false);
      } else {
        setNavBar(true);
      }

      if (window.scrollY > 300 || location.pathname.length > 1) {
        setNavLogo(true);
      } else {
        setNavLogo(false);
      }
      setLastScrollY(window.scrollY);
    }
  }, [lastScrollY, location.pathname.length]);

  useEffect(() => {
    if (location.pathname.length > 1) {
      setNavLogo(true);
    }
  }, [location.pathname.length]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [controlNavbar]);

  return (
    <nav className={`${styles.navbar} ${!navBar ? styles.navbar_padding : ''}`}>
      <img
        className={navLogo ? styles.navlogo : ''}
        src={Logo}
        onClick={() => {
          if (location.pathname.length > 1) {
            navigate('/');
          } else {
            window.scrollTo({
              top: 0,
              behavior: 'smooth',
            });
          }
        }}
        onMouseOver={e => (e.currentTarget.src = LogoW)}
        onMouseOut={e => (e.currentTarget.src = Logo)}
        alt="Logo Rocha Muniz"
      />
      <ul>
        <div
          className={`${navLogo ? styles.li_wraper_centralized : ''} ${
            styles.li_wraper
          }`}
        >
          <li>
            <Link to="/about">sobre</Link>
          </li>
          <li>
            <Link to="/about">marcas</Link>
          </li>
          <li>
            <Link to="/contact">contato</Link>
          </li>
        </div>
      </ul>
    </nav>
  );
}

export default Navbar;
