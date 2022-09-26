import Welcome from "./components/Welcome"
import React, { useEffect, useState } from "react";
import Users from "./components/User";


export default function App() {
    const [backendData, setBackendData] = useState([{}])

    useEffect(() => {
      fetch("/api").then(
        response => response.json()
      ).then(
        data => {
          setBackendData(data)
        }
      )
    }, [])

    return (
      <>
      <div>
        {(typeof backendData.users === 'undefined') ? (
          <p>loading...</p>
        ): (
          backendData.users.map((user, i) => (
            <p key={i}>{user}</p>
          ))
        )}
      </div>
      {/* <Users /> */}
        {/* <Welcome /> */}
      </>
    );
  }