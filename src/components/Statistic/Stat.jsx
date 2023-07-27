import React from 'react';
import {
  Col, Row, Statistic, Card,
} from 'antd';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import './Stat.css';

export default function Stat() {
  return (
    <div className="statisticBlock">
      <Row gutter={16}>
        <Col span={12}>
          <Card bordered={false}>
            <Statistic
              title="Active"
              value={16.58}
              precision={2}
              valueStyle={{
                color: '#3f8600',
              }}
              prefix={<ArrowUpOutlined />}
              suffix="%"
            />
          </Card>
        </Col>
        <Col span={12}>
          <Card bordered={false}>
            <Statistic
              title="Idle"
              value={4.3}
              precision={2}
              valueStyle={{
                color: '#cc0033',
              }}
              prefix={<ArrowDownOutlined />}
              suffix="%"
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
}
