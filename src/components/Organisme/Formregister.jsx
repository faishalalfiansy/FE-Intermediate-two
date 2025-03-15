import Inputan from "/src/components/Molecules/Logindaftar/Inputan";
import Inputanpass from "/src/components/Molecules/Logindaftar/Inputanpass";
import Buttonvsatu from "/src/components/Molecules/Logindaftar/Buttonvsatu";
import Lupapass from "/src/components/Molecules/Logindaftar/Lupapass";
import Atau from "/src/components/Molecules/Logindaftar/Atau";
import Buttongo from "/src/components/Molecules/Logindaftar/Buttonimg";
import Inputnomor from '../Molecules/Logindaftar/Inputnomor'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Logol from "/src/assets/image/logoGoogle.png";
import Bendera from "/src/assets/image/logoIndonesia.png"

const Formregister = () => {
  const navigate = useNavigate();
  const klik = (path) => {
    navigate(path)
  }
    return (
      <div className='body-input'>
      <div className='box-input'>
        <Inputan namaLabel="email" kelasinput="input-field" namaId="nama" title="Nama Lengkap"><span>*</span></Inputan>
        <Inputan namaLabel="email" kelasinput="input-field" namaId="email" title="E-mail"><span>*</span></Inputan>
        <Inputnomor sumber={Bendera} kelasimg="idn" nama="kode" idselect="kode"/>
        <Inputanpass namaLabel="password" kelasinput="input-field" namaId="password" title="Kata Sandi"><span>*</span></Inputanpass>
        <Inputanpass namaLabel="password" kelasinput="input-field" namaId="passwordre" title="Konfirmasi Kata Sandi"><span>*</span></Inputanpass>
      </div>
      <Lupapass children="Lupa Password?"/>
      <div className='box-submit'>
        <Buttonvsatu kelasdiv="input-box" kelastombol="masuk" typebutton="submit" klik={() => klik('/login')}> <Link to="/login">Daftar</Link></Buttonvsatu>
        <Buttonvsatu kelasdiv="input-box" kelastombol="daftar" typebutton="submit" klik={() => klik('/login')}><Link to="/login">Masuk</Link></Buttonvsatu>
      </div>
      <Atau children="atau" />
      <div className='social'>
        <Buttongo typebutton="submit" kelastombol="google" sumber={Logol} kelasimg="logoG">
          <p>Daftar dengan Google</p>
        </Buttongo>
      </div>
    </div>
    )
}

export default Formregister