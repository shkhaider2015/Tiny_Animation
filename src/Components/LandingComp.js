import React from 'react'

export const LandingComp = ({TEXT, IMAGE}) => {

    return <div style={{
        backgroundColor : '#4f3c3a', height : '100vh', display : 'grid', justifyContent : 'center', alignContent : 'center'
    }} >

    <div style={{
        display : 'flex',
        flexDirection: 'row'
    }} >
        <span style={{ flexGrow : 1 }} > {TEXT} </span>
        <div style={{ flexGrow : 1 }} >
            <img src={IMAGE} alt="jkjk" />
        </div>

    </div>

    </div>
}