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
  const circle = props.list.map((item, index) => {
    return (
      <li
        key={index}
        onClick={(e) => props.change(e, index)}
        style={{
          backgroundPosition: props.index === index ? "-16px -343px" : "",
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
    this.state = { ImgList: [], ImgIndex: 2 };
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({ ImgIndex: (this.state.ImgIndex + 1) % 10 });
    }, 2000);

    GetApi("banner").then((res) => {
      console.log(res.data.banners);
      this.setState({ ImgList: res.data.banners });
    });
  }

  clear() {
    clearInterval(this.timer);
  }

  start() {
    this.timer = setInterval(() => {
      this.setState({ ImgIndex: (this.state.ImgIndex + 1) % 10 });
    }, 2000);
  }

  right() {
    clearInterval(this.timer);
    this.setState({ ImgIndex: (this.state.ImgIndex + 1) % 10 });
  }

  left() {
    clearInterval(this.timer);
    this.setState({ ImgIndex: (this.state.ImgIndex + 9) % 10 });
  }

  change = (e, index) => {
    e.preventDefault();
    console.log(index);
    this.setState({ ImgIndex: index });
  };

  render() {
    const { ImgList = [], ImgIndex = 0 } = this.state;
    return (
      <>
        <section className="banner">
          <GetBannerImgBg list={ImgList} index={ImgIndex}></GetBannerImgBg>
          <div className="carousel-main">
            <div
              className="slider"
              onMouseEnter={this.clear.bind(this)}
              onMouseLeave={this.start.bind(this)}
            >
              <GetBannerImg
                list={ImgList}
                index={ImgIndex}
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
