import { useFormik } from 'formik';
import * as Yup from 'yup';
const BasicForm_Formik=()=>{
    const formik=useFormik({
        initialValues:{
            username:"",
            email:"",
            password:""   
        },
        validationSchema:Yup.object({
            username:Yup.string().max(7,"Must be atmost 7 charachters").required("Required Field"),
            email:Yup.string().email("Invalid Email address").required("Mandatory Feild"),
            password:Yup.string().min(4,"Mininum 4 characters").required("Enter the password")  

        }),
        onSubmit:(values)=>{
            console.log(values)
            alert(JSON.stringify(values))
        }
    })
    console.log(formik)// object
    return(
        <>
        <h1>Formik</h1>
        <form onSubmit={formik.handleSubmit}>
            <input type="text" name="username" id="username" placeholder="username"
             onChange={formik.handleChange}
             onBlur={formik.handleBlur}
            value={formik.values.username}           
            />
             {formik.touched.username && formik.errors.username?<span>{formik.errors.username}</span>:null }
            <p></p>
            <input type="email" name="email" id="email" placeholder="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email?<span>{formik.errors.email}</span>:null}
            <p></p>
            <input type="password" name="password" id="password" placeholder="password"
             onChange={formik.handleChange}
             onBlur={formik.handleBlur}
            value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password?<span>{formik.errors.password}</span>:null}
            <p></p>

            <button type="submit">Submit Formik Form</button>
        </form>
        </>
    )
}
export default BasicForm_Formik