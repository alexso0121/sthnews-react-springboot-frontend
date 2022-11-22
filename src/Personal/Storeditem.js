import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { useContext, useState } from 'react';
import { CatStateContext } from '../CatStateContext';
import axios from 'axios';

//the row of each 
const Historyitem=({title,news_id,edit,id})=>{
    const username=localStorage.getItem("name")
    const token=localStorage.getItem('token')
    
    const href='/article/'+news_id+"/get"
    const [deleteresult,setDeleteResult]=useState(null);
    const baseurl=useContext(CatStateContext)

    //delete the single store of the client
    async function deleteDataById() {
        if (id){
          
            const res = await axios.delete(baseurl+"deletestore/"+id, 
            {headers:{"Authorization":"Bearer "+token}});
    
            const data = await res.text();
    
            const result = {
            
              data: data,
            };
    
            setDeleteResult(result);
           
            console.log(deleteresult.data)
            
           
          
        }
      }
      //handle event when client click delete store
      function deletestore(){
        deleteDataById();
        
        window.location.reload();
         


      }
    

    return (<><ListGroup.Item style={{"height":"95px"}}>
      <a style={{"color":"black","textDecoration":"none"}} href={href}>{title}</a>
    
    {edit===true&&<div>
      <Button style={{"float":"right","border-radius":"40%","height":"35px"}} 
      onClick={deletestore}  variant="warning">-</Button></div>}
    
    </ListGroup.Item></>)

}

export default Historyitem