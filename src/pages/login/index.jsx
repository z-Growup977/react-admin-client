import Header from './header/index.jsx';
import Content from './content/index.jsx';
import './css/index.less';
// 登录的路由组件
function Login () {

  return (
    <div className='login'>
      <Header />
      <Content />
    </div>
  )
}
export default Login