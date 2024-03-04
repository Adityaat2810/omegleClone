import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
export const Room =()=>{
    const [searchParams,setSerachParams]=useSearchParams();
    const name = searchParams.get('name');

    useEffect(()=>{

    },[name])

    return <div>
        hi {name}
    </div>
}