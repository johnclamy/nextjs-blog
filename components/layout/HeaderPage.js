export default function HeaderPage({ children }) {
  return (
    <header>
      <h1 className='display-4 text-capitalize'>
        {children}
      </h1>
      <hr />
    </header>
  )
}