import React from "react";
import { GetApi } from "./api";
import axios from "axios";

function GetAnchor(props) {
  const box = props.list.map((item, index, str) => {
    return (
      <a href="#!" key={index}>
        <img src={item.data.profile.avatarUrl} alt="" />
        <div>
          <span>{item.data.profile.nickname}</span>
          <p className="font-hidden">{item.data.profile.description}</p>
        </div>
      </a>
    );
  });
  return <div className="singer-anchor">{box}</div>;
}
class Anchor extends React.Component {
  constructor() {
    super();
    this.state = { SingerList: [] };
  }
  componentDidMount() {
    axios
      .all([
        GetApi("user/detail?num=" + Math.random(), {
          uid: 278438485,
        }),
        GetApi("user/detail?num=" + Math.random(), {
          uid: 91239965,
        }),
        GetApi("user/detail?num=" + Math.random(), {
          uid: 324314596,
        }),
        GetApi("user/detail?num=" + Math.random(), {
          uid: 1611157,
        }),
        GetApi("user/detail?num=" + Math.random(), {
          uid: 2313954,
        }),
      ])
      .then((res) => {
        this.setState({ SingerList: res });
      });
  }
  render() {
    const { SingerList = [] } = this.state;
    return <GetAnchor list={SingerList}></GetAnchor>;
  }
}
export default Anchor;
