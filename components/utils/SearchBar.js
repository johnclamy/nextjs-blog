import { useState, useRef } from 'react'
import { FaSearch } from 'react-icons/fa'
import styles from '../../styles/SearchBar.module.css'

export default function Searchbar () {
  const [ text, setText ] = useState('')
  const [ isActive, setIsActive ] = useState(false)
  const searchInput = useRef()
  const focusSearchInput = () => searchInput.current.focus()
  const searchStyle = isActive ? {
    border: '1px solid #C2C2C2',
    width: '250px',
    transition: 'width 0.5s ease-in'
  } : {
    border: '0',
    width: '0px',
    transition: 'width 0.3s ease-out'
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (text) {
      console.log(`Data submitted ${text}`)
      setText('')
    } else {
        if (isActive) {
          focusSearchInput()
        } else {
          return null
        }
      }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type='text'
        ref={searchInput}
        value={text}
        placeholder='Search...'
        onChange={e => setText(e.target.value)}
        className={styles.input}
        style={searchStyle}
      />
      <button
        className={styles.button}
        onClick={() => setIsActive(!isActive)} type='submit'
      >
        <FaSearch title='Search' />
      </button>
    </form>
  )
}