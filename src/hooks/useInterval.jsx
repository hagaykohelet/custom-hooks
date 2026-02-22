import React, { useEffect, useState } from 'react'

function useInterval(callback, intervalMs, enabled) {
    const [flag, setFlag] = useState(true)
    function changeFlag() {
        setFlag(!flag)
    }
    
    useEffect(()=>{
        if(flag){
            setTimeout(() => {
                setInterval(() => {
                    callback()
                    changeFlag()
                }, intervalMs);
            }, intervalMs);
        }
    }, [flag])
    return {useEffect}
}

export default useInterval