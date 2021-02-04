import React from "react";
import Banner from "./banner";
import Record from "./record";
import Singer from "./singer";
import Anchor from "./anchor";
import Toplist from "./toplist";
import NewRecord from "./new-record";

function Header(props) {
  return (
    <header>
      <article className="header-top flex">
        <nav className="font-14">
          <p className="logo block bg-topbar">&nbsp;</p>
          <a
            href="#!"
            id="find-music"
            className="nav-first current"
            title="tab1"
          >
            发现音乐<sub className="cor item block tab1"></sub>
          </a>
          <a href="#!" title="tab2">
            我的音乐<sub className="cor item tab2"></sub>
          </a>
          <a href="#!">朋友</a>
          <a href="#!">商城</a>
          <a href="#!" id="music">
            音乐人
          </a>
          <a href="#!">
            下载客户端<span className="block hot"></span>
          </a>
        </nav>
        <section className="header-right flex">
          <span className="flex">
            <em></em>
            <input type="text" placeholder="音乐/视频/电台/用户" />
          </span>
          <a href="#!" className="creator">
            创作者中心
          </a>
          <button>
            <a href="#!" id="window">
              登录
            </a>
          </button>
          <div className="avatar"></div>
          <i className="login-icon"></i>
        </section>
      </article>
    </header>
  );
}

function Tab(props) {
  return (
    <article className="content">
      <div className="tab1 item block">
        <section className="myPage-hide">
          <section className="header-bottom first-nav">
            <div className="bottom-nav">
              <a href="#!" className="margin">
                推荐
              </a>
              <a href="#!">排行榜</a>
              <a href="#!">歌单</a>
              <a href="#!">主播电台</a>
              <a href="#!">歌手</a>
              <a href="#!">新碟上架</a>
            </div>
          </section>
          <Banner></Banner>
        </section>
        <section className="myPageJump">
          <section className="main">
            <section className="main-left">
              <div className="recommend">
                <a href="#!" className="rec-a">
                  热门推荐
                </a>
                <span className="rec-nav">
                  <a href="#!">华语</a>
                  <a href="#!">流行</a>
                  <a href="#!">摇滚</a>
                  <a href="#!">民谣</a>
                  <a href="#!" className="rec-span-a">
                    电子
                  </a>
                </span>
                <span className="rec-more">
                  <a href="#!">更多</a>
                </span>
              </div>
              <Record />
              <div className="personal-recommendation"></div>
              <div className="recommend">
                <a href="#!" className="rec-a">
                  新碟上架
                </a>
                <span className="rec-more">
                  <a href="#!">更多</a>
                </span>
              </div>
              <NewRecord />
              <div className="recommend">
                <a href="#!" className="rec-a">
                  榜单
                </a>
                <span className="rec-more">
                  <a href="j#!">更多</a>
                </span>
              </div>
              <Toplist />
            </section>

            <section className="main-right">
              <div className="user-login-change">
                <div className="user-login">
                  <p>
                    登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机
                  </p>
                  <a href="#!" className="user-login-btn block">
                    用户登录
                  </a>
                </div>
              </div>
              <div className="singer">
                <a href="#!" className="singer-left">
                  入驻歌手
                </a>
                <a href="#!" className="singer-right">
                  查看全部&gt;
                </a>
              </div>
              <Singer />
              <div className="singer">
                <a href="#!" className="singer-left">
                  热门主播
                </a>
              </div>
              <Anchor />
            </section>
          </section>
        </section>
      </div>
      <div className="tab2 item">
        <div className="second-content"></div>
      </div>
    </article>
  );
}

function Footer(props) {
  return (
    <footer className="flex">
      <section className="footer-left">
        <nav>
          <a href="#!" className="nav-first">
            服务条款
          </a>
          <a href="#!">隐私政策</a>
          <a href="#!">儿童隐私政策</a>
          <a href="#!">版权投诉指引</a>
          <a href="#!">意见反馈</a>
        </nav>
        <p>
          网易公司版权所有&copy;1997-2021&nbsp;&nbsp;杭州乐读科技有限公司运营：浙网文[2018]3506-263号
        </p>
        <p>
          违法和不良信息举报电话：0571-89853516&nbsp;&nbsp;举报邮箱：ncm5990@163.com
        </p>
        <p>
          粤B2-20090191-18&nbsp;&nbsp;工业和信息化部备案管理系统网站&nbsp;
          <img src="img/police.png" alt="" />
          浙公网安备&nbsp;33010902002564号
        </p>
      </section>
      <section className="footer-right">
        <li>
          <button className="footer-pic1"></button>
          <em className="footer-font1" />
        </li>
        <li>
          <button href="#!" className="footer-pic2" />
          <em className="footer-font2" />
        </li>
        <li>
          <button className="footer-pic3"></button>
          <em className="footer-font3"></em>
        </li>
        <li>
          <button className="footer-pic4"></button>
          <em className="footer-font4"></em>
        </li>
        <li>
          <button className="footer-pic5"></button>
          <em className="footer-font5"></em>
        </li>
      </section>
    </footer>
  );
}

class GetHeader extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <>
        <Header />
        <Tab />
        <Footer />
      </>
    );
  }
}

export default GetHeader;
