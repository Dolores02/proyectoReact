import { useForm } from "../../hooks/useForm";



export const formComponents = () => {
 

    const {values, handleChange, resetForm} = useForm({
        email:'', name:'', age: 0
    });

    const {email, name, age} = values;

    const handleSubmitForm = () => {
        console.log(values);
    }

    const handleResetForm = () => {
        resetForm();
    }

    return(
        <div>
            <div>
                <h2>Formualario</h2>
            </div>
            <div style={ { display: "flex", flexDirection: "column" , gap:"2vh"} }>
                <input value={email} name="email" onChange={(handleChange)} type="email" placeholder="example@"/>
                <input value={name} name="name" onChange={(handleChange)} type="text" placeholder="Name" />
                <input value={age} name="age"  onChange={(handleChange)} type="number" placeholder="Age" />
            </div>
            <div>
                <button onClick={handleSubmitForm}>Send form</button>
                <button onClick={handleResetForm}>Reset form</button>
            </div>
        </div>
    )
}

export default formComponents;