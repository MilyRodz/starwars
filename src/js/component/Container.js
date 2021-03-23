import React, { useState, useEeffect } from 'react';

const Container = () => {

    const [people, setPeople] = useState([]);
    const [planets, setPlanets] = useState([]); 
    
    const getPeople = async () => {
      const settings = {
          method: "GET",
          headers: {
              "Content-Type": "application/json"
          }
      }; 
      const response = await fetch('https://www.swapi.tech/api/people');
  };  
  useEffect (() => { 
      getPeople();
  }, []);


    return (         
        <div>
        Hello
        </div>
     );
};
 
export default Container;