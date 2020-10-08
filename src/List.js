import React, { Component } from 'react'
import styled from 'styled-components';
import {CardMedia} from '@material/react-card';

import Card, {
    CardPrimaryContent,
} from "@material/react-card";
import {
    Headline6,
  } from '@material/react-typography';
export default class List extends Component {
    render() {
        const { data } = this.props;
        return (
            <div style={{width:"860px", height:"502px", margin:"0px auto"}}>
                {//將排序好的陣列印出

                    data.map(data => (
                        <Card key={data.id}>
                            
                        <Headline6>{data.title}</Headline6>
                         <CardPrimaryContent className='demo-card__primary-action'>
                             <div style={{padding:"1rem"}} >
                       
                       
                        {/* <CardMedia square  imageUrl={data.image_url}/> */}
                        <Box src={data.image_url} alt=""></Box>
                       
                            <p>評分:{data.rating}</p>
                            <p>{data.tour_days}天{data.min_price}元起</p>
                        
                        </div>
                        </CardPrimaryContent>
                        </Card>
                    ))}
               
            </div>
        )
    }
}



const Box = styled.img`
height:300px;
width:300px;
`
