import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import { addToStoreReadList, addToStoreWishList } from '../../utility/addToDb';

const BookDetail = () => {
  const {bookId}= useParams() ;
  const id = parseInt(bookId);


  const data = useLoaderData();

  const book = data.find(book => book.bookId === id)
  // console.log(data, book, bookId, id)
  const {bookId:currentBookId, image} = book; 

  const handleMarkAsRead = (id) =>{
      /**
       * 1. understand what to store or save: => bookId
       * 2.where to store: database
       * 3.array,list,collection: 
       * 4.check : if the book already read list 
       * 5. if not then add to the book list
       * 6.if yes, donot add the book
       * 
       */
      addToStoreReadList(id)
  }

  const handleWishList = (id) =>{
    addToStoreWishList(id)
  }

  return (
    <div className='my-12'>
      <h2>Book Details:{bookId}</h2>
      <img className='w-36' src={image} alt="" />
      <br />
      <button onClick={() => handleMarkAsRead(bookId)} className="btn btn-outline mr-4 btn-accent"> Mark As Read</button>
      <button onClick={() => handleWishList(bookId)}  className="btn btn-active btn-accent">WishList</button>
    </div>
  )
}

export default BookDetail

