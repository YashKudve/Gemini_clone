import { useContext } from "react";

export const Context = useContext();

const ContextProvider = (props) =>{


    const contextValue = {

    }

    return(
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider;