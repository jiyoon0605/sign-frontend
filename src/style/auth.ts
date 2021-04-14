import styled from 'styled-components'
import {Link}from 'react-router-dom';
export const Container=styled.form`
    margin-top:10rem;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    
    .emailContainer{
        display:inline;
        width:30rem;
    }
    @media screen and (max-width:1000px){
        .emailContainer{
            width:90%;
            display:block;
        }
    }
`;

export const Title=styled.div`
    font-family:"Bold";
    font-size:2.5rem;
    margin-bottom:3rem;
`;

export const InputField=styled.input`
    width:30rem;
    height:3rem;

    border-radius:10px;
    box-sizing:border-box;
    padding:10px;
    outline:none;
    border:1px solid black;

    font-family:"Medium";
    font-size:14px;

    margin-bottom:12px;

    &:focus{
        box-shadow:2px 2px 3px 0 rgba(0,0,0,0.5);
    }
    @media screen and (max-width:1000px){
        width:90%;
    }

`;

export const InputEmail=styled(InputField)`
    width:350px;
    @media screen and (max-width:1000px){
        width:100%;
    }
`;

export const SubmitButton=styled.button`
    width:30rem;
    height:3rem;
    margin-top:20px;
    background-color:#FF4141;

    font-size:25px;
    color:white;
    font-family:"Medium";

    border:1px solid black;
    border-radius:10px;

    transition: transform 0.2s;
    &:active{
        transform:scale(0.9);
    }
    @media screen and (max-width:1000px){
        width:90%;
        margin-bottom:3rem;
    }
`;
export const EmailBtn=styled(SubmitButton)`
    width:120px;
    font-size:14px;
    height:3rem;
    margin-left:10px;
    @media screen and (max-width:1000px){
        margin:0;
        margin-bottom:1.5rem;
        width:100%;
        height:2.5rem;
    }
`

export const LinkBtn=styled(Link)`
    color:black;
    margin:1.5rem 0;
`;