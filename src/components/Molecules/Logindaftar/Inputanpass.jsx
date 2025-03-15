import Input from "/src/components/atom/Input"
import Label from "/src/components/atom/Label"
import eye from "/src/assets/image/eye.png"

const InputanPass = (props) => {
    const { namalabel, namaId, title, kelasinput,children } = props
    return (
        <div className="input-box">
            <Label namaLabel={namalabel}> {title} {children}</Label>
            <Input typeInput="password" kelasinput={kelasinput} namaId={namaId} required />
            <img className='eye' src={eye}/>
        </div>
    )
}

export default InputanPass