import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getUsers } from '../../redux/apiActions';
import { useTranslation } from 'react-i18next';
import s from './Friends.module.css';

export default function Friends() {
  const friends = useSelector((state) => state.users);
  const isFetching = useSelector((state) => state.isFetching);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  useEffect(() => {
    dispatch(getUsers());
    window.onmessage = (e) => {
      console.log(e);
    };
  }, [dispatch]);

  useEffect(() => {
    window.onmessage = (e) => {
      console.log(e);
      if (e.origin === 'http://localhost:3000')
        localStorage.setItem('logout', 'hi');
    };
  }, []);

  const iframe = document.getElementById('example-iframe');

  const clickFn = (e) => {
    console.log(e);
    iframe.contentWindow.postMessage(
      JSON.stringify({ data: 'say my name', method: 'logout' }),
      '*'
    );
  };

  return (
    <div>
      <ul className={s.friendsList}>
        {!isFetching &&
          friends?.map((el) => (
            <li key={el.id} className={s.friendsCard}>
              <h3>{el.name}</h3>
              <p>
                {t('friends.phone')}: <a href={`tel:${el.phone}`}>{el.phone}</a>
              </p>
              <p>
                {t('friends.email')}:{' '}
                <a href={`mailto:${el.email}`}>{el.email}</a>
              </p>
              <Link to={`../friends/${el.id}`}>{t('friends.more')}</Link>
            </li>
          ))}
      </ul>
      <iframe
        title='cross-domain'
        src='http://localhost:3000'
        id='example-iframe'
        frameborder='0'
      ></iframe>
      <button
        style={{ margin: '20', backgroundColor: 'aqua' }}
        type='button'
        id='iframeButton'
        onClick={clickFn}
      >
        click me
      </button>
    </div>
  );
}
