import React from 'react'
import './values.css'

const values = [
  {title:'Strategy as foundation',body:'We start with why and build the blueprint your brand can execute against.'},
  {title:'Design with intent',body:'Every visual choice is made to support clarity, recognition, and utility.'},
  {title:'Collaboration as method',body:'We partner closely with clients and prioritize small businesses and nonprofits.'}
]

export default function ValuesPreview(){
  return (
    <section style={{marginTop:48}}>
      <h2>How we work</h2>
      <div className="values-grid">
        {values.map((v,i)=> (
          <div key={i} className="value">
            <h3>{v.title}</h3>
            <p>{v.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
