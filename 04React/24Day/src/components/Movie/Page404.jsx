import Page01_404 from '../../assets/Page01_404.png'
import Page02_404 from '../../assets/Page02_404.png'
function Page404(){
    const page404Style={
        margin:"10% 30%",
        textAlign:"center",
        backgroundColor:"black"
    }
    return(
        <>
        <div style={page404Style}>
            <img src={Page01_404} alt="" />
            <img src={Page02_404} alt="" />
        </div>
        </>
    )
}
export default Page404