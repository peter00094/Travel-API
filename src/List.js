import React, { Component } from 'react'
import styled from 'styled-components';
export default class List extends Component {
    render() {
        const { data } = this.props;
        return (
            <div>
                {//將排序好的陣列印出
                    data.map(data => (
                        <li key={data.id}>
                            {data.title}
                            <Box src={data.image_url} alt=""></Box>
                            <p>評分:{data.rating}</p>
                            <p>{data.tour_days}天{data.min_price}元起</p>
                        </li>
                    ))}
            </div>
        )
    }
}

const Box = styled.img`
height:200px;
width:200px;
`
