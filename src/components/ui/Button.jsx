import React from "react"

function Button(props) {
    return (
        <button type="button" className="text-quick-silver text-sm cursor-pointer font-main">{props.text}</button>
    )
}

export default Button;