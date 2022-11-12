function Try () {
    const sd="sdfdsf,dsfdf,dfs,dfd,sdf"
    let ar=sd.split(",")
    /* const text='()'
    function block(){
        for(const blockt in ar){
          text+=<p>{blockt}</p> 
        }
        return text
    } */
    console.log()
    return (<div> {ar.map(bl=><li>{bl}</li>)}</div>);
}

export default Try ;