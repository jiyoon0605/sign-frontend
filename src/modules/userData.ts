import { createAction,  PayloadAction } from "@reduxjs/toolkit";
import clinet from 'api';
import {  call,  put, takeLatest } from "redux-saga/effects";

interface UserData{
    name:string,
    id:string
};
interface UserDataFail{
    reason:string
};

const USERDATA_REQUEST="USERDATA_REQUEST";
const USERDATA_SUCCESS="USERDATA_SUCCESS";
const USERDATA_FAIL="USERDATA_FAIL";

export const userDataRequest=createAction(USERDATA_REQUEST);
const userDataSuccess=createAction<UserData>(USERDATA_SUCCESS);
const userDataFail=createAction<UserDataFail>(USERDATA_FAIL);

type UserDataActionType=PayloadAction<UserData>|PayloadAction<null>|PayloadAction<UserDataFail>;

const userDataReducer=(state:UserData={
        name:"",
        id:""
},action:UserDataActionType)=>{
    switch(action.type){
        case USERDATA_SUCCESS:
            console.log(action.payload);
            return action.payload;
        default:
            return state;
    }
};


function* request(action:UserDataActionType){
    console.log("request")
    try{
        const {data}=yield call([clinet,"get"],"/auth/userData");
        const {id,name}=data.data;
        yield put(userDataSuccess({
            id,
            name
        }))
    }
    catch(err){

    }
};

function* watchUserData(){
    yield takeLatest(USERDATA_REQUEST,request);
};

export {userDataReducer,watchUserData};
