import Spinner from 'react-bootstrap/Spinner'

export default function PostCardSkeleton() {
  return (
    <div className='p-2 d-flex justify-content-center align-items-center'>
      <div className='bg-dark' style={{ maxWidth: '80%', height: '200px' }}></div>
      <div className='bg-light' style={{ maxWidth: '80%', height: '40px', marginTop: '20px' }}>
        <Spinner animation='border' role='status' variant='info'>
          <span className='visually-hidden'>Loading...</span>
        </Spinner>
      </div>
    </div>
  )
}
