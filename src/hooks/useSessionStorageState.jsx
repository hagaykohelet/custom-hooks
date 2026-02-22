import React, { useState } from 'react'

function useSessionStorageState(defaultValue) {
    const [value, setValue] = useState(defaultValue)



    function setValue2(value){
        setValue(value)
        sessionStorage.setItem("kohelet", value)
    }

    function remove() {
        setValue(defaultValue)
        sessionStorage.setItem("kohelet", defaultValue)
    }
    return { value, setValue2, remove }
}

export default useSessionStorageState