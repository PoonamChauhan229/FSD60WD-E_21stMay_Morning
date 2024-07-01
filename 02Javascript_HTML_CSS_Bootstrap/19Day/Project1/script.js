let url=`https://667e43de297972455f67acef.mockapi.io/crud`
let tableBody=document.getElementById('tbody')
let tableHead=document.getElementById('thead')

let inputUserName=document.getElementById('inputUserName')
let inputEmail=document.getElementById('inputEmail')
let inputContactNumber=document.getElementById('inputContactNumber')
// console.log(inputContactNumber.value,inputEmail.value,inputUserName.value)

function createNewElement(element,value="",atbt,atbtVal){
    let newElement=document.createElement(element);
    newElement.setAttribute(atbt,atbtVal)
    newElement.innerHTML=value
    return newElement
}

// R:READ   >GET     > RETRIVE DATA FROM THE SERVER
const getUserData=async()=>{
    let data=await fetch(url)
    let res=await data.json()
    //console.log(res)
    let tr10=createNewElement("tr","","id","trhead")

    let th11=createNewElement('th',"#",'scope',"col")
    let th12=createNewElement('th',"FullName",'scope',"col")
    let th13=createNewElement('th',"Email",'scope',"col")
    let th14=createNewElement('th',"ContactNumber",'scope',"col")
    let th15=createNewElement('th',"Action",'scope',"col")

    tr10.append(th11,th12,th13,th14,th15)
    thead.append(tr10)

    res.map((element,index)=>{
        //console.log(element)
        const {name,email,phone_number,id}=element
        let tr=createNewElement("tr","","id",`tr${id}`)
        //console.log(tr)
        let th1=createNewElement('th',id,'scope',"row")
        let td1=createNewElement('td',name,"id",`td1${id}`)
        let td2=createNewElement('td',email,"id",`td2${id}`)
        let td3=createNewElement('td',phone_number,"id",`td3${id}`)
        // let td4=createNewElement('td',"<button class='btn btn-warning mx-2 px-3 py-1'>Edit</button><button class='btn btn-danger mx-2 px-3 py-1'>Delete</button>","id",`td3${index}`)
        let td4=createNewElement('td',`<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target=#exampleModal${id} id='edit${id}' onclick="editbtnUser('${id}','${name}','${email}','${phone_number}')" >
        Edit </button> <button id=delete${id} class="btn btn-danger mx-2 px-3 py-1" onclick='deleteUserData(${id})'>Delete</button>`)
        tr.append(th1,td1,td2,td3,td4)
        tbody.append(tr)
    })
   
}
getUserData()



// C:CREATE >POST    > ADD DATA TO THE SERVER

const createUserData=async()=>{
    console.log(inputContactNumber.value,inputEmail.value,inputUserName.value)
    const newUser={
        name:inputUserName.value,
        email:inputEmail.value,
        phone_number:inputContactNumber.value
    }
    let data=await fetch(url,{
        method:"POST",
        headers:{"content-type":"application/json"},
        body:JSON.stringify(newUser)
    })
    let res=await data.json()
    console.log(res)
    console.log(res.id)
    getUserSpecificData(res.id)
}

const getUserSpecificData=async(idNo)=>{
    let data=await fetch(`${url}/${idNo}`)
    let res=await data.json()
    console.log(res)
    const {name,email,phone_number,id}=res
    let tr=createNewElement("tr","","id",`tr${id}`)
    //console.log(tr)
    let th1=createNewElement('th',id,'scope',"row")
    let td1=createNewElement('td',name,"id",`td1${id}`)
    let td2=createNewElement('td',email,"id",`td2${id}`)
    let td3=createNewElement('td',phone_number,"id",`td3${id}`)
    let td4=createNewElement('td',`<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target=#exampleModal${id} id='edit${id}' onclick="editbtnUser('${id}','${name}','${email}','${phone_number}')" >
        Edit </button> <button id=delete${id} class="btn btn-danger mx-2 px-3 py-1" onclick='deleteUserData(${id})'>Delete</button>`)
    tr.append(th1,td1,td2,td3,td4)
    tbody.append(tr)

}
//createUserData()

