import ListGroup from 'react-bootstrap/ListGroup'

//the row in history list group
const Historyitem=({title,user_id,news_id,url})=>{
    const href='/article/'+news_id+"/get"
    return (<><ListGroup.Item><a style={{"color":"black"}} 
    href={href}>{title}</a></ListGroup.Item></>)

}

export default Historyitem