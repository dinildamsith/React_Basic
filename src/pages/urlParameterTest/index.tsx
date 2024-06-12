import { useParams } from "react-router-dom";
import NaveBar from "../../components/nav";
import { useState } from "react";


function UrlParameterTestPage(){

    const { parm } = useParams();
    
    const [parmValue , setValue] = useState(parm);

    function  setVal(){
        setValue(parm)
    }

    return(
        <>
            <NaveBar/>

            <div className="flex flex-col items-center justify-center h-screen text-center">
                <h1 className="text-2xl font-bold">{parmValue}</h1>
                <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700" onClick={setVal}>
                    Click
                </button>
            </div>

        </>
    )
}

export default UrlParameterTestPage;