// D:DELETE >DELETE  > DELETE DATA
// one data at a time
// ids comes into picture || unique in nature
// i can access specific user/1 user with that id

const deleteUserData=async(deleteId)=>{
    //let deleteId=10;// static one > click on btn we are getting the IDs > we wont pass static
    console.log(`${url}/${deleteId}`)
    let data=await fetch(`${url}/${deleteId}`,{
        method:"DELETE"
    })
    let res=await data.json()
    console.log(res)
    tableHead.innerHTML="";
    tableBody.innerHTML="";
    getUserData()

}
// deleteUserData()

// U:UPDATE >PUT     > MODIFY DATA
// one data at a time
// ids comes into picture || unique in nature
// i can access specific user/1 user with that id

function editbtnUser(editId,editName,editEmail,editPhone_number){
    console.log("Edit  btn is called",editId,editName,editEmail,editPhone_number)
    const modal=document.createElement('span')
    modal.innerHTML=" ";

    modal.innerHTML=`<div class="modal fade" id=exampleModal${editId} tabindex="-1" aria-labelledby=exampleModalLabel${editId} aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Update User</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
         <div class="input-group mb-3">
          <!-- <span class="input-group-text" id="basic-addon1">@</span> -->
          <input type="text" class="form-control" placeholder="Name" aria-label="Username" aria-describedby="basic-addon1" id=modalinputUserName${editId} value='${editName}'>
        </div>
        <div class="input-group mb-3">
          <!-- <span class="input-group-text" id="basic-addon1">@</span> -->
          <input type="email" class="form-control" placeholder="Email" aria-label="Username" aria-describedby="basic-addon1" id=modalinputEmail${editId} value='${editEmail}'>
        </div>
        <div class="input-group mb-3">
          <!-- <span class="input-group-text" id="basic-addon1">@</span> -->
          <input type="text" class="form-control" placeholder="PhoneNumber" aria-label="Username" aria-describedby="basic-addon1" id=modalinputContactNumber${editId}  value='${editPhone_number}'>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" onclick='updateUserData("${editId}")'>Save changes</button>
      </div>
    </div>
  </div>
    </div>`
document.body.append(modal)
}

const updateUser=(deleteId)=>{
    console.log("UpdateUser",deleteId)
    let modalName=document.getElementById('modalinputUserName'+deleteId).value
    let modalEmail=document.getElementById('modalinputEmail'+deleteId).value
    let modalContactNumber=document.getElementById('modalinputContactNumber'+deleteId).value
    console.log(modalName,modalEmail,modalContactNumber)

}
// updateUser()
const updateUserData=async(updateId)=>{
    console.log("UpdateUser",updateId)
    let modalName=document.getElementById('modalinputUserName'+updateId).value
    let modalEmail=document.getElementById('modalinputEmail'+updateId).value
    let modalContactNumber=document.getElementById('modalinputContactNumber'+updateId).value
    console.log(modalName,modalEmail,modalContactNumber)
    const userToUpdate={
        name:modalName,
        email:modalEmail,
        phone_number:modalContactNumber
    }
    console.log(`${url}/${updateId}`)
    let data=await fetch(`${url}/${updateId}`,{
        method:"PUT",
        headers:{"content-type":"application/json"},
        body:JSON.stringify(userToUpdate)
    })
    let res=await data.json()
    console.log(res)
    console.log(res.id)
    console.log(document.getElementById('td1'+updateId))
    console.log(document.getElementById('td2'+updateId))
    console.log(document.getElementById('td3'+updateId))
    document.getElementById('td1'+updateId).innerText=modalName
    document.getElementById('td2'+updateId).innerText=modalEmail
    document.getElementById('td3'+updateId).innerText=modalContactNumber
}
// updateUserData()
