import React, { createRef } from 'react';
import { Form, Input, Button, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

function Content() {
  const formRef = createRef();

  // 验证成功的回调函数
  const onFinish =  (event) => {
    message.success('登录成功');
  };
  // 验证失败的回调函数
  const onFinishFailed = (errorInfo) => {
    message.warn('登录失败')
    console.log('Failed:', errorInfo)
  }



  return (
    <div className='content'>
      <h2>用户登录</h2>
      <section>
        <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        ref={formRef}
        >
          <Form.Item
            name="username"
            rules={[
              /* { required: true, whitespace:true, message: '请输入用户名!' },
              { min: 4, message: '用户名不能小于4位哦~' },
              { max: 12, message: '用户名不能大于12位哦~' },
              {pattern: /^[a-zA-Z0-9_]+$/, message: '用户名必须是字母、数字下划线组成'}, */
              {validator: validate},
            ]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              /* { required: true, message: '请输入密码!' },
              { min: 4, message: '密码不能小于4位哦~' },
              { max: 12, message: '密码不能大于12位哦~' },
              {pattern: /^[a-zA-Z0-9_]+$/, message: '密码必须是字母、数字下划线组成'} */
              {validator: validate,}
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="密码"
            />
          </Form.Item>

          <Form.Item>
            <Button type="primary" block htmlType="submit" className="login-form-button">
              登录
            </Button>
          </Form.Item>
        </Form>
      </section>
    </div>
  )
}
//  对输入框进行自定义验证
const validate = (rule, value) => {
  return new Promise((resolve, reject) => {
    if(!value) {
      reject('请输入密码');
    } else if(value.length < 4) {
      reject('密码不能小于4位哦~');
    } else if(value.length > 12) {
      reject('密码不能大于12位哦~');
    } else if(!/^[a-zA-Z0-9_]+$/.test(value)) {
      reject('密码必须是字母、数字下划线组成');
    } else {
      resolve();
    }
  }) 
}

/*
  1. 前台表单验证
  2. 收集表单输入数据
*/
export default Content  