import React from 'react'

function Alert(props) {
  return(
        // adjusting the layout for the alert CLS(cumulative layout shift)
        
         <div style={{height:'55px'}}>
         {props.alert && <div className="alert alert-warning alert-dismissible fade show" role="alert">
            <strong>{props.alert.type}</strong>:{props.alert.msg}

        </div>}
        {/* //if props.alert==null then it has no type so error
        //props.alert will get evaluate first  */}
        </div>
  )
}

export default Alert

