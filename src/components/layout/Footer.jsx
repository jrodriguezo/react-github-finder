import { FaGithub } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Footer() {
    const footerYear = new Date().getFullYear()

  return <footer class="p-10 footer bg-base-200 text-base-content footer-center">
  <div class="grid grid-flow-col gap-4">
    <Link to='/about' className="link link-hover">
        About us
    </Link>    
  </div>

  <div>
    <div class="grid grid-flow-col gap-4">
      <a href="https://github.com/jrodriguezo">
        <FaGithub className='inline pr-2 text-3xl' />
      </a> 
    </div>
  </div> 
  <div>
    <p>Copyright © {footerYear} - All right reserved by @jrodriguezo</p>
  </div>
</footer>
}

export default Footer;
