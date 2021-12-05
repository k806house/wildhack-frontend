import { React, useState } from "react";
import "./Timeline.css";

import "antd/dist/antd.css";
import { Table, Timeline, Button, Space } from "antd";
import { Row, Col } from "antd";
import { DislikeOutlined, LikeOutlined } from '@ant-design/icons';


const TimelineComp = (props) => {
  var years = props.years;
  var data = props.data;
  const columns = [
    {
      title: "Дата",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Событие",
      dataIndex: "event",
      key: "event",
    },
    {
      title: "Локация",
      dataIndex: "location",
      render: (text, record, rowIndex) => <a onClick={() => {props.onTableClick(rowIndex); console.log(record); console.log(rowIndex)}}>{text}</a>,
    },
    {
      title: "Событие важно?",
      dataIndex: "isimportant",
      render: () => (
        <Space size="middle">
          <Button>
            <LikeOutlined /> 
          </Button>
          <Button>
            <DislikeOutlined />
          </Button>
        </Space>
      ),
    }
  ];
  return (
    <Row>
      <Col span={8}>
        <Timeline mode="right" id="timeline">
          {years.map((year, key) => (
            <Timeline.Item id="timeline-item" key={key}>
              <a id="timeline-item" onClick={() => props.onClick(key)}>
                {year}
              </a>
            </Timeline.Item>
          ))}
        </Timeline>
      </Col>
      <Col span={16}>
        <Table
          id="table"
          pagination={false}
          columns={columns}
          dataSource={data}
          scroll={{ y: 600 }}
        />
      </Col>
    </Row>
  );
};

export default TimelineComp;
