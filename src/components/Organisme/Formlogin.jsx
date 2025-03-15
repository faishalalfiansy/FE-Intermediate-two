import Inputan from "/src/components/Molecules/Logindaftar/Inputan";
import Inputanpass from "/src/components/Molecules/Logindaftar/Inputanpass";
import Buttonvsatu from "/src/components/Molecules/Logindaftar/Buttonvsatu";
import Lupapass from "/src/components/Molecules/Logindaftar/Lupapass";
import Atau from "/src/components/Molecules/Logindaftar/Atau";
import Buttongo from "/src/components/Molecules/Logindaftar/Buttonimg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Logol from "/src/assets/image/logoGoogle.png";

const Formlogin = () => {
  const navigate = useNavigate();
  const klik = (path) => {
    navigate(path);
  };
  return (
    <div className="body-input">
      <div className="box-input">
        <Inputan namaLabel="email" kelasinput="input-field" namaId="email" title="E-mail">
          <span>*</span>
        </Inputan>
        <Inputanpass namaLabel="password" kelasinput="input-field" namaId="password" title="Kata Sandi">
          <span>*</span>
        </Inputanpass>
      </div>
      <Lupapass children="Lupa Password?" />
      <div className="box-submit">
        <Buttonvsatu kelasdiv="input-box masuk" kelastombol="masuk" typebutton="submit" klik={() => klik("/beranda")}>
          <Link to="/beranda">Masuk</Link>
        </Buttonvsatu>
        <Buttonvsatu kelasdiv="input-box daftar" kelastombol="daftar" typebutton="submit" klik={() => klik("/register")}>
          <Link to="/register">Daftar</Link>
        </Buttonvsatu>
      </div>
      <Atau children="atau" />
      <div className="social">
        <Buttongo typebutton="submit" kelastombol="google" sumber={Logol} kelasimg="logoG">
          <p>Masuk dengan Google</p>
        </Buttongo>
      </div>
    </div>
  );
};

export default Formlogin;
