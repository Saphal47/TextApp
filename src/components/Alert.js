import React from 'react'

function Alert(props) {
  return(
         props.alert && <div className="alert alert-warning alert-dismissible fade show" role="alert">
            <strong>{props.alert.type}</strong>:{props.alert.msg}

        </div> 
        //if props.alert==null then it has no type so error
        //props.alert will get evaluate first 
        
  )
}

export default Alert

