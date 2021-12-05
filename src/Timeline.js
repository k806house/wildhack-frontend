import { React, useState } from "react";
import "./Timeline.css";

import "antd/dist/antd.css";
import { Table, Timeline, Button, Space, Affix } from "antd";
import { Row, Col } from "antd";
import { Drawer } from "antd";
import { DislikeOutlined, LikeOutlined } from "@ant-design/icons";

const TimelineComp = (props) => {
  var dateBuckets = props.dateBuckets;
  var data = props.data;

  const [container, setContainer] = useState(null);
  const [visible, setVisible] = useState(false);
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  const columns = [
    {
      title: "Дата",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Событие",
      dataIndex: "title",
      key: "title",
      render: (text) => text
        // text != undefined && text.length > 100 ? (
        //   <span>
        //     {text.substr(0, 100)}
        //     <a
        //       onClick={() => {
        //         setText(text);
        //         showDrawer();
        //       }}>
        //       {" "}
        //       ...
        //     </a>
        //   </span>
        // ) : (
        //   text
        // ),
    },
    {
      title: "Локация",
      dataIndex: "location",
      render: (text, record, rowIndex) => (
        <a
          onClick={() => {
            props.onTableClick(rowIndex);
          }}
        >
          {text}
        </a>
      ),
    },
  ];

  return (
    <Row>
      <Col span={6}>
        <Timeline mode="right" id="timeline" ref={setContainer}>
          <Affix target={() => container}>
            <Timeline.Item id="timeline-item"> </Timeline.Item>
            {dateBuckets.map((bucket, key) => (
              <Timeline.Item id="timeline-item" key={key}>
                {bucket.includes(".") ? (
                  <div>
                    <span>{bucket.split(".")[1] + ",   "}</span>
                    <a onClick={() => props.onClick(key)}>
                      {getMonth(bucket.split(".")[0])}
                    </a>
                  </div>
                ) : (
                  <a onClick={() => props.onClick(key)}>{getMonth(bucket)}</a>
                )}
              </Timeline.Item>
            ))}
          </Affix>
        </Timeline>
      </Col>
      <Col span={18}>
        <h1>Come to Kam!</h1>
        <Table
          id="table"
          pagination={false}
          columns={columns}
          dataSource={data}
          scroll={{ y: 700 }}
          onRow={(record, rowIndex) => {
            return {
              onClick: event => {setTitle(record.title); setText(record.text); showDrawer()}, // click row
            };
          }}
        />
      </Col>
      <Col>
        <Drawer
          title={title}
          placement="left"
          width={1000}
          onClose={onClose}
          visible={visible}
        >
          {text}
        </Drawer>
      </Col>
    </Row>
  );
};

export function getMonth(digit) {
  switch (+digit) {
    case 1:
      return "Январь";
    case 2:
      return "Февраль";
    case 3:
      return "Март";
    case 4:
      return "Апрель";
    case 5:
      return "Май";
    case 6:
      return "Июнь";
    case 7:
      return "Июль";
    case 8:
      return "Август";
    case 9:
      return "Сентябрь";
    case 10:
      return "Октябрь";
    case 11:
      return "Ноябрь";
    case 12:
      return "Декабрь";
  }
}

export default TimelineComp;
