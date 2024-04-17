import {FaHome} from 'react-icons/fa'
import {Link} from 'react-router-dom'

function NotFound() {
  return (
    <div className='text-center hero-content'>
        <div className="max-w-lg">
            <div className="h1 text-8xl font-bold mb-8">
                Oops!
            </div>
            <p className="text-5xl mb-8">404 - Page not found!</p>
            <Link to='/' className='btn btn-primary btn-lg'>
                <FaHome className='mr-2' />
                Back To Home
            </Link>
        </div>
      
    </div>
  )
}

export default NotFound
