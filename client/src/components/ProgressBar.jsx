import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/progressBar.css"

export function ProgressBar(props) {
  return (
    <div className='containerProgressBar'>

      <div className="progress">
        <div className="progress-bar progress-bar-striped bg-info progress-bar-animated"
          role="progressbar"
          style={{ width: props.porcentaje ? props.porcentaje + "%" : "100%" }}
        ><span className='progressText'>{props.texto ? props.texto : "Porcentaje"}</span></div>
      </div>
    </div>
  )
}
