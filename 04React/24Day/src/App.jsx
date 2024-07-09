import './App.css'
import { AddColor } from './components/Color/AddColor'
import MovieDisplay from './components/Movie/MovieDisplay'
import { movie } from './components/utilis/movieData'
function App() {
  
  return (
   <div>
   {/* App.jsx should be neat and tidy */}
   <AddColor/>
   <MovieDisplay movie={movie}/>
  
   </div>
   
    
  )
}

export default App
// named  import export >>{}
// default import export >>


