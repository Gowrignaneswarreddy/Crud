import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Update = () => {
  let [values, setValue] = useState({ name: '', email: '' });
  let navigate = useNavigate();
  let { id } = useParams();

  useEffect(() => {
  
    axios.get(`http://localhost:3000/user/` +{id})
      .then(res => setValue(res.data))
      .catch(err => console.error('Error fetching data:', err)); 
  }, [id]);

  let change = (e) => {
    setValue({ ...values, [e.target.name]: e.target.value });
  };

  function update(e) {
    e.preventDefault();

    axios.put(`http://localhost:3000/user/`+{id}, values)
      .then(() => navigate('/'))
      .catch(err => console.error('Error updating data:', err)); 
  }

  return (
    <div>
      <h1>Edit user</h1>
      <form>
        <input
          type="text"
          placeholder="username"
          name="name"
          value={values.name}
          onChange={change}
        />
        <br />
        <input
          type="email"
          placeholder="email address"
          name="email"
          value={values.email}
          onChange={change}
        />
        <br />
        <button onClick={update}>Change User</button>
      </form>
    </div>
  );
};

export default Update;
