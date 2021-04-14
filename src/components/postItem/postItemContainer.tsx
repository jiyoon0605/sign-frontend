import React, {useMemo } from 'react';
import {useHistory} from 'react-router';
import {DataType}from '../post/postContainer'

import PostItemPresenter from './postItemPresenter'

type Props={
    data:DataType,
}

const PostItemContainer:React.FC<Props>=({data})=>{

    const {list,goalNum,_id}=data;
    const percentage=useMemo(()=> Math.round((list.length/goalNum)*100),[goalNum, list.length])

    const history=useHistory();

    const gotoDetail=()=>history.push(`/post/${_id}`);
    
    return <PostItemPresenter gotoDetail={gotoDetail} imgPath={data.image} data={data} percentage={percentage}/>

    
}

export default PostItemContainer;