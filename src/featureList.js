import React from 'react';
import FeatureCard from './featureCard';
import FEATURES from './store'

function FeatureList(props) { // this needs to map the FeatureCards
    const features = Object.keys(FEATURES)
        .map( key =>
            <FeatureCard
                key={key}
                features={FEATURES}
                selected={props.selected}
                featureTitle={key}
                handleUpdate={props.handleUpdate}
            />
            )
    return (
        <section className='main__form'>
            <h2>Customize Your Laptop</h2>
            {features}
        </section>
    )
}

export default FeatureList;