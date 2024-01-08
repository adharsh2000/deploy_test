import React from 'react'
import { ThreeDots } from 'react-loader-spinner'

export default function loader(props) {
    const { height = '100vh',width,message} = props
    return (
        <div style={{display:'flex',flexDirection:'column',height:height,alignItems:'center',justifyContent:'center'}}>
        <ThreeDots
            height={'35'}
            width={width}
            radius='6'
            color="#a93439"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
        />
        <div className='mt-2'>{message&&message}</div>
        </div>
    )
}
