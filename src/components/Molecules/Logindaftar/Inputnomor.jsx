import Buttongo from "/src/components/Molecules/Logindaftar/Buttonimg";
import Option from "/src/components/atom/Option";
import Label from "/src/components/atom/Label";
const Inputnomor = (props) => {
    const { sumber,kelasimg, idselect, children} = props;
    return (
        <>
        <div className="konten-input1">
            <Label namaLabel="telfon" title="No. Hp"><span>*</span></Label>
        <div className="box-nomor">
            <div className="subone">
                <Buttongo typebutton="submit" kelastombol="lkode" sumber={sumber} kelasimg={kelasimg} />
            </div>
            <div className="subtwo">
                <Option idselect={idselect}>
                <option value="1">+62</option>
                <option value="2">+33</option>
                <option value="3">+44</option>
                </Option>
            </div>
            <div className="subtree">
               {children}
            </div>
        </div>
        </div>
        </>
    )
}

export default Inputnomor