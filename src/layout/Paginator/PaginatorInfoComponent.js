import React from 'react';

export const PaginatorInfoComponent = ({from, to, total}) => {
  return (
    <div className='paginatorInfoContainer'>
      <p>{from} - {to} de {total} </p>
    </div>
  )
}