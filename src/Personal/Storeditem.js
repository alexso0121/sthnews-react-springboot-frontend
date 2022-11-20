import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { useContext, useState } from 'react';
import { CatStateContext } from '../CatStateContext';
import axios from 'axios';

const Historyitem=({title,news_id,edit,id})=>{
    const username=localStorage.getItem("name")
    const token=localStorage.getItem('token')
    //console.log(edit)
    const href='/article/'+news_id+"/get"
    const [deleteresult,setDeleteResult]=useState(null);
    const baseurl=useContext(CatStateContext)
    async function deleteDataById() {
        //get the id from input
       
    
        if (id){
          //https://newsweb.us-west-2.elasticbeanstalk.com/
            const res = await axios.delete(baseurl+"deletestore/"+id, {headers:{"Authorization":"Bearer "+token}});
    
            const data = await res.text();
    
            const result = {
            
              data: data,
            };
    
            setDeleteResult(result);
           
            console.log(deleteresult.data)
            
           
          
        }
      }
      function deletestore(){
        deleteDataById();
        
        window.location.reload();
        //window.location.reload(); 


      }
    

    return (<><ListGroup.Item><a href={href}>{title}</a>
    {edit===true&&<div><Button style={{"float":"right","border-radius":"40%","height":"35px"}} onClick={deletestore}  variant="warning">-</Button></div>}
    </ListGroup.Item></>)

}

export default Historyitem