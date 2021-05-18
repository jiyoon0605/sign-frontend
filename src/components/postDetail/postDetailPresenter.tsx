import React from 'react';
import * as S from 'style/postDetail';
import { CircularProgressbar,buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {DetailState}from 'modules/post';
import { UserData } from 'modules/userData';

export type DataType={
    _id:string,
    content:string,
    createNum:string,
    title:string,
    endDate:string,
    writer:string,
    writerId:string,
    goalNum: number,
    list:{writer:string,writerId:string}[],
    createAt:string,
    category:string,
    activation:boolean,
    image:string

}

type Props={
    data:DetailState,
    percentage:number,
    onSignOn:()=>void,
    maskingName:(s:string)=>string,
    onDelete:()=>void,
    userData:UserData
}


const PostDetailPresenter:React.FC<Props>=({data,percentage,onSignOn,maskingName,onDelete,userData})=>{

    return (<div>
    <S.Container>
        <S.HeadInfo>
         <S.ContainerBox>
            <S.InfoBox>
              <S.ImgBox src={data.image}/>
              <S.TextBox> 
              {percentage>=100&& <S.Message>목표 달성 성공!</S.Message>}
                <S.Title>{data.title}</S.Title>
                <S.ProgressBox>
                  <CircularProgressbar 
                      value={percentage||0} 
                      styles={buildStyles({
                      textSize: 15,
                      textColor: "#ff4141",
                      pathColor: "#ff4141",
                      trailColor: "rgb(200,200,200)"
                      })}
                      text={`${percentage}% 달성`} 
                      strokeWidth={5}/>
                  </S.ProgressBox>
                  <p>{ `${data.createAt.slice(0,10)} ~ ${data.endDate}`}</p>
                  <S.CurNum>{`${data.list.length} / ${data.goalNum}`}</S.CurNum>                 
                  {data.activation? <S.ApplyBtn onClick={onSignOn}> 동의하기 </S.ApplyBtn>:<p>이미 마감된 서명운동 입니다.</p>}
                 
                </S.TextBox>
              </S.InfoBox>   
            </S.ContainerBox>
          <S.ListBox>
             동의한 사람들
          <S.ScrollContainer>
            {data.list.map((e)=><S.ListItem>
              {maskingName(e.writer)}
            </S.ListItem>)}
        </S.ScrollContainer>
      </S.ListBox>
    </S.HeadInfo>
        <S.ContentsBox >
          <div  dangerouslySetInnerHTML={ {__html: data.content}}></div>
          {(data.writerId===userData.id&&percentage<100)&&<S.DeleteButton onClick={onDelete}>삭제하기</S.DeleteButton>}
        </S.ContentsBox> 
   
    </S.Container>
    
    </div>)
   
}

export default PostDetailPresenter;