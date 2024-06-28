let url=`https://667e451c297972455f67b213.mockapi.io/crud`
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
        let tr=createNewElement("tr","","id",`tr${index}`)
        //console.log(tr)
        let th1=createNewElement('th',id,'scope',"row")
        let td1=createNewElement('td',name,"id",`td1${index}`)
        let td2=createNewElement('td',email,"id",`td2${index}`)
        let td3=createNewElement('td',phone_number,"id",`td3${index}`)
        let td4=createNewElement('td',"<button class='btn btn-warning mx-2 px-3 py-1'>Edit</button><button class='btn btn-danger mx-2 px-3 py-1'>Delete</button>","id",`td3${index}`)
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
    let td4=createNewElement('td',"<button class='btn btn-warning mx-2 px-3 py-1'>Edit</button><button class='btn btn-danger mx-2 px-3 py-1'>Delete</button>","id",`td3${id}`)
    tr.append(th1,td1,td2,td3,td4)
    tbody.append(tr)

}
//createUserData()

// D:DELETE >DELETE  > DELETE DATA
// one data at a time
// ids comes into picture || unique in nature
// i can access specific user/1 user with that id

const deleteUserData=async()=>{
    let id=10;
    console.log(`${url}/${id}`)
    let data=await fetch(`${url}/${id}`,{
        method:"DELETE"
    })
    let res=await data.json()
    console.log(res)

}
// deleteUserData()

// U:UPDATE >PUT     > MODIFY DATA
// one data at a time
// ids comes into picture || unique in nature
// i can access specific user/1 user with that id

const updateUserData=async()=>{
    let id=3;
    const userToUpdate={
        name:"Guvi",
        email:"guvi@gmail.com",
        phone_number:456789
    }
    console.log(`${url}/${id}`)
    let data=await fetch(`${url}/${id}`,{
        method:"PUT",
        headers:{"content-type":"application/json"},
        body:JSON.stringify(userToUpdate)
    })
    let res=await data.json()
    console.log(res)
}
// updateUserData()

