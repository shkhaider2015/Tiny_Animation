import React, {useState, useContext, useMemo, useEffect} from 'react'
import { animated, useSpring } from 'react-spring'
import { ScrollPosition } from "../ContextAPI";
import useWindowsPosition from "./GetPosition";

const LandingComp = ({ OBJ, INDEX}) => {

    const kk = useWindowsPosition();

    const springProps = useSpring({
        opacity: 1,
        config: { duration : 2000 },
        from: {
            opacity: 0
        }
    })
    const springText = useSpring({
        opacity: 1,
        config: { duration : 2000 },
        from: {
            opacity: 0
        }
    })

    const stylee = {
        backgroundImage: `url(${OBJ.bcImage})`,
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
                        {/* <div style={{ opacity, border : '1px solid white' }} > */}
                            <span style={{ width: '30%', textAlign: 'center', fontSize: 12, fontWeight: 'bold', color: 'whitesmoke' }} > 
                                <animated.span style={ springText }>
                                {OBJ.text} 
                                </animated.span>
                             </span>
                            <animated.div style={ springProps } >
                                <img style={{ width: '100%' }} src={OBJ.image} alt="jkjk" />
                            </animated.div>
                        {/* </div> */}
        
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
                <animated.div style={ springProps } >
                    <img style={{ width: '100%' }} src={OBJ.image} alt="jkjk" />
                </animated.div>
                <span style={{ width: '30%', textAlign: 'center', fontSize: 12, fontWeight: 'bold', color: 'whitesmoke' }} > {OBJ.text} </span>

            </div>

        </div>
    }
}

export default  LandingComp