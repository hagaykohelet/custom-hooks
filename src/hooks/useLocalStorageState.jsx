import React, { useState } from 'react'

function useLocalStorageState(defaultValue) {
    const [value, setValue] = useState(defaultValue)



    function setValue2(value){
        setValue(value)
        localStorage.setItem("kohelet", value)
    }

    function remove() {
        setValue(defaultValue)
        localStorage.setItem("kohelet", defaultValue)
    }
    return { value, setValue2, remove }
}

export default useLocalStorageState