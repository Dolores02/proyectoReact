import {useState} from "react";
import { Header } from "./Header/Header";
import { FormProduct } from "./FormProduct/FormProduct";
import { ListProducts } from "./ListProduct/ListProduct";


interface ItemProduct{
    price: number;
    image: string;
    name: string;

}

export const AppProduct = () => {

    const[products,setProducts] = useState<ItemProduct[]>([]);
        console.log(products);
    const handleAddProduct = (newItem: ItemProduct) => {
        setProducts((prev) => [...prev, newItem]);
    }
    return (
        <div>
            <Header/>
            <FormProduct handleAddProduct={handleAddProduct}/>
            <h2 className="text-center">Formulario</h2>
            {
                products.length > 0 ? <ListProducts arrayItems={products}/> : <h3>No hay productos</h3>

            }
        </div>
    )
}