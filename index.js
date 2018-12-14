import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Table, Select, Input, Button } from "antd";

function App() {
  const datas = [
    {
      row: 0,
      selectValue: "",
      inputValue: ""
    }
  ];
  const selectDatas = ["React", "Vue", "Angular"];

  return (
    <div style={{ margin: 100 }}>
      <h1>AntDesign Demo</h1>
      <hr />
      <br />
      <Table
        className="td-edit-table"
        rowKey="row"
        dataSource={datas}
        size="small"
        columns={[
          {
            title: "体温",
            dataIndex: "selectValue",
            width: "100px",
            className: "td-col",
            render: (text, record) => (
              <div className="td-edit-td">
                <Select
                  showArrow
                  allowClear
                  className="table-select"
                  mode="combobox"
                  optionFilterProp="children"
                  size="small"
                  filterOption={false}
                >
                  {selectDatas.map(value => (
                    <Select.Option key={value}>{value}</Select.Option>
                  ))}
                </Select>
              </div>
            )
          },
          {
            title: "脉搏",
            dataIndex: "inputValue",
            width: "100px",
            className: "td-col",
            render: (text, record) => (
              <Input size="small" className="table-select" />
            )
          },
          {
            title: "呼吸",
            dataIndex: "breathe",
            width: "100px",
            className: "td-col",
            render: (text, record) => (
              <Input size="small" className="table-select" />
            )
          },
          {
            title: "SPO2",
            dataIndex: "spo2",
            width: "100px",
            className: "td-col",
            render: (text, record) => (
              <Input size="small" className="table-select" />
            )
          }
        ]}
      />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
