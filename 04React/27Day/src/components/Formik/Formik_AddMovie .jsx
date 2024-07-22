import Button from '@mui/material/Button';
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { useFormik } from 'formik';
import * as Yup from 'yup';

function Formik_AddMovie({movieList,setMovieList}){

    const formik=useFormik({
      initialValues:{
        name:"",
        poster:"",
        rating:"",
        summary:"",
        trailer:""
      },
      validationSchema:Yup.object({
        name:Yup.string().required("Fill the Feild,Mandtory Feild"),
        poster:Yup.string().required("Fill the Feild,Mandtory Feild"),
        rating:Yup.number().required("Fill the Feild,Mandtory Feild").min(1,"Min 1").max(10,"Enter from 1-10"),
        summary:Yup.string().required("Fill the Feild,Mandtory Feild"),
        trailer:Yup.string().required("Fill the Feild,Mandtory Feild"),
      }),
      onSubmit:(values)=>{
        console.log(values)
        // alert(JSON.stringify(values))
        postMovies(values)
      }
    })
  const postMovies=async(movie)=>{
    let response=await axios.post("https://6695fead0312447373c0a4cf.mockapi.io/Movie",movie)
    console.log(response.data)
  }
  console.log(formik)// object
 
  return (
    <>
      <form onSubmit={formik.handleSubmit}
        style={{
          width: 400,
          maxWidth: "100%",
        }}
      >
        <TextField
          fullWidth
          label="name"
          id="name"
          size="small"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          sx={{ margin: "3%", backgroundColor: "white" }}
        />
        {formik.touched.name && formik.errors.name?<span>{formik.errors.name}</span>:null}

        <TextField
          fullWidth
          label="poster"
          id="poster"
          size="small"
          name="poster"
          value={formik.values.poster}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          sx={{ margin: "3%", backgroundColor: "white" }}
        />
        {formik.touched.poster && formik.errors.poster?<span>{formik.errors.poster}</span>:null}
        
        <TextField
          fullWidth
          label="rating"
          id="rating"
          size="small"
          name="rating"
          value={formik.values.rating}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          sx={{ margin: "3%", backgroundColor: "white" }}
        />
         {formik.touched.rating && formik.errors.rating?<span>{formik.errors.rating}</span>:null}

        <TextField
          fullWidth
          label="summary"
          id="summary"
          size="small"
          name="summary"
          value={formik.values.summary}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          sx={{ margin: "3%", backgroundColor: "white" }}
        />
         {formik.touched.summary && formik.errors.summary?<span>{formik.errors.summary}</span>:null}
        <TextField
          fullWidth
          label="trailer"
          id="trailer"
          size="small"
          name="trailer"
          value={formik.values.trailer}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          sx={{ margin: "3%", backgroundColor: "white",borderRadius:"2%" }}
        />
         {formik.touched.trailer && formik.errors.trailer?<span>{formik.errors.trailer}</span>:null}
        <Button variant="outlined"
        type="submit"
            sx={{ margin: "1% 10%",padding:"0.4% 5%"}}
            >Add Movie</Button>

      </form>
      


    </>
)
}
export default Formik_AddMovie
// {name: 'BRO', poster: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:AN…Bmwia-XFXzuNE5YUT_5-6BnzM5rGap9o0SQTomY7ZCff7qp2A', rating: '6.1', summary: 'After meeting with a fatal accident, a young man b… he learns the importance of humility and family.'}