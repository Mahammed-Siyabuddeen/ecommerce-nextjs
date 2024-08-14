'use client'


export default function ErrrorPage({error}:{error:Error}){
    console.log(error);
    return(
        <div>this is error page</div>
    )
    
}