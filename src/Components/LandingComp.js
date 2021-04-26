import React from 'react'

export const LandingComp = ({TEXT, IMAGE, BCIMAGE, key}) => {

    let myTransform = { transform : 'rotate(0)'  }
    let stylee = {}
    if(key%2 === 0)
    {
        myTransform = { transform : 'rotate(180)' }
    }
    if(BCIMAGE)
    {
        stylee = {
            backgroundImage : `url(${BCIMAGE})`,
            backgroundPosition: 'center', /* Center the image */
            backgroundRepeat: 'no-repeat', /* Do not repeat the image */
            backgroundSize: 'cover', /* Resize the background image to cover the entire container */
            myTransform,
            height : '100vh', 
            display : 'grid', 
            justifyContent : 'center', 
            alignContent: 'center'
        }
    }else
    {
        stylee = {
            backgroundColor : '#4f3c3a',
            height : '100vh', 
            display : 'grid', 
            justifyContent : 'center', 
            alignContent: 'center'
        }
    }
    
    return <div style={stylee} >

    <div style={{
        display : 'flex',
        flexDirection: 'row',
        width : '100%',
        justifyContent : 'center',
        alignItems: 'center'
    }} >
        {/* <div style={{ width , border : '1px solid white' }} >
            <div style={{  border : '1px solid white' }} > {TEXT} </div>
        </div> */}
        <span style={{ width : '30%', textAlign : 'center', fontSize : 12, fontWeight : 'bold', color : 'whitesmoke' }} > {TEXT} </span>
        <div style={{   }} >
            <img style={{ width : '100%' }} src={IMAGE} alt="jkjk" />
        </div>

    </div>

    </div>
}