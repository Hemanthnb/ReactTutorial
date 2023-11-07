import React from 'react'

export default function TempFile(props) {

    // We are converting it to string because we cannot directl sendy 
    const str=JSON.stringify(props.jsondata)
  return (
      <div>JsonData= {str}</div>
  )
}
