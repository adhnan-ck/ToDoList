import {useState} from 'react'
import './App.css'

function App() {
  const [toDo,setToDo]=useState('')
  const [toDos,setToDos]=useState([])

  const days = ["Sunday 😍🥳","Monday 😢","Tuesday 😮‍💨","Wednesday 🥱","Thursday 😑","Friday 🙂","Saturday 😃"];
  const d = new Date();
  let day = days[d.getDay()];

  const deleteTask = (index)=>{
    var ask = window.confirm("Do you want to delete?")
    if(ask){
      const test = [...toDos]
      test.splice(index,1)
      setToDos(test)

    }else{
      console.log('DONT DELETE');
    }
  }

  const [showAbt,setShowAbt] = useState(false)
  const onClick = () => setShowAbt(!showAbt);


  

  
  return (
    <div className="app">
    <div className="mainHeading">
      <h1>ToDo List ✔</h1>
    </div>
    <div className="subHeading">
      <br />
      <h2> Yooo , It's {day} </h2>
    </div>
    <div className="input">
      <input value={toDo} onChange={(e)=>setToDo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
      <i onClick={()=>setToDos([...toDos,{id:Date.now(),text:toDo,status:false}])} className="fas fa-plus"></i>
    </div>
    
    <div className="todos">
      <h2>Todays Tasks 🥴⏳</h2>
      { toDos.map((obj,index)=>{
  return(     <div className="todo">
        <div className="left">
          <input onChange={(e)=>{
            console.log(e.target.checked)
            console.log(obj);
            setToDos(toDos.filter(obj2=>{
              if(obj2.id===obj.id){
                obj2.status=e.target.checked
              }
              return obj2
            }))

          }} value={obj.status
          } type="checkbox" name="" id="" />
          <p>{obj.text}</p>
        </div>
        <div className="right">
          <i className="fas fa-times" onClick={()=>deleteTask(index)}></i>
        </div>
      </div>)
    })
}
 <div className='tdone'>
   <h2>Tasks Done ⌛✅</h2>
 {toDos.map((obj)=>{
   if(obj.status){
     return(<p>{obj.text}</p>)
   }
   return null
 })}
 </div>

 <div className='showAbout'>
   <button onClick={onClick}>ABOUT</button>
 </div>
 <div className='showAbtdetail'>{showAbt ? <p>Made by Adhnan ck✌️ <br/>
     -Get things done! 
   <br />-Dont refresh😅🏃<br />
        </p> : null}</div> 
    </div> 

   
    
  </div>
    
  );
}


export default App;