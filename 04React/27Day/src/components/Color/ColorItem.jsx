

export function ColorItem({color}){
    const colorStyle={
        backgroundColor:color,
        width:"240px",
        margin:"5px 0px",
        padding:"5px"
    }
    return (
        <>
        <p style={colorStyle}></p>
        </>
    )

}
