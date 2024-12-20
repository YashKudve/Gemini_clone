import { createContext, useContext, useState } from "react";
import run from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) =>{

    const [input, setInput] = useState("");
    const [recentPrompt, setRecentPrompt] = useState("");
    const [prevPrompts, setPrevPrompts] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);
    const [resultData, setResultData] = useState("");

    const delayPara = (index, nextWord) =>{
        setTimeout(function(){
            setResultData(prev=>prev+nextWord)
        }, 75*index)
    }

    const newChat = () =>{
        setLoading(false)
        setShowResult(false)
    }

    const onSent = async(prompt) =>{

        setResultData("")
        setLoading(true)
        setShowResult(true)

        // setRecentPrompt(input)
        // setPrevPrompts(prev=>[...prev,input])

        // const response = await run(input)

        let response;
        if(prompt !== undefined){
            response = await run(prompt)
            setRecentPrompt(prompt)
        }
        else{
            setPrevPrompts(prev=>[...prev,input])
            setRecentPrompt(input)
            response = await run(input)
        }

        let responseArray = response.split("**")
        let newResponse = "";
        for(let i=0; i<responseArray.length; i++){
            if(i===0 || i%2 !== 1){
                newResponse += responseArray[i];
            }
            else{
                newResponse += "<b>"+ responseArray[i] + "</b>"
            }
        }
        let newResponse2 = newResponse.split("*").join("<br />");
        let newResposnseArray = newResponse2.split(" ");
        for(let i=0; i<newResposnseArray.length; i++){
            const nextWord = newResposnseArray[i];

            delayPara(i,nextWord+" ")
        }

        setResultData(newResponse2)
        setLoading(false)
        setInput("")
    }

    // const onSent = async (prompt) => {
    //     try {
    //         const response = await run(input);
    //         // console.log('Response from run:', response);
    //         // console.log(prompt);
            
    //     } catch (error) {
    //         console.error('Error in onSent:', error);
    //     }
    // };


    const contextValue = {
        prevPrompts,
        setPrevPrompts,
        onSent,
        setRecentPrompt,
        recentPrompt,
        showResult,
        loading,
        resultData,
        input,
        setInput,
        newChat
    }

    return(
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider;