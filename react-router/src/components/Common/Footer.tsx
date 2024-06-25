import {Link, useNavigate} from 'react-router-dom'

const Footer = () => {

  const navigate = useNavigate()

  return (
    <footer className="footer">
      <div className="footer-links">
        <p onClick={() => navigate('/')} className="footer">Home</p>
        <p onClick={() => navigate('/about')} className="footer">About</p>
        <p onClick={() => navigate('/contacts')} className="footer">Contacts</p>
        <p onClick={() => navigate('/login')} className="footer">Login</p>
        <p onClick={() => navigate('/registration')} className="footer">Registration</p>
      </div>
    </footer>
  )
}

export default Footer