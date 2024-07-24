import React, { useEffect, useState } from 'react'

export default function UseFetchTodos() {

  const [OurTodos, setOurTodos] = useState([]);

  useEffect(() => {
    let storedData = localStorage.getItem("allToDo");
    if (storedData) {
      setOurTodos(JSON.parse(storedData));
    }
  }, []);

  return [OurTodos,setOurTodos];
}
