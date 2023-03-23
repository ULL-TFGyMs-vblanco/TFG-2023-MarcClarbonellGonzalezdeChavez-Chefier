import { useSession } from 'next-auth/react';
import Link from 'next/link';
import styles from 'src/styles/layout/ToggleMenu.module.css';
import { Avatar } from '../ui/Avatar';

export const ToggleMenu: React.FC<{
  toggleAnimation: boolean;
  toggleHandler: () => void;
}> = ({ toggleAnimation, toggleHandler }) => {
  const { data: session } = useSession();
  return (
    <div
      className={`${styles.toggle__menu} ${
        toggleAnimation ? styles.in__animation : styles.out__animation
      }`}
      data-testid='toggle-menu'
    >
      {/* REFACTORIZAR CON SWR */}
      {session ? (
        <div className={styles.user__info__container}>
          <Avatar
            source={session.user.image}
            link='/profile'
            size={55}
            username='Default'
            style={styles.avatar}
            testid='toggle_avatar'
          />
          <Link href='/profile' data-testid='toggle-avatar'>
            <p className={styles.nickname} data-testid='user-name'>
              {session?.user?.name?.split(' ')[0].toLocaleLowerCase()}
            </p>
          </Link>
          <Link href='/profile' data-testid='toggle-avatar'>
            <p className={styles.username} data-testid='user-atname'>
              @{session?.user?.email?.split('@')[0]}
            </p>
          </Link>
        </div>
      ) : (
        <ul className={styles.links}>
          <li>
            <Link
              className={styles.link}
              href='/auth/login'
              data-testid='toggle-navigation-link'
              onClick={toggleHandler}
            >
              Log in
            </Link>
          </li>
        </ul>
      )}
      <hr className={styles.divider} />
      <ul className={styles.links}>
        <li>
          <Link
            className={styles.link}
            href='/recipes'
            data-testid='toggle-navigation-link'
            onClick={toggleHandler}
          >
            Recipes
          </Link>
        </li>
        <li>
          <Link
            className={styles.link}
            href='/new-recipe'
            data-testid='toggle-navigation-link'
            onClick={toggleHandler}
          >
            New Recipe
          </Link>
        </li>
      </ul>
      <hr className={styles.divider} />
      <ul className={styles.links}>
        <li>
          <Link
            className={styles.link}
            href='/about'
            data-testid='toggle-info-link'
            onClick={toggleHandler}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            className={styles.link}
            href='/contact'
            data-testid='toggle-info-link'
            onClick={toggleHandler}
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};
