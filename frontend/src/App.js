
import './App.css';
import {createRoot} from 'react-dom/client';
import App1 from './view.js'
import Add from './adding1.js';
import React from 'react';
import About from './About.js';

import {
 
 UncontrolledDropdown,
  DropdownToggle, DropdownMenu, DropdownItem
} from 'reactstrap';
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
function handleclick(){
  root.render(
 <router>
  <Add></Add>
 </router>
  )
}
function handle(){
  root.render(
 <router>
  <App1></App1>
 </router>
  )
}
function han(){
  root.render(
    <router>
     <About></About>
    </router>
     )
}
function App() {
  
 

  return (
    
    
    <div className="App">
     
     <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" 
integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" 
crossorigin="anonymous"></script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js" 
integrity="sha384-cs/chFZiN24E4KMATLdqdvsezGxaGsi4hLGOzlXwp5UZB1LY//20VyM2taTB4QvJ" 
crossorigin="anonymous"></script>

<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js" 
integrity="sha384-uefMccjFJAIv6A+rW+L4AHf99KvxDjWSu1z9VI8SKNVmz4sk7buKt/6v9KI65qnm" 
crossorigin="anonymous"></script>

      <h1>Welcome to Library manager</h1>
       <div className='csvbox' id="csv">
    
       <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" onClick={han}>About</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      
      <li className="d-flex align-items-center" nav inNavbar>
                <UncontrolledDropdown>
                <DropdownToggle className="font-weight-bold" nav caret>Functions</DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem className="font-weight-bold text-secondary text-uppercase" header disabled>Learn React</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem><button onClick={handleclick} >Add books</button></DropdownItem>
                  <DropdownItem ><button onClick={handle}>View books</button></DropdownItem>
                 
                </DropdownMenu>
                </UncontrolledDropdown>
              </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
   
  </div>
</nav>
       </div>
    </div>
  );
}

export default App;
