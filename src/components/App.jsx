import React from "react"
import emojipedia from "../emojipedia"
import Entry from "./Entry"

// function to call it inside the map function
function createEmoji(osman){

    return <Entry
        // unique id for each card component
        id={osman.id}
        key={osman.id}
        shape={osman.emoji}
        name={osman.name}
        description={osman.meaning}
        
    />
}

export default function App(props){

    return (
        <div>
            <h1>
              <span>emojipedia</span>
           </h1>
        

           <div className="dictionary">

                
                {emojipedia.map(createEmoji)}

           </div>

        </div>
    )
}