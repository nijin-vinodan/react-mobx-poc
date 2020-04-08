import React, { FunctionComponent, useEffect } from 'react';
import { DeltaComponent, AlphaComponent, BetaComponent, GammaComponent } from './../components';

interface DashboardProps { }

const Dashboard: FunctionComponent<DashboardProps> = props => {
    useEffect(() => {
        console.log("Dashboard: useEffect");
    }, []);

    return (
        <div className="wrapper">
            <AlphaComponent />
            <BetaComponent />
            <GammaComponent />
            <DeltaComponent />
        </div>
    )
}

export default Dashboard;