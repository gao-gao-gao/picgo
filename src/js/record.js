import React from "react";
import { GetApi } from "./api";

function GetRecord(props) {
  const box = props.list.slice(0, 8).map((item, index) => {
    return (
      <span key={index}>
        <img alt="" src={item.picUrl} />
        <p>{item.name}</p>
        <a href="#!">&nbsp;</a>
        <em></em>
        <i></i>
        <li></li>
      </span>
    );
  });
  return (
    <div className="record">
      <div className="record-img">{box}</div>
    </div>
  );
}

class Record extends React.Component {
  constructor() {
    super();
    this.state = { recordlist: [] };
  }

  componentDidMount() {
    GetApi("personalized", "limit").then((res) => {
      this.setState({ recordlist: res.data.result });
    });
  }

  render() {
    const { recordlist = [] } = this.state;
    return <GetRecord list={recordlist}></GetRecord>;
  }
}

export default Record;
