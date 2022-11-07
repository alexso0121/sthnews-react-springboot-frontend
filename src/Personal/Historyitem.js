import ListGroup from 'react-bootstrap/ListGroup'
const Historyitem=({title,user_id,id,url})=>{
    const href='/article/'+id+"/get"
    return (<><ListGroup.Item><a style={{"color":"black"}} href={href}>{title}</a></ListGroup.Item></>)

}

export default Historyitem