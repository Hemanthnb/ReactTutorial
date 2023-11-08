import React from 'react'

export default function TempFile(props) {

    // We are converting it to string because we cannot directly send 
    const str=JSON.stringify(props.jsondata)
  return (
      <div>JsonData= {str}</div>
  )
}
