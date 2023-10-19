import React, { useContext } from 'react';
import { ChefContext } from '../../../../Providers/ChefProvider';

const Recipes = () => {
    const chefs = useContext(ChefContext);
    // console.log(chefs);
    return (
        <div>
            this is recipes page
        </div>
    );
};

export default Recipes;