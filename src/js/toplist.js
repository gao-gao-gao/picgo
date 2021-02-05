import React from "react";
import { GetApi } from "./api";
// import axios from "axios";

function GeToplist(props) {
  const ImgBox = props.list.slice(0, 3).map((item, index) => {
    return (
      <li className="ListImg" key={index}>
        <div className="list-padding">
          <div className="list-img">
            <img src={item.coverImgUrl} alt="" />
            <a href="#!">&nbsp;</a>
          </div>
          <a href="#!" className="list-font">
            <h3> {item.name}</h3>
          </a>
          <span></span>
        </div>
      </li>
    );
  });
  const NameBox1 = props.name1.slice(0, 10).map((item, index) => {
    return (
      <li key={index}>
        <span>{index + 1}</span>
        <a href="#!" className="sing-name font-hidden">
          {item.name}
        </a>
      </li>
    );
  });
  const NameBox2 = props.name2.slice(0, 10).map((item, index) => {
    return (
      <li key={index}>
        <span>{index + 1}</span>
        <a href="#!" className="sing-name font-hidden">
          {item.name}
        </a>
      </li>
    );
  });
  const NameBox3 = props.name3.slice(0, 10).map((item, index) => {
    return (
      <li key={index}>
        <span>{index + 1}</span>
        <a href="#!" className="sing-name font-hidden">
          {item.name}
        </a>
      </li>
    );
  });

  return (
    <div className="list">
      <ul className="list-top">{ImgBox}</ul>
      <div className="list-bottom">
        <ol className="list-sing">{NameBox1}</ol>
        <ol className="list-sing">{NameBox2}</ol>
        <ol className="list-sing">{NameBox3}</ol>
      </div>
      <div className="toplist-all">
        <a href="#!">查看全部&gt;</a>
        <a href="#!">查看全部&gt;</a>
        <a href="#!">查看全部&gt;</a>
      </div>
    </div>
  );
}
class Toplist extends React.Component {
  constructor() {
    super();
    this.state = { toplist: [], name1: [], name2: [], name3: [] };
  }
  componentDidMount() {
    GetApi("toplist").then((res) => {
      this.setState({ toplist: res.data.list });
    });
    GetApi("playlist/detail?num=" + Math.random(), {
      id: 19723756,
    }).then((res) => {
      this.setState({ name1: res.data.playlist.tracks });
    });
    GetApi("playlist/detail?num=" + Math.random(), {
      id: 3779629,
    }).then((res) => {
      this.setState({ name2: res.data.playlist.tracks });
    });
    GetApi("playlist/detail?num=" + Math.random(), {
      id: 2884035,
    }).then((res) => {
      this.setState({ name3: res.data.playlist.tracks });
    });
  }
  render() {
    const { toplist = [], name1 = [], name2 = [], name3 = [] } = this.state;
    return (
      <GeToplist
        list={toplist}
        name1={name1}
        name2={name2}
        name3={name3}
      ></GeToplist>
    );
  }
}
export default Toplist;
