import Counter from "./Counter"

function Profile(props){
    console.log("Profile",props)
return(
    <>
    <div className="border">
      <img src={props.image} className="profile-pic" alt="" />
        <h5>Hi {props.nickName}</h5>
        <Counter/>
    </div>
    </>
)
}
export default Profile
// className
//class is reserved keyword -OOPS 