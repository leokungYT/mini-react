import { useContext } from "react";
import TodoContext from "../context/todomain"; 

function useTodoContext() {
  return useContext(TodoContext);
}

export default useTodoContext;
