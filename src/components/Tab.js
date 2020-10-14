import React,{useState} from 'react'


export default function Tab({children,className,...restProps}){
    const [highlightStyle, sethighlightStyle] = useState({left:0, opacity:0});
  
    //update highlight to move the highlight
    function moveHighlight(e){
      sethighlightStyle({
        left:e.nativeEvent.layerX-150,
      })
    }
  
    function hideHighlight(e){
      sethighlightStyle({
        left:e.nativeEvent.layerX-150,
        opacity:0
      })
    }
    return (
      // take className as props and concanate them as a simple class
      <div {...restProps} className={`tab ${className}`} onMouseOut={hideHighlight} onMouseMove={moveHighlight}>
        <div className="highlight" style={highlightStyle}/>
        {children}
      </div>
    );
  }