import Input from "/src/components/atom/Input";
import Label from "/src/components/atom/Label";

const Inputan = (props) => {
    const { namaLabel, namaId, title, kelasinput,children} = props;
    return (
        <div className="input-box">
            <Label namaLabel={namaLabel}> {title} {children}</Label>
            <Input typeInput="text" kelasinput={kelasinput} namaId={namaId} required />
        </div>
    )
}

export default Inputan