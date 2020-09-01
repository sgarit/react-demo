import React from 'react'
function Hello(props){
    return(
    <div>
        <h3>Title:{props.title}</h3>
         <h3>Message:{props.message}</h3>
         
     </div>
    )
}

export default Hello