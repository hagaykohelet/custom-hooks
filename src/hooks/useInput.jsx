import React, { useState } from 'react'

function useInput() {
    const [value, setValue] = useState()

    function onChange(e){
        setValue(e.target.value)
    }
    function reset(){
        setValue("")
    }
  return {value, onChange, setValue, reset}
}

export default useInput