import React from 'react'
import Card from './card'
import source from './source';
import TierCalculation from './tierCalculation';

export class CardList extends React.Component {
    state = {
        data: [],
        isQueryFinished: false,
        idoList: []
    };

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.fetchIdoList();
    }

    fetchIdoList() {
        source.get("/ido").then((response) => {
            this.setState({
                ...this.state,
                idoList: response.data.map(ido => {
                    return {
                        ...ido,
                        projectName: ido.idoName,
                        average: 0
                    }
                })
            });
        });
    }

    onWalletSearch(walletAddress) {
        source.get("/record/" + walletAddress).then((response) => {
            this.setState({
                ...this.state,
                data: response.data, 
                isQueryFinished: true 
            });
        });

    }

    render() {
        return (
            <div className="result">     
                { this.state.isQueryFinished ? <Card data={this.state.data}/> : '' }

                <div className="container tier-calculator">
                { this.state.isQueryFinished && this.state.data.map((item, index) => (
                    <TierCalculation key={item._id} wallet={item} index={index}/>
                ))}
                </div>
    
                { this.state.data.length === 0 && this.state.isQueryFinished ? 
                <div>
                    <p className="mt-4">You didn't get a snapshot yet, please wait for the next snapshot if you already bought $TAPE.</p> 
                </div>
                : ''}
    
                { this.state.data.length === 0 && !this.state.isQueryFinished && this.state.idoList.length > 0 ?
                <div>
                    <p className="mt-5 mb-4">Don't have $TAPE yet? We have a new IDO:</p>

                    <div className="container tier-calculator">
                    {this.state.idoList.map((item, index) => (
                        <TierCalculation key={item._id} wallet={item} index={index}/>
                    ))}
                    </div>
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
}

export default CardList;

