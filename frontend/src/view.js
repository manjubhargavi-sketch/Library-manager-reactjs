import React,{useState,useEffect} from 'react';
import axios from 'axios';
import "./App.css";

function App1(){
    const [data,setData]=useState([]);
    useEffect(()=>{
        fetchData();

    },[]);
    const fetchData=async()=>{
        try{
            const response=await axios.get('http://localhost:8000/get');
            setData(response.data);
        }
        catch(error){
            console.error('Error',error);
        }

    };
    return (
        <div>
            <h1 id= "h1">Database Contents</h1>
            {data.map(item=>(
                <div key={item.id}>
                    
                    <p>Bookname: {item.bookname}</p>
                    <p>Author name:{item.authorname}</p>
                    <p>Genre: {item.genre}</p>
                    <hr />
                    </div>
            ))}
        </div>
    )
}
export default App1;