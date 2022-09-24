import s from './Header.module.css';
import ProTestLogo from 'components/ProTestLogo';
import UserAvatar from 'components/UserAvatar';
import NavMenu from 'components/NavMenu';
import LogoutButton from 'components/LogoutButton';
import Navbar from 'components/DesktopNavbar';

const Header = () => {
  const isLoggedIn = false; //TODO: add Redux Auth State support

  return (
    <header className={s.header}>
      <div className={s.logo}>
        <ProTestLogo />
      </div>

      <div className={s.wrapper}>
        <div className={s.desktopNavbar}>
          <Navbar />
        </div>
        {isLoggedIn && (
          <div className={s.avatar}>
            <UserAvatar />
          </div>
        )}
        <div className={s.nav}>
          <div className={s.mobileNavbar}>
            <NavMenu />
          </div>
          {isLoggedIn && (
            <div className={s.desktopLogout}>
              <LogoutButton />
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;