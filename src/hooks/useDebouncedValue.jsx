import React, { useState } from 'react'

function useDebouncedValue(values, delayMs) {
    const [value, setValue] = useState()
    
    let timer;
    function debounce(e) {
        clearTimeout(timer)
        timer = setTimeout(() => {
            setValue(e.target.value)
        }, delayMs);
    }
    return { debounce, value}
}


export default useDebouncedValue