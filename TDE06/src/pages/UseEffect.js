import { useEffect, useState } from "react";

const UseEffect = () => {
    const [myState, setMyState] = useState();

    //Atualização do componente
    useEffect(() => {
        console.log("useEffect executado na montagem do e atualização do componente");
    }, [myState]);


    //Montagem do componente
    useEffect(() => {
        console.log("UseEffect executado na montagem do componente")
    }, [])


    //Desmontagem do componente
    useEffect(() => {
        return () => {
            console.log("Função executada na desmontagem do componente")
        }
    }, [])

    const updateMyState = () => {
        setMyState("meu novo myState");
    }

    return (<div>
        <button onClick={updateMyState}>disparar useEffect</button>
    </div>
    );
};

export default UseEffect;