import React, { Component } from 'react'
import styled from 'styled-components';

import Card, {
    CardPrimaryContent,
} from "@material/react-card";
import {
    Headline6,
} from '@material/react-typography';
export default class List extends Component {
    render() {
        //解構取值
        const { data } = this.props;
        return (
            <div style={{ width: "860px", height: "302px", margin: "0px auto" }}>
                {//將排序好的陣列印出

                    data.map(data => (
                        <Card key={data.id}>
                            <Headline6>{data.title}</Headline6>
                            <CardPrimaryContent className='demo-card__primary-action'>
                                <div style={{ padding: "1rem" }} >


                                    {/* <CardMedia square  imageUrl={data.image_url}/> */}
                                    <Box src={data.image_url} alt=""></Box>

                                    {/* 走訪物件中的陣列 將值一一回傳 */}
                                    {data.tags.map(data=>{
                                        return <Tag>{data}</Tag>
                                    })}
                                  
                                    <br/>
                                    {/* 走訪物件中的物件 將值一一回傳 */}
                                    {data.group.map(data=>{
                                        return(<Tag key={data.id}>{data.date.substr(5,8)} 可售 {data.quantity} 位</Tag>)
                                    })}
                                    
                                    <p>評分 :<OrangeNum> {data.rating}</OrangeNum></p>
                                    <OrangeNum>{data.tour_days}</OrangeNum>天 <OrangeNum>{data.min_price}</OrangeNum> 元起

                                </div>
                            </CardPrimaryContent>
                        </Card>
                    ))}

            </div>
        )
    }
}
// 橘色大字
const OrangeNum = styled.span`
color: #ff9800;
font-size: 23px;
font-weight: 700;
`
//藍色標籤字
const Tag = styled.p`
　display: inline-block;
    margin:10px 3px;
    border-radius: 15px;
    font-size: 14px;
    padding: 0 7px;
    color: #03a9f4;
    background: #fff;
    cursor: default;
`
//圖片大小
const Box = styled.img`
margin:0 auto;
display:block;
height:300px;
width:300px;
`
