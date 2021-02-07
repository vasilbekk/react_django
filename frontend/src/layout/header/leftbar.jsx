import React, { Fragment, useState, useLayoutEffect, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap'
import { X, Layers, DollarSign, Plus, GitPullRequest, User, Users, UserMinus, UserCheck, Airplay, Zap,Heart,Inbox, AlignCenter } from 'react-feather'
import { Link } from 'react-router-dom'
import { errorPages, authPages, usefullPages, comingsoonPages } from './pages'
import {BonusUi,MegaMenu,ErrorPage,Authentication,UsefullPages,ComingSoon, FileManager,SocialApp,UserEdit,UsersCards,UserProfile,KanbanBoard,Bookmark,LevelMenu} from '../../constant'
const Leftbar = (props) => {

  const [bonusui, setBonusUI] = useState(false)
  const [levelMenu, setLevelMenu] = useState(false)
  const [sidebartoggle, setSidebartoggle] = useState(false)
  const width = useWindowSize()

  function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
      function updateSize() {
        setSize(window.innerWidth);
      }
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
  }


  useEffect(() => {

    var ignoreClick_On_Out_side_Element = document.getElementById('out_side_click');
    var ignoreClick_On_Main_Nav_Element = document.getElementById('sidebar-menu');
    document.addEventListener('click', function(event) {
        var isClickOutSideElement = ignoreClick_On_Out_side_Element.contains(event.target);
        var isClickMainNavElement = ignoreClick_On_Main_Nav_Element.contains(event.target);
        if (window.innerWidth <= 991 && !isClickOutSideElement && !isClickMainNavElement) {
            //Do something click is outside specified element
            document.querySelector(".page-header").className = "page-header close_icon";
            document.querySelector(".sidebar-wrapper").className = "sidebar-wrapper close_icon "
        }
    });

  }, [width])


  const responsive_openCloseSidebar = (toggle) => {
    if(width <= 991){
      // setBonusUI(false)
      document.querySelector(".page-header").className = "page-header";
      document.querySelector(".sidebar-wrapper").className = "sidebar-wrapper "
    }else{
      if (toggle) {
        setSidebartoggle(!toggle);
        document.querySelector(".page-header").className = "page-header close_icon";
        document.querySelector(".sidebar-wrapper").className = "sidebar-wrapper close_icon "
        // document.querySelector(".mega-menu-container").classList.remove("d-block")
      } else {
        setSidebartoggle(!toggle);
        document.querySelector(".page-header").className = "page-header";
        document.querySelector(".sidebar-wrapper").className = "sidebar-wrapper "
      }
    }
  };

  const OnLevelMenu = (menu) => {
    // setBonusUI(false)
    // document.querySelector(".mega-menu-container").classList.remove("d-block")
    setLevelMenu(!menu)
  }

  return (
    <Fragment>
      <div className="header-logo-wrapper" id="out_side_click">
        <div className="logo-wrapper">
          <Link to={`${process.env.PUBLIC_URL}/`}>
            <img className="img-fluid for-light" src={require("../../assets/images/logo/logo.png")} alt="" />
            <img className="img-fluid for-dark" src={require("../../assets/images/logo/logo_dark.png")} alt="" />
          </Link>
        </div>
        <div className="toggle-sidebar" onClick={() => responsive_openCloseSidebar(sidebartoggle)} style={window.innerWidth <= 991 ? {display:"block"} : {display:"none"}}>
          <AlignCenter className="status_toggle middle sidebar-toggle" id="sidebar-toggle" />
        </div>
      </div>  
      <Col className="left-header horizontal-wrapper pl-0">
        <ul className="horizontal-menu">
          <li className="level-menu outside"><a className={levelMenu ? "nav-link active" : "nav-link"} href="#javascript" onClick={() => OnLevelMenu(levelMenu)}><DollarSign /><span>Баланс</span></a>
            <ul className="header-level-menu menu-to-be-close" style={levelMenu ? { display: "" } : { display: "none" }}>
              <li><a href='#'><Plus/><span>Пополнить</span></a></li>
              {/*<li><a href="#javascript"><Users/><span>{"Users"}</span></a>
                <ul className="header-level-sub-menu">
                  <li><User/><span>{UserProfile}</span></li>
                  <li><UserMinus/><span>{UserEdit}</span></li>
                  <li><UserCheck/><span>{UsersCards}</span></li>
                </ul>
              </li>*/}
            </ul>
          </li>
        </ul>
      </Col>
    </Fragment>
  );
}

export default Leftbar;