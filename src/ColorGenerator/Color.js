import React from 'react'
import rgbToHex from './utils'

const Color = ({data}) => {
    console.log(data)
    function componentToHex(c) {
        var hex = c.toString(16);
        return hex.length == 1 ? '0' + hex : hex;
      }
      
      function rgbToHex(r, g, b) {
        return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);
      }
    let color=rgbToHex(data.rgb[0],data.rgb[1],data.rgb[2])

    function click()
    {
        navigator.clipboard.writeText(color)
        setState(true)
        setTimeout(() => {
            setState(false)
        }, 3000);
    }

    let [state,setState]=React.useState(false)


  return (
    <div style={{background:color,cursor:'pointer'}} onClick={click}>
        <p className='light'>{color}</p>
        <p className='light'>{data.weight}%</p>
        {
            state &&
            <p className='dark'>Copied to the clipboard</p>
        }
    </div>
  )
}

export default Color
