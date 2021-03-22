import React,{useEffect} from 'react'
import {Switch,Route,Link}from 'react-router-dom'
import {useHistory}from 'react-router';
import Register from 'components/register';
import Login from 'components/login';
import Write from 'components/write'

import * as S from 'style/container';

import {userDataRequest}from 'modules/userData';

import {useDispatch, useSelector}from 'react-redux';
import { RootState} from 'modules';

const Container:React.FC=()=>{
    const history=useHistory();
    const state=useSelector((state:RootState)=>state.userDataReducer);
    const dispatch=useDispatch();

    useEffect(()=>{
        dispatch(userDataRequest());
    },[])


    return(
        <>
            <S.Header>
                <S.Logo>
                    <Link className="link" to="/">Sign!</Link>
                </S.Logo>
                <S.NavList>
                    <S.NavItem>전체 게시물</S.NavItem>
                    <S.NavItem onClick={()=>history.push("/write")}>글쓰기</S.NavItem>
                    <S.NavItem onClick={()=>history.push("/login")}>로그인</S.NavItem>
                </S.NavList>
            </S.Header>
            <Switch>
                <Route path="/register" component={Register}/>
                <Route path="/login"component={Login}/>
                <Route path="/write"component={Write}/>
            </Switch>
        </>

    )

}

export default Container;