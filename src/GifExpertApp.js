import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


export const GifExpertApp = () => {

    //const categories = ['test', 'juan', 'diego']

    const [categories, setCategories] = useState(['test']);

    return (<>
        <div>GifExpertApp</div>
        <AddCategory setCategories={setCategories}  />
        <hr />

        <ol>
            {categories.map((category, index) =>
                <GifGrid key={category} category={category} />
            )
            }
        </ol>
    </>

    )
}
