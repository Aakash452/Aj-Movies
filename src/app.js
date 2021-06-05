import React from 'react';

function Card(prop){
    console.log('Running Successfully!');
    return (<div className="Cards">
    <div className="card1">
        <div className="image">
            <img src={prop.imgsrc} alt="MyImage"/>
            <div className="ankertag">A {prop.stream} Original</div>
            <h1 className="ankertag">{prop.name}</h1>
        </div>
        <a className="ankertag" href={prop.link} target="_"><button className="btn">Watch Now</button></a>
    </div>
</div>);
}
export default Card;