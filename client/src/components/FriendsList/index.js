import React, { useState } from 'react';
import { useMutation } from "@apollo/client";
import  { ADD_BRO } from "../../utils/mutations";
import { useQuery } from "@apollo/client";

import { QUERY_USER, QUERY_ME } from "../../utils/queries";

const FriendsList = () =>  {
const [friendName, setfriendName] = useState("")

// mutation
const [addBro, { error }] = useMutation(ADD_BRO,{
  update(cache, { data: { addBro } }) {
    try {
      const { bros } = cache.readQuery({ query: QUERY_ME });

      cache.writeQuery({
        query: QUERY_ME,
        data: { bros: [addBro, ...bros] },
      });
    } catch (e) {
      console.error(e);
    }

    // update me object's cache
    const { me } = cache.readQuery({ query: QUERY_ME });
    cache.writeQuery({
      query: QUERY_ME,
      data: { me: { ...me, bros: [...me.bros, addBro] } },
    });
  },
});

const handleFormSubmit = async (event) => {
  event.preventDefault();
  
  try {
    const { data } = await addBro({
      variables: { name: friendName },
    });

    setfriendName("");
  } catch (err) {
    console.error(err);
  }
  
}

const handleChange = (event) => {
  const { name, value } = event.target;

  if (name === "name") {
    setfriendName(value);
  }
};
        return (
            <div className="friendSearch">
                <div className="mainDiv">
                <div >
        <div className="mainDiv">

        <form onSubmit={handleFormSubmit}>
            <h3>Search for a Friend!</h3>
            <div className="searchBar">
              <label>Friend's Name:</label>
              <input
                type="text"
                
                name="name"
                className="form-control"
                onChange={handleChange}

              />
            </div>

          
            
            <button className="friendSubmit " type="submit">
              Save Friend
            </button>
          </form>
        </div>
    </div>
                </div>
            </div>
        );
    
}

export default FriendsList;