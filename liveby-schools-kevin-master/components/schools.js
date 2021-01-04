import React from 'react'

export default function SchoolList (props) {
  return (
    <section>
      <div className='active' />
      <ul>
        {/* TODO: map a list of schools, with some info about the school */}
        {/* TODO: add click listener to handle clicks, center the map on the school, and indicate which school is currently selected */}
      </ul>

      <style jsx>{`
        section {
          max-height: 100vh;
          display: flex;
          flex-direction: column;
        }
        ul {
          list-style: none;
          overflow: auto;
          margin: 0;
          padding: 0;
        }
        li {
          margin: 0;
          padding: 1em 2em;
          cursor: pointer;
          color: white;
          background-color: blue;
        }
        .active {
          margin: 1em 1em 2em;
        }
      `}</style>
    </section>
  )
}
