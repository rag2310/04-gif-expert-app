import React, {useState} from 'react';
import {AddCartegory} from './components/AddCartegory';
import {GifGrid} from './components/GifGrid';

const GifExpertApp = ({defaultCategories = []}) => {

    // const [categories, setCategories] = useState(['One Punch']);
    const [categories, setCategories] = useState(defaultCategories);

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCartegory setCategories={setCategories}/>
            <hr/>

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