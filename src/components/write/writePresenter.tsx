import React from 'react';
import * as S from 'style/write';
import ReactQuill from "react-quill";

import "react-quill/dist/quill.snow.css";

import { CategoryType } from 'modules/post';

type Props={
    imgPath:string,
    setImgData:(file:File)=>void,
    imageReader:(file:File)=>void,
    title:string,
    setTitle:(text:string)=>void,
    textArea:((instance: HTMLTextAreaElement | null) => void) | React.RefObject<HTMLTextAreaElement> | null | undefined,
    content:string,
    setContent:(text:string)=>void,
    num:string,
    setNum:(num:string)=>void,
    date:string,
    setDate:(text:string)=>void,
    getDateString:()=>string,
    category:CategoryType,
    setCategory:(text:CategoryType)=>void,
    onSubmit:()=>void,
    modules:object


}

const WritePresenter:React.FC<Props>=({
    imgPath,title,textArea,content,num,date,category,modules,
    setImgData,imageReader,setTitle,setContent,setNum,setDate,getDateString,setCategory,onSubmit
})=>{

    return <S.Container>
        <S.ContainerBox>
            <S.ImgInput id="img" type="file" accept="image/*"
               onChange={(e)=>{
                if(e.target.files){
                    setImgData(e.target.files[0]);    
                    imageReader(e.target.files[0]);
                }
                
            }}/>
            <S.ImgLabel htmlFor="img">이미지 추가</S.ImgLabel>
            {imgPath&&<S.ImageContainer src={imgPath}/>}
            <S.ContentsContainer>
                <S.Title>제목</S.Title>
                <S.TextInput placeholder="제목" value={title} onChange={e=>{setTitle(e.target.value)}}/>
                <S.Title>내용</S.Title>
                <ReactQuill  value={content} 
                            onChange={(content, delta, source, editor)=>{setContent(editor.getHTML())}}
                            modules={modules}
                            style={{width:"90%", margin:"1rem", borderRadius:"5px"}}
                            />
                {/* <S.ContentsInput ref={textArea}  
                                 placeholder="내용" 
                                 value={content} 
                                 onChange={e=> setContent(e.target.value)}
                                 /> */}
                <S.Title>목표 인원</S.Title>
                <S.TextInput placeholder="목표 인원" 
                             type="number" 
                             defaultValue={0} 
                             value={num} 
                             onChange={e=>{
                                 setNum(e.target.value);
                           
                             }}/>
                <S.Title>마감 날짜</S.Title>
                <S.TextInput type="date" value={date} onChange={e=>setDate(e.target.value)} min={getDateString()}/>
                <S.Title>카테고리</S.Title>
                <S.CategoryContainer defaultValue="other" value={category} onChange={e=>setCategory(e.target.value as CategoryType)}>
                    <option value="other">기타</option>
                    <option value="game">게임</option>
                    <option value="enter">연예</option>
                    <option value="sport">스포츠</option>
                    <option value="individ">개인</option>
                    <option value="area">지역</option>
                    <option value="env">환경</option>
                </S.CategoryContainer>
            </S.ContentsContainer>
           
        </S.ContainerBox>
        <S.SubmitBtn onClick={onSubmit}>작성 완료</S.SubmitBtn>
    </S.Container>
};

export default WritePresenter;