import React, { useState } from 'react'

function usePrevious() {
    const [current, setCurrent] = useState()
    const [previousValue, setPreviousValue] = useState()
    function setValues(e) {
        setPreviousValue(current)
        setCurrent(e.target.value)
    }

    return { previousValue, current, setCurrent, setPreviousValue, setValues }

}

export default usePrevious