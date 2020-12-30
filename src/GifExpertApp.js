import React, { useState } from 'react';
import { AddCartegory } from './components/AddCartegory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCartegory setCategories={setCategories} />
            <hr />

            <ol>
                {
                    categories.map(category => {
                        return (

                            <GifGrid
                                key={category}
                                category={category}
                            />
                        );
                    })
                }
            </ol>
        </>
    );
}


export default GifExpertApp;