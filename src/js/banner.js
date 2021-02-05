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
  return <img alt="" src={imageUrl} />;
}

class Banner extends React.Component {
  constructor() {
    super();
    this.state = { ImgList: [], ImgIndex: 2 };
  }

  componentDidMount() {
    // const time = setInterval(() => {
    //   this.setState({ ImgIndex: (this.state.ImgIndex + 1) % 10 });
    // }, 2000);
    GetApi("banner").then((res) => {
      console.log(res.data.banners);
      this.setState({ ImgList: res.data.banners });
    });
  }

  render() {
    const { ImgList = [], ImgIndex = 0 } = this.state;
    return (
      <>
        <section className="banner">
          <GetBannerImgBg list={ImgList} index={ImgIndex}></GetBannerImgBg>
          <div className="carousel-main">
            <div className="slider">
              <GetBannerImg list={ImgList} index={ImgIndex}></GetBannerImg>
              <ol className="circle"></ol>
            </div>
            <div className="arrow">
              <span className="arr arrow-left">&lt;</span>
              <span className="arr arrow-right">&gt;</span>
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
