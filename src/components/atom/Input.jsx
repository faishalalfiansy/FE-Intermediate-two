const Input = (props) => {
    const { typeInput, namaId, kelasinput } = props
    return (
        <input type={typeInput} className={kelasinput} id={namaId} required />
    )
}

export default Input