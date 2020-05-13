import * as React from 'react';
import Form from './form';
import {useState, Fragment} from 'react';
import Validator, {noError} from './validator';
import Button from '../button/Button';

interface FormValue {
  [K: string]: any
}

const usernames = ['jack', 'yoyo', 'alice', 'bob'];
const checkUserName = (username: string, succeed: () => void, fail: () => void) => {
  setTimeout(() => {
    console.log('检查了用户名是否存在');
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
    password: ''
  });
  const [fields] = useState([
    {name: 'username', label: '用户名', input: {type: 'text'}},
    {name: 'password', label: '密码', input: {type: 'password'}},
  ]);
  const [errors, setErrors] = useState({});
  const validator = (username: string) => {
    return new Promise<string>((resolve, reject) => {
      checkUserName(username, resolve, () => reject('unique'));
    });
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const rules = [
      {key: 'username', required: true},
      {key: 'username', validator},
      {key: 'username', minLength: 8, maxLength: 16},
      {key: 'username', pattern: /^[A-Za-z0-9]+$/},
      {key: 'password', required: true},
      {key: 'password', minLength: 8, maxLength: 16},
      {key: 'password', pattern: /^[A-Za-z0-9]+$/},

      // {key: 'email', pattern: /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/},
    ];
    Validator(formData, rules, (errors) => {
      console.log(errors);
      setErrors(errors);
      if (noError(errors)) {

      }
    });
  };
  const transformError = (message: string) => {
    const map: any = {
      unique: 'username is taken',
      required: 'required',
      minLength: 'too short',
      maxLength: 'too long',
    };
    return map[message];
  };
  return (
    <div>
      <Form value={formData}
            fields={fields}
            buttons={
              <Fragment>
                <Button type="submit" fill="dark" style={{width:"16em"}}>提交</Button>
              </Fragment>
            }
            errors={errors}
            transformError={transformError}
            inputWidth={"16em"}
            onChange={(newValue) => setFormData(newValue)}
            onSubmit={onSubmit}
      />
    </div>
  );
};

export default FormExample;
