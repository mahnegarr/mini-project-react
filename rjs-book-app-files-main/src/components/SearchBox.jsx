import React from 'react'
import { BiSearchAlt } from "react-icons/bi";
import styles from "./SearchBox.module.css";

function SearchBox({search,setSearch,searchHandler}) {

    return (
        <div className={styles.search}>
            <input type="text" value={search} onChange={e=> setSearch(e.target.value.toLowerCase())} />
            <button onClick={searchHandler} ><BiSearchAlt /></button>
        </div>
    )
}

export default SearchBox