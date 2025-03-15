import React, { useState } from 'react';
import Navbar from '/src/components/Molecules/Navbar';
import Ava from '/src/assets/image/Avatar.png'
import Burger from '/src/assets/image/burgerIcon.png'

const Navberanda = () => {
    // State untuk mengatur apakah menu dropdown terbuka atau tertutup
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  
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
              <li><a href="/beranda">Kategori</a></li>
            </ul>
  
            {/* Gambar Avatar, klik untuk toggle dropdown */}
            <img
              src={Ava}
              alt="Avatar"
              onClick={toggleMenu}
              className="avatar-img"
            />
          </div>
  
          {/* Gambar menu burger */}
          <img src={Burger} alt="burger" onClick={toggleMenu} className='burger'/>
  
          {/* Menu dropdown, hanya tampil ketika isMenuOpen true */}
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
                <img src="/src/assets/image/exit.png" alt="Exit" />
              </div>
            </div>
          )}
        </Navbar>
      </div>
      </>
    );
  }
  
  export default Navberanda;