import { useEffect, useState } from 'react';
import to from 'await-to-js';
import {useConnect} from "frontity";
const PostCall =(page)=>{
    const [ jsonData, setJsonData ] = useState([]);
    const {libraries} = useConnect();

    useEffect(()=>{
        async function getPostData(){
            const {api} = libraries.source;
            let err;
            let res;
            let resData;
            [err,res] = await to(
                api.get({
                    endpoint : `/acf/v3/posts/?post_type=portfolio`
                })
            );
            if(!res) console.log(err);

            [err,resData] = await to(res.json());
            if(!resData) console.log(err);

            setJsonData(resData);
        }
        getPostData();
    },[]);

    return { jsonData };
};

export default PostCall;