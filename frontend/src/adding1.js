import React,{useState} from 'react';
import './App.css'
function Add(){
   
const[data,setFormdata]=useState({id:'',bookname:'',authorname:'',genre:''});



function handleinput(event){
  setFormdata(prevdefault=>({
    ...prevdefault,
    [event.target.name]:event.target.value
  }));
}
function handlesubmit(event){
  event.preventDefault();
  const {id,bookname,authorname,genre}=data;
  fetch('http://localhost:8000/submit',{
    method:'POST',
    headers:{
        'Content-Type':'application/json',
    },
    body:JSON.stringify({id,bookname,authorname,genre}),

  })
  .then(response=>response.json())
  .then(data=>{
    console.log('Entry created:',data);
  })
  .catch(error=>{
    console.error('Error creating entry:',error);
  })
}

 
  
   

    return(
      <body>
        <div>
            <h1 id="h1">
                ADD BOOKS
            </h1>
            <h4 align="left"> Enter the book details</h4> 

            <form onSubmit={handlesubmit}>
              <label>Id</label>
              <input type="text" id="id" name="id" value={data.id} onChange={handleinput}></input><br></br>
             <label>Book Name</label>
             <input type="text" id="bookname" name="bookname" value={data.bookname} onChange={handleinput}></input><br></br>
             <label> Author Name</label>
             <input type="text" id="authorname" name="authorname" value={data.authorname} onChange={handleinput}></input><br></br>
             <label>Genre</label>
             <input type="text" id="genre" name="genre" value={data.genre} onChange={handleinput}></input><br></br>
            
             <button type="submit">Submit</button>
           </form>   
                </div>
                </body>
    )
}
export default Add;