import {FC} from "react";

interface IPropsFirstComponent {
    text: string;
    backgroundColor: string;
    fontSize?: number;
}

export const MyFirstComponent: FC<IPropsFirstComponent> = ({text,fontSize,backgroundColor}) =>{
    return (
        <div style={ {color: `${backgroundColor}`, fontSize: `${fontSize}` }}>
            <p></p>{text }

        </div>
    );
};

export default MyFirstComponent;