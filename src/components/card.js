import React from 'react'


export default function Card(props) {
    let data1 = {};
    const {wallet} =props;
    data1 = wallet;

    setTimeout(function(){
        document.getElementById('after').style.visibility = "visible";
        },2000);
    setTimeout(function(){
        document.getElementById('before').style.visibility = "hidden";
        },2000);

    console.log(data1);
    
        return (
            <div className = "resultCard">
                <div className="container table-responsive mt-4 mb-5">
                <div className="row">
                <div className="col-md-6 offset-md-3 ">
                <div id="before" className="loader--1">
                </div>
                <div id ="after">
                <table className="table  table-border col-md-5">
                    <thead>
                        <tr>
                        <th scope="col">Tier</th>
                        <th scope="col">Average</th>
                        <th scope="col">Last Snapshot (UTC)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>{wallet.tier}</td>
                        <td>{wallet.average}</td>
                        <td>{wallet.timestamp}</td>
                        </tr>
                    </tbody>
                    </table>
                    
                    </div>
                    </div>
                    </div>
                    </div>
    
            </div>
        )

    

    
}
