import React, { useContext } from 'react';
import { ChefContext } from '../../../../Providers/ChefProvider';

const Chefs = () => {
    const chefs = useContext(ChefContext);
    // console.log(chefs);
    return (
        <div>
            this is chefs page
        </div>
    );
};

export default Chefs;