import React from 'react';

const Navbar = () => (
  <div>
    <header>
      <div className='content'>
      <div className='sub_media'>
        <div className='sub_media'>
          <div className='left'>
            <ul className='primary'>
              <li className='logo'>
                <a href="/">
                    <img src="https://www.themoviedb.org/assets/1/v4/logos/primary-green-d70eebe18a5eb5b166d5c1ef0796715b8d1a2cbc698f96d311d62f894ae87085.svg" alt="The Movie Database (TMDb)" width="81" height="72" />
                </a>
              </li>
              <li><a href="/discover/movie">Películas</a></li>
              <li>
                <a href="/person">Gente</a>
                <ul className="sub_menu person hide">
                  <li><a href="/person">Gente Popular</a></li>
                </ul>
              </li>
            </ul>
          </div>
          <div className='right'>
            <div className='primary'>
              <li>
                <a href="/login">Acceder</a>
              </li>
              <li>
                <a href="/login">Registrarse</a>
              </li>
            </div>
          </div>
        </div>
      </div>
      </div>
    </header>
  </div>
);

export default Navbar;
