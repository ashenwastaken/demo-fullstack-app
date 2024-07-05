import './App.css';
import React, { useState } from 'react';

export default function App() {
  const [data, setData] = useState(null);

  async function apiCall() {
    try {
      const res = await fetch('https://dummy.restapiexample.com/api/v1/employees');
      const data = await res.json();
      setData(data);
    } catch (error) {
      console.log("error", error);
    }
  }

  async function postApiCall() {
    try {
      await fetch('https://dummy.restapiexample.com/api/v1/create', {
        method: 'POST',
        body: JSON.stringify({
          name: 'test',
          salary: '123',
          age: '23'
        }),
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        }
      });
    } catch (error) {
      console.log("error", error);
    }
  }

  return (
    <div>
      <h1>API Call</h1>
      <button onClick={apiCall}>Click to call API</button>
      <br />
      <button onClick={postApiCall}>Click to post API</button>
      {data && data.data && (
        <>
          <h2>{data.data[0].employee_name}</h2>
          <h3>{data.data[0].employee_salary}</h3>
          <br />
          {data.data[1] && (
            <>
              <h2>{data.data[1].employee_name}</h2>
              <h3>{data.data[1].employee_salary}</h3>
            </>
          )}
        </>
      )}
    </div>
  );
}
