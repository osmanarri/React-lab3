import React from "react"

export default function Entry(props){

    return (      

        <div className="term">
          <div>
            <span className="emoji" role="img" aria-label="Tense Biceps">
              {props.shape}
            </span>
            <span>{props.name}</span>
          </div>
          <div>
            {props.description}
          </div>
        </div>

        
    )
}