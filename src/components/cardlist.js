import React from 'react'
import Card from './card'

function CardList({results}) {
    let data= [];
    if (results.data) {
        console.log(results.data);
        data = results.data || [];
    }
    console.log(data)
    return (
        <div className="result">
            {data.map((item)=>(
            <Card key={item.wallet} wallet = {item}/>
            ))}  
        </div>
    )
}

export default CardList;

