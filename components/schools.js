import React from 'react'

function SchoolListItem({ item }) {
  return (
    <>
      <div>{item.SchoolName}</div>
      <div>{item.AddressStreet}</div>
      <div>{`${item.AddressCity}, ${item.AddressState} ${item.AddressZip}`}</div>
    </>
  )
}

export default function SchoolList(props) {
  const { items, activeItem, onSelectItem } = props
  return (
    <section>
      {
        activeItem && (
          <div className="active">
            <SchoolListItem item={activeItem} />
          </div>
        )
      }
      <ul>
        {/* TODO: map a list of schools, with some info about the school */}
        {/* TODO: add click listener to handle clicks, center the map on the school, and indicate which school is currently selected */}
        {items.map((school) => (
          <li key={school.ID} onClick={() => onSelectItem(school)}>
            <SchoolListItem item={school} />
          </li>
        ))}
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
