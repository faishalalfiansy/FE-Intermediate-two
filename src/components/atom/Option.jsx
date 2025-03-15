const Option = (props) => {
    const { nama, idselect, children } = props
    return (
        <select name={nama} id={idselect}>
            {children}
        </select>
    )
}
export default Option