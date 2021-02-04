import React from "react";
import { GetApi } from "./api";
import axios from "axios";
// import xhr from "./xhr";

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
    this.state = { SingerList: [] };
  }
  componentDidMount() {
    // axios({
    //   method: "post",
    //   url: "http://localhost:3000/user/detail",
    //   data: {
    //     uid: 100167517,
    //   },
    // }).then((res) => console.log(res));
    axios
      .all([
        GetApi("user/detail?timerstamp=" + new Date().getTime(), {
          uid: 29879272,
        }),
        GetApi("user/detail?timerstamp=" + new Date().getTime(), {
          uid: 100167517,
        }),
        GetApi("user/detail?timerstamp=" + new Date().getTime(), {
          uid: 58426904,
        }),
        GetApi("user/detail?timerstamp=" + new Date().getTime(), {
          uid: 93504818,
        }),
        GetApi("user/detail?timerstamp=" + new Date().getTime(), {
          uid: 46998208,
        }),
      ])
      .then((res) => {
        this.setState({ SingerList: res });
      });
  }
  render() {
    const { SingerList = [] } = this.state;
    return <GetSinger list={SingerList}></GetSinger>;
  }
}
export default Singer;
