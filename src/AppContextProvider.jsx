import React from "react";
import { useState,useEffect } from "react";


const AppContext = React.createContext(undefined);

function AppContextProvider({children}){
    const initialTodos = [
        { description: 'Finish lecture', isComplete: true },
        { description: 'Do homework', isComplete: false },
        { description: 'Sleep', isComplete: true }
    ];

    const [todos,setTodos] = useState(initialTodos);


    const handleTodoStatusChanged = (index, isComplete) => {
    
      const updatedTodos = todos.map((todo, i) =>
        i === index ? { ...todo, isComplete } : todo
      );

      setTodos(updatedTodos);
    };

    const addTodo = (text) => {
      const newTodo = {
        description: text,
        isComplete: false,
      };
      setTodos([...todos, newTodo]); // Add the new to-do to the list
    };

    const deleteTodo = (index) => {
      setTodos(todos.filter((_, i) => i !== index));
    };

    function useLocalStorage(key, initialValue = null){
      const [value,setValue] = useState(()=>{
        try{
          const data = window.localStorage.getItem(key);
          return data?JSON.parse(data):initialValue;
        }catch{
          return initialValue;
        }
      });

      useEffect(()=>{
        window.localStorage.setItem(key,JSON.stringify(value));
      },[value,setValue])

      return [value,setValue];
    }

    const context = {
        todos,setTodos,useLocalStorage,handleTodoStatusChanged,deleteTodo
    }

    return (
        <AppContext.Provider value={context}>
            {children}
        </AppContext.Provider>
    )
}

export{
    AppContext, AppContextProvider
};