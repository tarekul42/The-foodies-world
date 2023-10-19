import React, { createContext, useEffect, useState } from 'react';

export const ChefContext = createContext(null);
const ChefProvider = ({children}) => {
    const [chef, setChef] = useState([]);
  
    useEffect(() => {
      async function fetchData() {
        try {
          const response = await fetch('http://localhost:5000/chefs');
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          setChef(data);
        } catch (error) {
          console.error('Error fetching chef data:', error);
        }
      }
    
      fetchData();
    }, []);

    return (
        <ChefContext.Provider value={chef}>
            {children}
        </ChefContext.Provider>
    );
};

export default ChefProvider;