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
                <div class="container table-responsive mt-5">
                <div class="row">
                <div class="col-md-6 offset-md-3">
                <div id="before" class="loader--1">
                </div>
                <div id ="after">
                <table class="table table-borderless col-md-5">
                    <thead>
                        <tr>
                        <th scope="col">Tier</th>
                        <th scope="col">Average</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>{wallet.tier}</td>
                        <td>{wallet.average}</td>
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
