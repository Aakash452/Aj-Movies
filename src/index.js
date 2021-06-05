import React from 'react';
import ReactDOM from 'react-dom';
import Card from './app';
import './index.css';
import sdata from './sdata';
function cvalue(val){
    return  (
    <div className="cards">
    <Card 
    imgsrc={val.imgsrc}
    link={val.link}
    name={val.name}
    stream={val.stream}
    /></div>);
}


ReactDOM.render(<>


     <nav id="navbar">

         <h1 id="head">AJmovies</h1>
         <span><a href="/">Top Movies</a></span>
         <span><a href="/">Sci-fi</a></span>
         <span><a href="/">Superhero</a></span>
         <span><a href="/">Suspencive</a></span>
         <span><a href="/">All Movies</a></span>
     </nav>
 
 <hr/>
<div className="mainpage" >
   
   {sdata.map(cvalue)}
     
     
</div>
</>


,document.getElementById('root'));


