import ItemList from '../components/item-list';
import {withData, withSwapiService} from '../components/hoc-helpers';

const withChild = (Wrapped, fn) => {
    return (props) => {
        return(
        <Wrapped {...props}>
            {fn}
        </Wrapped>
        )
    }
}

const mapMethodsToPersonProps = (swapiService) => {
    return {
        getData: swapiService.getAllPeople
    }
}

const mapMethodsToPlanetProps = (swapiService) => {
    return {
        getData: swapiService.getAllPlanets
    }
}

const mapMethodsToStarshipProps = (swapiService) => {
    return {
        getData: swapiService.getAllStarships
    }
}

const renderName = ({name}) => <span>{name}</span>;


const PersonsList = withSwapiService(
                    withData(
                        withChild(ItemList, renderName)),
                        mapMethodsToPersonProps);

const PlanetsList = withSwapiService(
                    withData(
                        withChild(ItemList, renderName)),
                        mapMethodsToPlanetProps);

const StarshipsList = withSwapiService(
                    withData(
                        withChild(ItemList, renderName)),
                        mapMethodsToStarshipProps);

export {
    PersonsList,
    PlanetsList,
    StarshipsList
};