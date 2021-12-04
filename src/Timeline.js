import {React, useState} from "react";
import "./Timeline.css"

import 'antd/dist/antd.css';
import { Table, Tag, Space, Divider } from 'antd';

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
      event: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      date: '13.10.2000',
      event: 'Sidney No. 1 Lake Park',
    },
  ];

const TimelineComp = () => {
    return (
        <>
            <Divider orientation="left">2000</Divider>
            <Table pagination={false} columns={columns} dataSource={data} />

            <Divider orientation="left">2005</Divider>
            <Table pagination={false} columns={columns} dataSource={data} />
        </>
    );
  };
  
  export default TimelineComp;