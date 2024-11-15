import { createContext, useContext } from "react";
import run from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) =>{

    // const onSent = async(prompt) =>{
    //     await run(prompt)
    // }

    const onSent = async (prompt) => {
        try {
            const response = await run(prompt);
            console.log('Response from run:', response);
            // Process response as needed
        } catch (error) {
            console.error('Error in onSent:', error);
        }
    };

    onSent("What is React JS")

    const contextValue = {
        someData: 'Hello, world!'
    }

    return(
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider;