import React from 'react';

const PlanetView = ({planet}) => {

    const {id, name, population, rotationPeriod, diametr} = planet;

    return(
        <React.Fragment>
            <div>
                <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} 
                    alt='planet'
                    className='planet-img'
                />
            </div>
            <div>
                <h2 className='rnd-planet-title'>{name}</h2>
                <ul className='list-group'>
                    <li className='list-group-item'>Population: {population}</li>
                    <li className='list-group-item'>Rotation period:  {rotationPeriod} hours</li>
                    <li className='list-group-item'>Diameter: {diametr} km</li>
                </ul>
            </div>
        </React.Fragment>
    )
}

export default PlanetView;