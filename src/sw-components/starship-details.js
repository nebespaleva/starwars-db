import React from 'react';
import ItemDetails, {Record} from '../components/item-details';
import {withSwapiService} from '../components/hoc-helpers';

const StarshipsDetails = (props) => {

    return(
        <ItemDetails {...props}>
                <Record field='model' label='Model: '/>
                <Record field='length' label='Length: '/>
                <Record field='costInCredits' label='Cost: '/>
        </ItemDetails>

    )
};

const mapMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getStarship,
        getImgUrl: swapiService.getStarshipsImage
    }
}
export default withSwapiService(StarshipsDetails, mapMethodsToProps);