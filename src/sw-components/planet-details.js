import React from 'react';
import ItemDetails, {Record} from '../components/item-details';
import {withSwapiService} from '../components/hoc-helpers';

const PlanetsDetails = (props) => {
    return(
        <ItemDetails {...props}>
                <Record field='population' label='Population: '/>
                <Record field='rotationPeriod' label='Rotation Period: '/>
                <Record field='diametr' label='Rotation Diametr: '/>
        </ItemDetails>
    )
};

const mapMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getPlanet,
        getImgUrl: swapiService.getPlanetsImage
    }
}

export default withSwapiService(PlanetsDetails, mapMethodsToProps);