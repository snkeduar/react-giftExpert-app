import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [ categories, setCategories ] = useState(['GOKU']);
    
    const onAddCategory = (newCategory) => {
        if( categories.includes(newCategory)) return;
        console.log(newCategory);
        setCategories([newCategory, ...categories]);
        // setCategories([...categories, 'Hola Mundo'])
    }

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory 
            // setCategories={ setCategories }
            onNewCategory = { event => onAddCategory(event) }
            />
            
            { 
                categories.map( (category) => (
                    <GifGrid key={ category }
                    category={ category }
                    />
                    ))
            }
        </>
    )
}