import React from "react";
import { GetApi } from "./api";
import axios from "axios";

function GetSinger(props) {
  const box = props.list.map((item, index, str) => {
    return (
      <a href="#!" key={index}>
        <img src={item.data.profile.avatarUrl} alt="" />
        <div>
          <span>{item.data.profile.artistName}</span>
          <p className="font-hidden">{item.data.profile.description}</p>
        </div>
      </a>
    );
  });
  return <div className="singer-content">{box}</div>;
}
class Singer extends React.Component {
  constructor() {
    super();
    this.state = { singerlist: [] };
  }
  componentDidMount() {
    axios
      .all([
        GetApi("user/detail?num=" + Math.random(), {
          uid: 29879272,
        }),
        GetApi("user/detail?num=" + Math.random(), {
          uid: 100167517,
        }),
        GetApi("user/detail?num=" + Math.random(), {
          uid: 58426904,
        }),
        GetApi("user/detail?num=" + Math.random(), {
          uid: 93504818,
        }),
        GetApi("user/detail?num=" + Math.random(), {
          uid: 46998208,
        }),
      ])
      .then((res) => {
        this.setState({ singerlist: res });
      });
  }
  render() {
    const { singerlist = [] } = this.state;
    return <GetSinger list={singerlist}></GetSinger>;
  }
}
export default Singer;
