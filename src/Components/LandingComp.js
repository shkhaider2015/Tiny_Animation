import React from 'react'
import { animated } from 'react-spring'

export const LandingComp = ({ offset, TEXT, IMAGE, BCIMAGE, INDEX }) => {

    const [opacity] = useState(() => offset.interpolate([0, 1]))

    const stylee = {
        backgroundImage: `url(${BCIMAGE})`,
        backgroundPosition: 'center', /* Center the image */
        backgroundRepeat: 'no-repeat', /* Do not repeat the image */
        backgroundSize: 'cover', /* Resize the background image to cover the entire container */
        height: '100vh',
        display: 'grid',
        justifyContent: 'center',
        alignContent: 'center'
    }

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
                <animated.div style={{ opacity }} >
                    <span style={{ width: '30%', textAlign: 'center', fontSize: 12, fontWeight: 'bold', color: 'whitesmoke' }} > {TEXT} </span>
                    <div >
                        <img style={{ width: '100%' }} src={IMAGE} alt="jkjk" />
                    </div>
                </animated.div>

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