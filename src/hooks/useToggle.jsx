import React, { useState } from 'react'

function useToggle() {
    const [value, setValue] = useState()
    function setTrue() {
        setValue(true)
    }
    function setFalse() {
        setValue(false)
    }
    function toggle() {
        setValue(!value)
    }
    return { value, setFalse, setTrue, toggle }
}

export default useToggle