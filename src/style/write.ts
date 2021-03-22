import styled from 'styled-components';

export const Container=styled.div`
    margin-top:60px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`;

export const ContainerBox=styled.div`
    width:1000px;
    height:1200px;

    box-shadow:2px 2px 5px 0 rgba(0,0,0,0.5);

    @media screen and (max-width:1000px){
        width:100%;
        margin:0 5px;
    }
    margin-bottom:30px;
`;

export const SubmitBtn=styled.div`
    width:200px;
    height:40px;
    margin:20px 0;
    background-color:#FF4141;

    font-size:15px;
    color:white;
    font-family:"Medium";

    border:1px solid black;

    display:flex;
    justify-content:center;
    align-items:center;
`