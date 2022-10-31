
import Newslist from './Newslist.js';
import Newsnavbar from './Newsnavbar.js';
import Layout from '../layout/layout.jsx';
import { useParams } from 'react-router-dom';



const App=()=>{
  let {id}=useParams();
  console.log(id);
  return (<><Newsnavbar /><Newslist id={id} /> </>

  )
}

export default App;
