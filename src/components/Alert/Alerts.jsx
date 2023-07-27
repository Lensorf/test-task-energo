import React, { useState } from 'react';
import { Alert, Space, Button } from 'antd';
import './Alerts.css';

export default function Alerts() {
  const [error, setError] = useState('');
  console.log(error);
  const ButtonOnClick = () => {
    setError(new Error('Появилась ошибка проверте всё ли верно').toString());
  };
  return (
    <div className="blockAlert">
      Блок Alert
      <br />
      <br />
      <Space direction="vertical" style={{ width: '100%' }}>
        <Alert message="Success Tips" type="success" showIcon />
        <Alert message="Informational Notes" type="info" showIcon />
        <Alert
          message="Warning"
          description="This is a warning notice about copywriting."
          type="warning"
          showIcon
          closable
        />
        <Alert
          message="Error"
          description="This is an error message about copywriting."
          type="error"
          showIcon
        />
      </Space>
      <Button danger onClick={ButtonOnClick}>
        Click me to throw a error
      </Button>
      <div>
        {error !== '' ? error : ''}
      </div>
    </div>
  );
}
