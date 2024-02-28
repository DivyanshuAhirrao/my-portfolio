import React from 'react';
import '../../index.css'
//importing typewriter-effect
import Typewriter from "typewriter-effect";
 
const Typewritter =()=> {
    return (
        <div className="App">
            
            <Typewriter
                onInit={(typewriter) => {
                    typewriter
                        .typeString("GeeksForGeeks")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("Welcomes You")
                        .start();
                }}
            />
        </div>
    );
}
 
export default Typewriter;