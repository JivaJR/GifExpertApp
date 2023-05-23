import { useState } from "react"
import { AddCategory,GifGrid } from "./componets"

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One punch'])
    
    const onAddCategory = (newCategory) => {

        if(categories.includes(newCategory)) return;
        // setCategories(cat => [...cat,'Valorant'])
        setCategories([newCategory,...categories])
    }

    return (
        <>

            <AddCategory 
                //setCategories={ setCategories }
                onNewCategory={ event => onAddCategory(event)}
            />

            {
                categories.map( (category) => (
                    <GifGrid 
                        key={category}
                        category={category}
                    />
                ))
            }
                
        </>
    
    )
}
