import { useState } from "react";
import { AppProduct } from "./components/AppProduct/AppProduct";
import { ComponentCounter } from "./components/ComponentCounter/ComponentCounter";
import { ComponentUseEffect } from "./components/ComponentUseEffect/ComponentUseEffect";
import FormComponent from "./components/FormComponent/FormComponent";
import MyFirstComponent from "./components/MyFirstComponent/MyFirstComponent";

export const App = () => {

    const [enableCounter,setEnableCounter] = useState<boolean>(false);
    return (
        <div className="App" style={ {display: 'flex', flexDirection: 'column' }}>
            <MyFirstComponent  text={"Texto loco" } backgroundColor={"blue"} fontSize={4} />
            {
                enableCounter &&  <ComponentCounter/>
            }
            <button onClick={ ()=> {setEnableCounter(!enableCounter) }}>Mostrar contador</button>
            <h3>Componente use effect</h3>
            <ComponentUseEffect/>
            <h4>Form</h4>
            <FormComponent/>
            <AppProduct/>
        </div>

    )
}
