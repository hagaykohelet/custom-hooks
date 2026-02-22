import React, { useState } from 'react'

function useCounterWithStep(initial, step) {
    const [value, setValue] = useState(initial)
    function inc(){
        setValue(value + step)
    }
    function dec(){
        setValue(value - step)
    }
    function reset(){
        setValue(initial)
    }
    return {value, inc, dec, reset}
}

export default useCounterWithStep