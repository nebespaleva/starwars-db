import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';
import './item-details.css';

const Record = ({itemInfo, field, label}) => {
    return (
        <li className='list-group-item'>{`${label} ${itemInfo[field]}`}</li>
    )
}

export {Record};

export default class ItemDetails extends Component {

    swapiService = new SwapiService();

    state = {
        itemInfo: null,
        loading: null,
        image: null
    }

    componentDidMount() {
        this.renderItem();
    }

    componentDidUpdate(prevProp) {
        if (this.props.itemId !== prevProp.itemId) {
            this.renderItem();
        }
    }


    renderItem = () => {

        this.setState({
            loading: true
        })
        
        const {itemId, getData, getImgUrl} = this.props;

        getData(itemId)
        .then((itemInfo) => {
            this.setState({
                itemInfo,
                loading: false,
                image: getImgUrl(itemInfo)
            })
        })

    }

    render() {

        const {itemInfo, loading, image} = this.state;
        if (!itemInfo) {
            return (
                <span>Please, choose your character</span>
            )
        }

        const content = () => {
            return(
                <React.Fragment>
                    <div>
                        <img src={image} 
                            alt='person'
                            className='person-img'
                        />
                    </div>
                    <div className='person-info'>
                        <h2 className='person-details-title'>{itemInfo.name}</h2>
                        <ul className='list-group'>
                            {
                                React.Children.map(this.props.children, (child) => {
                                    return React.cloneElement(child, {itemInfo});
                                })
                            }
                        </ul>
                    </div>
                </React.Fragment>
            )
        }

        const showSpinner = loading ? <Spinner/> : null;
        const showContent = !loading ? content() : null;

        return(
            <div className='d-flex justify-content-center person-details'>
                {showSpinner}
                {showContent}
            </div>
        )
    }
}