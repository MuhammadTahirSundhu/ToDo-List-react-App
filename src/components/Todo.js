import React, { useContext } from "react";
import MainTitle from "./MainTitle";
import Footer from "./Footer";
import UseFetchTodos from "./UseFetchTodos";
import { themeContext } from "..";
import { deleteToDoContext } from "..";

export default function Todo(props) {
  const [deleteFlag,setdeleteFlag] = useContext(deleteToDoContext);
  const [Theme,setTheme] = useContext(themeContext);
  const textColor = Theme === 'dark' ? 'white' : 'black'; 
  const bgColor =  Theme === 'dark' ? 'grey' : '#9ebeee'; 
  
  let [OurToDos,setOurTodos] = UseFetchTodos();
  console.log(OurToDos);

  if ( OurToDos.length <= 0) {
    return null;
  }

  if(deleteFlag)
    {
      function deleteTodo(title){
        setTimeout(() => {
          let newArr = OurToDos.filter(todo=> todo.title !== title);
          props.setallToDo(newArr);
          setOurTodos(newArr);
          localStorage.setItem("allToDo", JSON.stringify(newArr));
        }, 0);
      }
      return (
        <>
        <div style={{color:textColor}}>
          <MainTitle title="My ToDo's" />
        </div>
          <div >
            <div className="container my-5" >
              <div className="row row-cols-1 row-cols-md-3 g-4" >
                {OurToDos.map((todo, index) => (  // Map always want a return in each iteration which makes sure by the arow function "() implicit" and "{} explicit".
                  <div className="col" key={index}>
                    <div className="card h-100">
                      <div className="card-body" style={{backgroundColor:bgColor , color:textColor}}>
                        <h5 className="card-title">{todo.title}</h5>
                        <p className="card-text">{todo.description}</p>
                      </div>
                      <div className="card-footer" style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                        <small className="text-muted">
                          #{index+1}
                        </small>
                      <button className="btn btn-danger" onClick={()=>{deleteTodo(todo.title)}}>Delete</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <Footer Theme={Theme} />
        </>
      );
    }
    else{      
        return (
          <>
          <div style={{color:textColor}}>
            <MainTitle title="My ToDo's" />
          </div>
            <div >
              <div className="container my-5" >
                <div className="row row-cols-1 row-cols-md-3 g-4" >
                  {OurToDos.map((todo, index) => (  // Map always want a return in each iteration which makes sure by the arow function "() implicit" and "{} explicit".
                    <div className="col" key={index}>
                      <div className="card h-100">
                        <div className="card-body" style={{backgroundColor:bgColor , color:textColor}}>
                          <h5 className="card-title">{todo.title}</h5>
                          <p className="card-text">{todo.description}</p>
                        </div>
                        <div className="card-footer">
                          <small className="text-muted">
                            #{index+1}
                          </small>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <Footer Theme={Theme} />
          </>
        );
    }
}
