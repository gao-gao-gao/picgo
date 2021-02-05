import React from "react";
import { GetApi } from "./api";
import axios from "axios";

function GetNewRecord(props) {
  const box = props.img.map((item, index) => {
    return (
      <li className="bg-index" key={index}>
        <img src={item.data.album.picUrl} alt="" />
        <a href="#!" className="bg-coverall">
          &nbsp;
        </a>
        <p className="font-hidden">{item.data.album.name}</p>
        <p className="roll-font2">{item.data.album.artist.name}</p>
      </li>
    );
  });
  return <ul className="u1">{box}</ul>;
}

class NewRecord extends React.Component {
  constructor() {
    super();
    this.state = { ImgList: [] };
  }

  componentDidMount() {
    axios
      .all([
        GetApi("album?num=" + Math.random(), {
          id: 121685371,
        }),
        GetApi("album?num=" + Math.random(), {
          id: 121295014,
        }),
        GetApi("album?num=" + Math.random(), {
          id: 121012393,
        }),
        GetApi("album?num=" + Math.random(), {
          id: 121480001,
        }),
        GetApi("album?num=" + Math.random(), {
          id: 120924053,
        }),
      ])
      .then((res) => {
        this.setState({ ImgList: res });
      });
  }

  render() {
    const { ImgList = [] } = this.state;
    return (
      <div className="new-record">
        <div className="new-record-roll">
          <div className="roll">
            <GetNewRecord img={ImgList}></GetNewRecord>
            <ul className="u2"></ul>
            <ul className="u3"></ul>
            <ul className="u4"></ul>
          </div>
        </div>
        <div className="arrow-left"></div>
        <div className="arrow-right"></div>
      </div>
    );
  }
}

export default NewRecord;
