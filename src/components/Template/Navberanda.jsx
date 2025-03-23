import React, { useState } from 'react';
import Navbar from '/src/components/Molecules/Navbar';
import Ava from '/src/assets/image/Avatar.png'
import Burger from '/src/assets/image/burgerIcon.png'
import exit from '/src/assets/image/exit.png'
import { useNavigate } from 'react-router-dom';

const Navberanda = () => {
    // State untuk mengatur apakah menu dropdown terbuka atau tertutup
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();
    // Fungsi untuk toggle menu dropdown
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
  
    return (
        <>
      <div>
        <Navbar>
          <div className='pilmenu'>
            <ul>
              <li><a href="#/kategori">Kategori</a></li>
            </ul>
            <img
              src={Ava}
              alt="Avatar"
              onClick={toggleMenu}
              className="avatar-img"
            />
          </div>
  
          <img src={Burger} alt="burger" onClick={toggleMenu} className='burger'/>
          {isMenuOpen && (
            <div className='sub-menu-wrap'>
              <div className='subdiv'>
                <a href="">Profil Saya</a>
              </div>
              <hr />
              <div className='subdiv'>
                <a href="">Kelas Saya</a>
              </div>
              <hr />
              <div className='subdiv'>
                <a href="">Pesanan Saya</a>
              </div>
              <hr />
              <div className='exit'>
                <a href="">Keluar</a>
                <img src={exit} alt="Exit" />
              </div>
            </div>
          )}
        </Navbar>
      </div>
      </>
    );
  }
  
  export default Navberanda;