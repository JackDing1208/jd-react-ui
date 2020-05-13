import * as React from 'react';
import Form from './Form';
import {useState, Fragment} from 'react';
import Validator, {noError} from './validator';
import Button from '../button/Button';
import Code from "../Code"

interface FormValue {
  [K: string]: any
}

const usernames = ['jack', 'yoyo', 'alice', 'bob'];
const checkUserName = (username: string, succeed: () => void, fail: () => void) => {
  setTimeout(() => {
    console.log('检查用户名是否存在');
    if (usernames.indexOf(username) >= 0) {
      fail();
    } else {
      succeed();
    }
  }, 1000);
};

const FormExample: React.FunctionComponent = () => {
  const [formData, setFormData] = useState<FormValue>({
    username: 'jackDing1208',
    email: '',
    password: ''
  });
  const [fields] = useState([
    {name: 'username', label: '用户名', input: {type: 'text'}},
    {name: 'email', label: '邮箱', input: {type: 'text'}},
    {name: 'password', label: '密码', input: {type: 'password'}},
  ]);
  const [errors, setErrors] = useState({});
  const checkName = (username: string) => {
    return new Promise<string>((resolve, reject) => {
      checkUserName(username, resolve, () => reject('unique'));
    });
  };
  const onSubmit = () => {
    const rules = [
      {key: 'username', required: true},
      {key: 'username', validator:checkName},
      {key: 'username', minLength: 8, maxLength: 16},
      {key: 'username', pattern: /^[A-Za-z0-9]+$/},
      {key: 'password', required: true},
      {key: 'password', minLength: 8, maxLength: 16},
      {key: 'password', pattern: /^[A-Za-z0-9]+$/},
      {key: 'email', pattern: /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/},
    ];
    //根据实际需要使用校验器
    Validator(formData, rules, (errors) => {
      console.log("errors", errors);
      setErrors(errors);
      if (noError(errors)) {
        alert("通过校验啦！！！")
      }
    });
  };
  const transformError = (message: string) => {
    const map: any = {
      unique: 'username is taken',
      required: 'required',
      minLength: 'too short',
      maxLength: 'too long',
      pattern: 'invalid pattern',
    };
    return map[message];
  };
  return (
    <div>
      <p className={"example-title"}>组件展示</p>
      <Form value={formData}
            fields={fields}
            buttons={
              <Fragment>
                <Button type="submit" fill="dark" style={{width: "200px"}}>提交</Button>
              </Fragment>
            }
            errors={errors}
            transformError={transformError}
            inputWidth={"200px"}
            onChange={(newValue) => setFormData(newValue)}
            onSubmit={onSubmit}
      />
      <p className={"example-title"}>示例代码</p>
      <Code code={require('!!raw-loader!./form.example.tsx').default}/>
    </div>
  );
};

export default FormExample;
