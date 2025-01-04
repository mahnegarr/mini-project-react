import React, { useState } from 'react'
import { books as bookData } from "../constants/mockData"
import BookCard from './BookCard'
import SideCard from './SideCard'
import styles from "./Books.module.css"
import SearchBox from './SearchBox'

function Books() {
    const [books, setBooks] = useState(bookData)
    const [likedBooks, setLikedBooks] = useState([])
    const [search, setSearch] = useState("")

    const handleLikedList = (book, status) => {
        if (status) {
            const newLikedList = likedBooks.filter(i => i.id != book.id)
            setLikedBooks(newLikedList)
        } else {
            setLikedBooks((likedBooks) => [...likedBooks, book])
            console.log(likedBooks.length);

        }

    }


    const searchHandler = () => {
        if (search) {
            const newBooks = bookData.filter(b => b.title.toLowerCase().includes(search))
            setBooks(newBooks)
        } else {
            setBooks(bookData)
        }
    }
    return (
        <>
            <SearchBox search={search} setSearch={setSearch} searchHandler={searchHandler} />
            <div className={styles.container}>
                <div className={styles.cards}>
                    {books.map(book => (
                        <BookCard key={book.id} data={book} handleLikedList={handleLikedList} />
                    ))}
                </div>
                <div >

                    {!!likedBooks.length && (<div className={styles.favorite}>  <h4>Favorites</h4> {likedBooks.map(book => <SideCard key={book.id} data={book} />)} </div>)}
                </div>
            </div>
        </>
    )
}

export default Books