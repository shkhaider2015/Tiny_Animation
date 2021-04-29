import React from 'react'

export const LandingComp = ({ TEXT, IMAGE, BCIMAGE, INDEX }) => {

    let myTransform = { transform: 'rotate(0)' }
    let stylee = {
        backgroundImage: `url(${BCIMAGE})`,
        backgroundPosition: 'center', /* Center the image */
        backgroundRepeat: 'no-repeat', /* Do not repeat the image */
        backgroundSize: 'cover', /* Resize the background image to cover the entire container */
        myTransform,
        height: '100vh',
        display: 'grid',
        justifyContent: 'center',
        alignContent: 'center'
    }

    console.log(INDEX)
    if (INDEX % 2 !== 0) {
        return <div style={stylee} >


            <div style={{
                display: 'flex',
                flexDirection: 'row',
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center'
            }} >
                {/* <div style={{ width , border : '1px solid white' }} >
            <div style={{  border : '1px solid white' }} > {TEXT} </div>
        </div> */}
                <span style={{ width: '30%', textAlign: 'center', fontSize: 12, fontWeight: 'bold', color: 'whitesmoke' }} > {TEXT} </span>
                <div style={{}} >
                    <img style={{ width: '100%' }} src={IMAGE} alt="jkjk" />
                </div>

            </div>

        </div>
    }
    else {
        return <div style={stylee} >


            <div style={{
                display: 'flex',
                flexDirection: 'row',
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center'
            }} >
                {/* <div style={{ width , border : '1px solid white' }} >
            <div style={{  border : '1px solid white' }} > {TEXT} </div>
        </div> */}
                <div style={{}} >
                    <img style={{ width: '100%' }} src={IMAGE} alt="jkjk" />
                </div>
                <span style={{ width: '30%', textAlign: 'center', fontSize: 12, fontWeight: 'bold', color: 'whitesmoke' }} > {TEXT} </span>

            </div>

        </div>
    }
}