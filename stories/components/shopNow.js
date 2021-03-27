import React from 'react'
import './shopNow.css'

function shopNow (props) {
    const { variant = 'solidShopNow', children, ...rest } = props
    return (
        <button className={`solidShopNow ${variant}`}>
            {children}
        </button>
    )
}

export default shopNow