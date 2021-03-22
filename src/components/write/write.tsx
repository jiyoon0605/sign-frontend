import React from 'react';
import * as S from 'style/write';

// interface postType{
//     imgData:File,
//     imgPath:string,

// }
// interface actionType{
//     type:"IMAGE"|"END_DATE"|"GOAL"|"TITLE"|"CONTENT";
//     data:string
// };

const Write:React.FC=()=>{
    
    // const reducer=(state:postType|{},action:actionType)=>{

    // }



    return <S.Container>
        <S.ContainerBox>
            <S.ImageContainer/>
            <S.ImgInput id="img" type="file" accept="image/*"/>
            <S.ImgLabel htmlFor="img">이미지 추가</S.ImgLabel>
        </S.ContainerBox>
        <S.SubmitBtn>작성 완료</S.SubmitBtn>
    </S.Container>
};

export default Write;