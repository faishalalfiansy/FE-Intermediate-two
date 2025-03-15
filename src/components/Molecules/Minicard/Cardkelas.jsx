import Miniatasone from "./Miniatasone";
import Miniatastwo from "./Miniatastwo";
import Minibawah from "./Minibawah";
import instruk from "/src/assets/image/instruktur1.png"
import Binfull from "/src/assets/image/full-star.png"
import Binsetengah from "/src/assets/image/setengah-star.png"
import Binkosong from "/src/assets/image/kosong-star.png"

const Cardkelas = (props) => {
  const { sumber, childrenone } = props;
  return (
    
      <section className="card">
        <img className="img-judul" src={sumber} alt="" />
        <section className="card-content">
          <Miniatasone
            kls="card-isi"
            childrenone={childrenone}
            childrentwo="Mulai transformasi dengan instruktur Profesional, harga yang terjangkau, dan terpercaya"
          />
          <Miniatastwo sumber={instruk} />
        </section>
        <section className="card-akhir">
        <Minibawah
          bintang1={Binfull}
          bintang2={Binfull}
          bintang3={Binfull}
          bintang4={Binsetengah}
          bintang5={Binkosong}
          children1="4.5(86)"
          children2="Rp 300K"
        />
        </section>
      </section>
  );
};

export default Cardkelas;