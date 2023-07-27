/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect, useRef, useState } from 'react';
import { PlusOutlined, CloseCircleOutlined } from '@ant-design/icons';
import {
  Input, Tag, theme, Space,
} from 'antd';
import './Tags.css';

export default function Tags() {
  const { token } = theme.useToken();
  const [tags, setTags] = useState(['Tag 1', 'Tag 2', 'Tag 3']);
  const [inputVisible, setInputVisible] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputVisible) {
      inputRef.current?.focus();
    }
  }, [inputVisible]);
  const handleClose = (removedTag) => {
    const newTags = tags.filter((tag) => tag !== removedTag);
    setTags(newTags);
  };
  const showInput = () => {
    setInputVisible(true);
  };
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleInputConfirm = () => {
    if (inputValue && tags.indexOf(inputValue) === -1) {
      setTags([...tags, inputValue]);
    }
    setInputVisible(false);
    setInputValue('');
  };

  const log = (e) => {
    console.log(e);
  };

  const preventDefault = (e) => {
    e.preventDefault();
    console.log('Clicked! But prevent default.');
  };

  return (
    <>
      <div style={{
        marginBottom: 16,
      }}
      >
        <Space size={[0, 8]} wrap>
          <Tag>Tag 1</Tag>
          <Tag>
            <a href="https://github.com/ant-design/ant-design/issues/1862">Link</a>
          </Tag>
          <Tag color="error" closeIcon onClose={preventDefault}>
            Prevent Default
          </Tag>
          <Tag closeIcon={<CloseCircleOutlined />} onClose={log}>
            Tag 2
          </Tag>
        </Space>
      </div>

      <div
        style={{
          marginBottom: 16,
        }}
      >
        <div style={{
          marginBottom: 8,
        }}
        >
          Отдельный блок с тегами

        </div>
        {tags?.map((tag) => (
          <Tag
            key={tag}
            color="green"
            closable
            onClose={(e) => {
              e.preventDefault();
              handleClose(tag);
            }}
          >
            {tag}
          </Tag>
        ))}
      </div>
      {inputVisible ? (
        <Input
          ref={inputRef}
          type="text"
          size="small"
          style={{
            width: 78,
          }}
          value={inputValue}
          onChange={handleInputChange}
          onBlur={handleInputConfirm}
          onPressEnter={handleInputConfirm}
        />
      ) : (
        <Tag onClick={showInput}>
          <PlusOutlined />
          {' '}
          New Tag
        </Tag>
      )}
    </>
  );
}
