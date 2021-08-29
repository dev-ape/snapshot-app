import React from 'react'


export default function Card(props) {
    const { data } = props;

    setTimeout(function(){
        document.getElementById('after').style.visibility = "visible";
        },2000);
    setTimeout(function(){
        document.getElementById('before').style.visibility = "hidden";
        },2000);
    
        return (
            <div className = "resultCard">
                <div className="container table-responsive mt-4 mb-5">
                <div className="row">
                <div className="col-md-6 offset-md-3 ">
                <div id={'before'} className="loader--1">
                </div>
                <div id={'after'}>
                <table className="table  table-border col-md-5">
                    <thead>
                        <tr>
                        <th scope="col">Project</th>
                        <th scope="col">Tier</th>
                        <th scope="col">Average</th>
                        <th scope="col">Last Snapshot (UTC)</th>
                        </tr>
                    </thead>
                    <tbody>
                        { data.map((item) => (
                            <tr key={item._id}>
                                <td>{item.projectName}</td>
                                <td>{item.tier}</td>
                                <td>{item.average}</td>
                                <td>{item.timestamp}</td>
                            </tr>    
                        ))}                        
                    </tbody>
                    </table>
                    
                    </div>
                    </div>
                    </div>
                    </div>
    
            </div>
        )

    

    
}
