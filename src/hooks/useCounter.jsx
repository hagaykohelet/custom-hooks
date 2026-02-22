import React, { useState } from 'react'

function useCounter(number) {
    const [value, setValue] = useState(number)
    function inc() {
        setValue(value + 1)
    }
    function dec() {
        setValue(value - 1)
    }
    function reset() {
        setValue(number)
    }


    return {value, inc, dec, reset}
}

export default useCounter