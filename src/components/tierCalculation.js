import React, { useState, useEffect } from 'react';
import moment from 'moment';
import Moment from 'react-moment';

const Tiers = {
    KING_KONG: 160000,
    GORILLA: 80000,
    CHIMP: 40000,
    APE: 20000,
    BABOON: 10000
}

export default function TierCalculation(props) {

    const { wallet } = props;

    const parseDate = (dateString) => {
        const dateParts = dateString.split('-');
        return new Date(dateParts[2], parseInt(dateParts[1]) - 1, dateParts[0]);
    }

    const now = moment();    
    const startDate = moment(parseDate(wallet.startDate), 'YYYY-MM-DD');
    const endDate = moment(parseDate(wallet.endDate), 'YYYY-MM-DD');
    const projectName = wallet.projectName;
    const isIdoDay = endDate.diff(now, 'hours') === 0;

    const [state, setState] = useState({
        requiredTape: 0
    });
    
    const handleDropdown = (e) => {
        var targetTierValue = e.target.value;
        calculateTargetTier(targetTierValue);
    }

    const calculateTargetTier = (targetValue) => {
        const additionalDays = wallet.average > targetValue ? 0 : 1; // Do not count today for upper tiers
        const totalDays = endDate.diff(startDate, 'days') + additionalDays;
        const remainingDays = endDate.diff(now, 'days') + additionalDays;
        const passedDays = now.diff(startDate, 'days') + additionalDays;
        const requiredTape = Math.round((targetValue * totalDays - wallet.average * passedDays) / remainingDays);

        setState(prevState => {
            return {
                ...prevState,
                requiredTape: requiredTape >= wallet.average && wallet.average >= targetValue ? targetValue : requiredTape
            };
        });
    }

    useEffect(() => {
        calculateTargetTier(Tiers.KING_KONG);
    }, []);
    
    return (
        <div className="tier-calculcation">
            <div className="card">
                <div className="card-body p-4">
                    <h5 className="card-title">
                        {projectName}: 
                    </h5>
                    <h6 className="card-subtitle mb-3 text-muted">
                        <Moment format={'DD MMMM'}>{startDate}</Moment> - <Moment format={'DD MMMM'}>{endDate}</Moment>
                    </h6>

                    {isIdoDay ? 
                    <div>Today is the IDO day, you can <a href="https://ido.apetools.co">visit our ido platform</a>.</div>
                    :
                    <div>
                        <div className="card-text">             
                            { state.requiredTape > 0 ?
                            <p>
                                <span>You need to</span>
                                { state.requiredTape > wallet.average ? 
                                <a href="https://app.apeswap.finance/swap?outputCurrency=0xf63400ee0420ce5b1ebdee0c942d7de1c734a41f" target="_blank">
                                &nbsp;<i className="bi bi-cart4"></i> have {state.requiredTape} $TAPE now&nbsp;
                                </a> 
                                :
                                <span>&nbsp;hold {state.requiredTape} $TAPE&nbsp;</span>
                                }
                                to become this tier until IDO:
                            </p>
                            : 
                            <p>
                                You don't need $TAPE for this tier anymore:
                            </p>
                            }
                        </div>
                        <div className="mb-2">
                            <select id="desiredTier" className="form-select" aria-label="Target Tier:" onChange={handleDropdown}>
                                <option defaultValue value="160000">King Kong (160,000 $TAPE in average)</option>
                                <option value="80000">Gorilla (80,000 $TAPE in average)</option>
                                <option value="40000">Chimp (40,000 $TAPE in average)</option>
                                <option value="20000">Ape (20,000 $TAPE in average)</option>
                                <option value="10000">Baboon (10,000 $TAPE in average)</option>
                            </select>
                        </div>
                    </div>
                    }
                </div>
            </div>
        </div>
    );
}
