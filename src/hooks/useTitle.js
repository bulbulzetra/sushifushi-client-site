import React, { useEffect } from 'react';

const useTitle = () => {
    const useTitle = (title) => {
        useEffect(()=>{
            document.title = `{title} - Seoul Kinchenista`
        },[title])
    }
    
};

export default useTitle;




