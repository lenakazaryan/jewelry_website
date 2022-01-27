import React, { useEffect } from 'react'

const AddBucketAlert = ({msg, removeAlert, list}) => {
  useEffect(()=>{
    const timeout =  setTimeout(()=>{
      removeAlert();
    }, 2000);
    return ()=> clearTimeout(timeout)
  }, [list])
  return <p className={`alert`}>{msg}</p>
}

export default AddBucketAlert;
