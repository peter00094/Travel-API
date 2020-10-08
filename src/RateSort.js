import React, { Component } from 'react'

export default class RateSort extends Component {

    render() {
        const { handleSort } = this.props;
        return (
            <div>
                <select name="sort" onChange={handleSort} defaultValue="rating_desc">
                    <option value="rating_desc">評分高到低</option >
                    <option value="rating_asc">評分低到高</option >
                    <option value="price_desc">價錢高到低</option >
                    <option value="price_asc">價錢低到高</option >
                </select>

            </div>
        )
    }
}
