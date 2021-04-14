import { DataType } from 'components/post/postContainer';
import React from 'react'
import * as S from "style/post";
type Props={
    gotoDetail:()=>void,
    data:DataType,
    percentage:number
}
const PopularPostPresenter:React.FC<Props>=({gotoDetail,data,percentage})=>{


    return <S.PopularContainer onClick={gotoDetail}>
            <S.PopularImg alt={data.title} src={data.image} />
            <S.PopularInfo className="infoContainer">
                <h5>#{data.category}</h5>
                <h1>{data.title}</h1>
                <h1>{percentage}% 달성!</h1>
            </S.PopularInfo>
        </S.PopularContainer>
}

export default PopularPostPresenter;