import React, { memo } from 'react'

// Se usa memo, para que el componente no se monte ni desmonte
const Small = memo(({ value }) => {
    console.log('Me volví a renderizar')
    return (
        <div>
            <small>{value}</small>
        </div>
    )
})

export default Small