import React from 'react'
import { IconContext } from "react-icons";

const CustomIcon = ({ children, color, className }) => {
    return (
        <IconContext.Provider value={{ color: color, className: className }}>
            {children}
        </IconContext.Provider>
    )
}

export default CustomIcon