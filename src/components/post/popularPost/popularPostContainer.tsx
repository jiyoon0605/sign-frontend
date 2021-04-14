import PopularPostPresenter from 'components/post/popularPost/popularPostPresenter';
import { DataType } from 'components/post/postContainer';
import React, { useMemo,} from 'react'
import { useHistory } from 'react-router-dom';


const PopularPostContainer:React.FC<{data:DataType}>=({data})=>{
    const percentage=useMemo(()=> Math.round((data.list.length/data.goalNum)*100),[data.goalNum, data.list.length])
    const history=useHistory();

    const gotoDetail=()=>history.push(`/post/${data._id}`);

    
    return<PopularPostPresenter gotoDetail={gotoDetail} data={data} percentage={percentage}/>
}

export default PopularPostContainer;