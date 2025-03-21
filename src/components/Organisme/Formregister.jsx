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
import React,{ useState } from "react";

const Formregister = () => {
  const navigate = useNavigate();
  
  const klik = (e) => {
    e.preventDefault();
    console.log("daftar");
    console.log(e.target.email.value);
    console.log(e.target.password.value);
    console.log(e.target.kode.value);
    console.log(e.target.telfon.value);
  };
  const tologin = (path) => {
    navigate(path);
  };
    return (
      <>
      <form onSubmit={klik}>
      <div className='body-input'>
      <div className='box-input'>
        <Inputan  
        namaLabel="email"  
        kelasinput="input-field"  
        namaId="nama"   
        title="Nama Lengkap"
        name="nama"  
        // value={dataLogin.nama}
        // onChange={handleChange}   
        required>  
        <span>*</span>
        </Inputan>

        <Inputan  
        namaLabel="email"   
        kelasinput="input-field"  
        namaId="email" title="E-mail"
        name="email"   
        // value={dataLogin.email}
        // onChange={handleChange}   
        required>  
        <span>*</span>  
        </Inputan>

        <Inputnomor   
        sumber={Bendera}  
        kelasimg="idn"    
        idselect="kode" 
        // value={dataLogin.nohp}
        // onChange={handleChange}
        > 
        <Input typeInput="text" kelasinput="input-nomor" namaId="telfon" name="telfon" title="telfon" required/>  
        </Inputnomor>

        <Inputanpass  
        namaLabel="password"  
        kelasinput="input-field"  
        namaId="password"   
        title="Kata Sandi" 
        name="password" 
        // value={dataLogin.password}
        // onChange={handleChange}  
        required> 
        <span>*</span>  
        </Inputanpass>

        <Inputanpass  
        namaLabel="password"  
        kelasinput="input-field"  
        namaId="passwordre"   
        title="Konfirmasi Kata Sandi" 
        name="repassword"  
        // value={dataLogin.repassword}
        // onChange={handleChange}  
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
    </div>
    </form>
      </>
    )
}

export default Formregister