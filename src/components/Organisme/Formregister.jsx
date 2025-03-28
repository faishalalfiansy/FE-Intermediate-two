import Inputan from "/src/components/Molecules/Logindaftar/Inputan";
import Inputanpass from "/src/components/Molecules/Logindaftar/Inputanpass";
import Buttonvsatu from "/src/components/Molecules/Logindaftar/Buttonvsatu";
import Lupapass from "/src/components/Molecules/Logindaftar/Lupapass";
import Atau from "/src/components/Molecules/Logindaftar/Atau";
import Buttongo from "/src/components/Molecules/Logindaftar/Buttonimg";
import Inputnomor from '../Molecules/Logindaftar/Inputnomor'
import Input from "/src/components/atom/Input";
import { useNavigate } from 'react-router-dom'
import Logol from "/src/assets/image/logoGoogle.png";
import Bendera from "/src/assets/image/logoIndonesia.png"
import React from "react";
import { useState, useEffect } from "react";

const Formregister = () => {
  const navigate = useNavigate();

  const [dataUser, setDataUser] = useState({
    nama: "",
    email: "",
    password: "",
    repassword: "",
  });

 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDataUser({
      ...dataUser,
      [name]: value
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (dataUser.password !== dataUser.repassword) {
      alert("Password tidak cocok!");
      return;
    }
    localStorage.setItem("userData", JSON.stringify(dataUser));
    alert("Registrasi berhasil!");

  };
  
  const tologin = (path) => {
    navigate(path);
  };
    return (
      <>
      <div className='body-input'>
      <form onSubmit={handleSubmit}>
      <div className='box-input'>
        <Inputan  
        namaLabel="email"  
        kelasinput="input-field"  
        namaId="nama"   
        title="Nama Lengkap"
        namaE="nama"  
        isiValue={dataUser.nama}
        onChange={handleChange}  
        required>  
        <span>*</span>
        </Inputan>

        <Inputan  
        namaLabel="email"   
        kelasinput="input-field"  
        namaId="email" title="E-mail"
        namaE="email"  
        isiValue={dataUser.email}
        onChange={handleChange}   
        required>  
        <span>*</span>  
        </Inputan>

        <Inputnomor   
        sumber={Bendera}  
        kelasimg="idn"    
        idselect="kode" 
        onChange={handleChange}> 
        <Input typeInput="text" 
        kelasinput="input-nomor" 
        namaId="telfon"  
        title="telfon" 
        namaE="telfon"
        isiValue={dataUser.telfon}
        onChange={handleChange}
        required/>  
        </Inputnomor>

        <Inputanpass  
        namaLabel="password"  
        kelasinput="input-field"  
        namaId="password"   
        title="Kata Sandi" 
        namaE="password"
        isiValue={dataUser.password}
        onChange={handleChange}  
        required> 
        <span>*</span>  
        </Inputanpass>

        <Inputanpass  
        namaLabel="repassword"  
        kelasinput="input-field"  
        namaId="repassword"   
        title="Konfirmasi Kata Sandi" 
        namaE="repassword"
        isiValue={dataUser.repassword}
        onChange={handleChange}  
        required> 
        <span>*</span>  
        </Inputanpass>

      </div>
      <Lupapass children="Lupa Password?"/>
      <div className='box-submit'>
        <Buttonvsatu  
        kelasdiv="input-box"  
        kelastombol="regis"   
        typebutton="submit"
        id="daftar"
        > 
        {/* <Link to="/login">Daftar</Link>  */}
        Daftar
        </Buttonvsatu>

        <Buttonvsatu  
        kelasdiv="input-box"  
        kelastombol="punya"   
        typebutton="button"
        id="masuk"
        klik={() => tologin('/login')}> 
        {/* <Link to="/login">Masuk</Link>   */}
        Masuk
        </Buttonvsatu>
      </div>
      <Atau children="atau" />
      <div className='social'>
        <Buttongo typebutton="submit" kelastombol="google" sumber={Logol} kelasimg="logoG">
          <p>Daftar dengan Google</p>
        </Buttongo>
      </div>
      </form>
    </div>
    
      </>
    )
}

export default Formregister