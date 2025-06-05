import React from "react";
import "./Toggle.css"

const Toggle = (item) => {
    return (
        <>
            <div className="teste">
                <label className="switch">
                    <input
                        type="checkbox"
                        checked={item.possuiPresenca}
                    />
                    <span className="slider round"></span>
                </label>
            </div>
        </>
    )
}

export default Toggle;