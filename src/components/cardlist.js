import React from 'react'
import Card from './card'
import TierCalculation from './tierCalculation';

function CardList({results, isQueryFinished}) {
    let data = [];

    if (results.data) {
        console.log(results.data);
        data = results.data || [];
    }

    const defaultWallet = {
        average: 0,
        startDate: '03-08-2021',
        endDate: '30-08-2021',
        projectName: 'Duel Network'
    };

    return (
        <div className="result">
            {isQueryFinished && data.map((item) => (
                <div>
                    <Card key={item.wallet + 'card'} wallet = {item}/>
                    <TierCalculation key={item.wallet + 'tierCalc'} wallet={item}/>
                </div>)
            )}

            {data.length === 0 && isQueryFinished ? 
            <div>
                <p className="mt-4">You didn't get a snapshot yet, please wait for the next snapshot if you already bought $TAPE.</p> 
            </div>
            : ''}

            { data.length === 0 ?
            <div>
                <p className="mt-5 mb-4">Don't have $TAPE yet? We have a new IDO:</p>
                <TierCalculation wallet={defaultWallet}/>
            </div> 
            : ''}

            <div>
                <h6 className="mt-5">Equivalent LP values for $TAPE:</h6>
                <ul>
                    <li className="mt-3">1 $TAPE-$BNB LP = 160 $TAPE</li>
                    <li className="mt-2">1 $HEPA-$TAPE LP = 3,33 $TAPE</li>
                    <li className="mt-2">1 $TAPE-$MATIC LP = 16 $TAPE</li>
                </ul>
            </div>
        </div>
    )
}

export default CardList;

