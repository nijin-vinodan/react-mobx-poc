import React, { FunctionComponent, useEffect } from 'react';
import { TemperatureStore } from '../store/TemperatureStore';
import { useObserver } from 'mobx-react';


export interface DeltaComponentProps {

}

export const DeltaComponent: FunctionComponent<DeltaComponentProps> = props => {
    useEffect(() => {
        console.log("Delta: useEffect");
    }, []);

    return useObserver(() => (
        <div className="container delta">
            <h1>Delta Readings {TemperatureStore.temperature}</h1>
            <div>
                <button onClick={() => {
                    TemperatureStore.setTemperature();
                }}>TEMP</button>
                <button onClick={() => {
                    TemperatureStore.setUnit('C');
                }}>C</button>
                <button onClick={() => {
                    TemperatureStore.setUnit('F');
                }}>F</button>
                <button onClick={() => {
                    TemperatureStore.setTemperatureAndUnit('K');
                }}>K</button>
            </div>
        </div>
    ))
}
