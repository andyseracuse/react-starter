import React from 'react';

function WatchButton(props) {
  return (
    <button onClick={() => {props.changeView(props.buttonType)}} className="watch-buttons">{props.buttonType}</button>
  )
}

export default WatchButton