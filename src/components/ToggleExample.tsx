import { useToggle } from "../hooks/useToggle";
import React from "react";
const ToggleExample = () => {
    const { value: isVisible, toggle } = useToggle();
    return (
        <> 
            <div>
               {isVisible ? (<h1>Hello, This is The Hidden Message</h1> ): null}
            </div>
            <div>
                <button onClick={toggle}>
                    {isVisible ? 'Hide' : 'Show'} Message
                </button>
            </div>
            
        </>
    );
}
export default ToggleExample;