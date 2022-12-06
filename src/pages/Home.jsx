import React from 'react'

export default function Home() {

  return (
    <section className='section'>
      <div className='content'>
        <div className='cards'>
          <div className="card-box">top card 1 content</div>
          <div className="card-box">top card 2 content</div>
          <div className="card-box">top card 3 content</div>
        </div>
        <div className='main'>
          <div className='main-left'>
            <div>left section content</div>
          </div>
          <div className='main-right'>
            <div className="right-box">right section box 1 content</div>
            <div className="right-box">right section box 2 content</div>
            <div className="right-box">right section box 3 content</div>
          </div>
        </div>
      </div>
    </section>
  )
}