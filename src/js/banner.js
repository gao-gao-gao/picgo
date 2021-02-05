import React from "react";
import { GetApi } from "./api";

function GetBannerImgBg(props) {
  const { imageUrl = "" } = props.list[props.index]
    ? props.list[props.index]
    : props.list;

  return (
    <>
      <div className="filter">
        <div
          className="carousel"
          style={{
            backgroundImage: "url(" + imageUrl + ")",
          }}
        ></div>
      </div>
    </>
  );
}

function GetBannerImg(props) {
  const { imageUrl = "" } = props.list[props.index]
    ? props.list[props.index]
    : props.list;
  const circle = props.list.map((item, i) => {
    return (
      <li
        key={i}
        onClick={(e) => props.change(e, i)}
        style={{
          backgroundPosition: props.i === i ? "-16px -343px" : "",
        }}
      ></li>
    );
  });
  return (
    <>
      <img alt="" src={imageUrl} />
      <ol className="circle">{circle}</ol>
    </>
  );
}

class Banner extends React.Component {
  constructor() {
    super();
    this.state = { imglist: [], imgindex: 2 };
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({ imgindex: (this.state.imgindex + 1) % 10 });
    }, 2000);

    GetApi("banner").then((res) => {
      console.log(res.data.banners);
      this.setState({ imglist: res.data.banners });
    });
  }

  clear() {
    clearInterval(this.timer);
  }

  start() {
    this.timer = setInterval(() => {
      this.setState({ imgindex: (this.state.imgindex + 1) % 10 });
    }, 2000);
  }

  right() {
    clearInterval(this.timer);
    this.setState({ imgindex: (this.state.imgindex + 1) % 10 });
  }

  left() {
    clearInterval(this.timer);
    this.setState({ imgindex: (this.state.imgindex + 9) % 10 });
  }

  change = (e, i) => {
    e.preventDefault();
    console.log(i);
    this.setState({ imgindex: i });
  };

  render() {
    const { imglist = [], imgindex = 0 } = this.state;
    return (
      <>
        <section className="banner">
          <GetBannerImgBg list={imglist} index={imgindex}></GetBannerImgBg>
          <div className="carousel-main">
            <div
              className="slider"
              onMouseEnter={this.clear.bind(this)}
              onMouseLeave={this.start.bind(this)}
            >
              <GetBannerImg
                list={imglist}
                index={imgindex}
                i={imgindex}
                change={this.change}
              ></GetBannerImg>
            </div>
            <div className="arrow">
              <span className="arr arrow-left" onClick={this.left.bind(this)}>
                &lt;
              </span>
              <span className="arr arrow-right" onClick={this.right.bind(this)}>
                &gt;
              </span>
            </div>
            <div className="upload">
              <a href="#!" className="change">
                &nbsp;
              </a>
              <p>PC 安卓 iPhone WP iPad Mac 六大客户端</p>
            </div>
          </div>
        </section>
      </>
    );
  }
}
export default Banner;
