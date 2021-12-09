import { Link } from  'react-router-dom';
import headerLogo from '../images/header_logo.png';

function Header() {
  return (
    <div className="header">
        <Link className='header_bgm' to='/login'  >
          <img src={headerLogo} alt="" />
        </Link>
        <div className='header_title'>
          <h1>React项目：后台管理系统</h1>
        </div>
    </div>
  )
}
export default Header