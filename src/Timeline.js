import {React, useState} from "react";
import "./Timeline.css"

import 'antd/dist/antd.css';
import { Table, Divider, Timeline } from 'antd';

import { Layout } from 'antd';
import { Row, Col } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

const columns = [
    {
      title: 'Дата',
      dataIndex: 'date',
      key: 'date',
      render: text => <a>{text}</a>,
    },
    {
      title: 'Событие',
      dataIndex: 'event',
      key: 'event',
    }
  ];
  
  const data = [
    {
      key: '1',
      date: '10.05.2000',
      event: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      date: '12.08.2000',
      event: 'London No. 1 Lake Parkли илавитовив aвли илавитовив arаломвли илавитовив arkоомвли илавитовив arkормвли илавитовив arkор илавитовив',
    },
    {
      key: '3',
      date: '13.10.2000',
      event: 'Sidney No. 1 Lake Park',
    },
  ];

const TimelineComp = () => {
    return (
        <div id="timeline-container">
          <Row>
            <Col span={4}>
              <Timeline mode="right">
                <Timeline.Item>
                    <a>2020</a>
                </Timeline.Item>
                <Timeline.Item>
                    <a>2020</a>
                </Timeline.Item>
                <Timeline.Item>
                    <a>2020</a>
                </Timeline.Item>
                <Timeline.Item>
                    <a>2020</a>
                </Timeline.Item>
            </Timeline>
            </Col>
            <Col span={13}>
              <Table pagination={false} columns={columns} dataSource={data} />
            </Col>
          </Row>
        </div>

    );
  };
  
  export default TimelineComp;