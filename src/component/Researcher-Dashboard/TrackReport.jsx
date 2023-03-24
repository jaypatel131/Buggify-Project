import React, { useState, useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import { BsJournalBookmark } from "react-icons/bs";
import {
  RiFolderHistoryLine,
  RiLogoutBoxRLine,
  RiQuestionLine,
} from "react-icons/ri";
import { IoSettingsOutline, IoNotificationsSharp } from "react-icons/io5";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { SiBigbluebutton } from "react-icons/si";
import { ImProfile } from "react-icons/im";
import { TbReportSearch } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import Avat from "../image/avat1.png";
import Cookies from "js-cookie";

function ResearcherNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const Navigate = useNavigate();
  const gotoResearcherProfile = () => {
    Navigate("/researcherProfile");
  };
  const gotoTrackReports = () => {
    Navigate("/track-report");
  };
  const gotoBuountyHistory = () => {
    Navigate("/bounty-history");
  };
  const gotoBookmarkedProgram = () => {
    Navigate("/bookmarked-program");
  };
  const gotoNotification = () => {
    Navigate("/dashboard-notification");
  };
  const gotoSetting = () => {
    Navigate("/dashboard-settings");
  };

  const gotoFAQs = () => {
    Navigate("/researcherFAQs");
  };

  return (
    <nav className={`navbar ${isMenuOpen ? "open" : "close"}`}>
      <div
        className={`navbar-toggle ${isMenuOpen ? "navopen" : "navclose"}`}
        onClick={handleMenuToggle}
      >
        {isMenuOpen ? <FiChevronLeft /> : <FiChevronRight />}
      </div>
      <ul className={`navbar-menu ${isMenuOpen ? "open" : ""}`}>
        <li>
          <span className="back-link-icon navbar-menu-icon">
            <AiOutlineArrowLeft />
          </span>
          {isMenuOpen && (
            <span className="back-link navbar-menu-item">Back to Home</span>
          )}
        </li>
        <hr className={`navbar-hr ${isMenuOpen ? "open" : ""}`} />
        <li onClick={gotoResearcherProfile}>
          <span className="navbar-menu-icon">
            <ImProfile />
          </span>
          {isMenuOpen && (
            <span className="navbar-menu-item">Researcher Profile</span>
          )}
        </li>
        <li className="dashboard-link" onClick={gotoTrackReports}>
          <span className="navbar-menu-icon" style={{ color: "#ffffff" }}>
            <TbReportSearch />
          </span>
          {isMenuOpen && <span className="navbar-menu-item">Track Report</span>}
        </li>

        <li onClick={gotoBuountyHistory}>
          <span className="navbar-menu-icon">
            <RiFolderHistoryLine />
          </span>
          {isMenuOpen && (
            <span className="navbar-menu-item">Bounty History</span>
          )}
        </li>
        <li onClick={gotoBookmarkedProgram}>
          <span className="navbar-menu-icon">
            <BsJournalBookmark />
          </span>
          {isMenuOpen && (
            <span className="navbar-menu-item">Bookmarked Program</span>
          )}
        </li>
        <li onClick={gotoNotification}>
          <span className="navbar-menu-icon">
            <IoNotificationsSharp />
          </span>
          {isMenuOpen && <span className="navbar-menu-item">Notification</span>}
        </li>
        <li>
          <span className="navbar-menu-icon">
            <RiLogoutBoxRLine />
          </span>
          {isMenuOpen && <span className="navbar-menu-item">Logout</span>}
        </li>
        <hr className={`navbar-hr ${isMenuOpen ? "open" : ""}`} />

        <li onClick={gotoSetting}>
          <span className="navbar-menu-icon">
            <IoSettingsOutline />
          </span>
          {isMenuOpen && <span className="navbar-menu-item">Settings</span>}
        </li>
        <li onClick={gotoFAQs}>
          <span className="navbar-menu-icon">
            <RiQuestionLine />
          </span>
          {isMenuOpen && <span className="navbar-menu-item">FAQs</span>}
        </li>
      </ul>
    </nav>
  );
}

function OpenReports() {
  const navigate = useNavigate();
  const gotoReportInfo = () => {
    navigate("/researcher-ReportInfo");
  };


  // data incoming for open report 
  const [bountyList, setBountyList] = useState();
  useEffect(() => {
    async function fetchProfileStats() {
      const myCookie = Cookies.get('myCookie')
      const data = {
        myCookie: `${myCookie}`,
        rep_type: "open"
      }
      const response = await fetch(`http://127.0.0.1:5173/trackRep`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const jwt = await response.json();
      setBountyList(jwt);
    }
    fetchProfileStats();
  }, []);
  console.log(bountyList);


  return (
    <div>
      <div className="track-report">
        <div className="track-reports-div">
          {TrackReports.defaultProps.reports.map((title) => (
            <div key={title.id} className="res-track-report-list-div">
              <div className="bus-profile-bug-report-divtitle">
                <p className="bus-profile-bug-report-div-title-p">
                  Report Title: {title.reportTitle}
                </p>
                <p className="bus-profile-bug-report-div-id-p">
                  Report Id: {title.reportId}
                </p>
              </div>
              <p
                className="res-track-report-list-link"
                onClick={gotoReportInfo}
              >
                Check More info
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ResolvedReports() {
  const navigate = useNavigate();
  const gotoReportInfo = () => {
    navigate("/researcher-ReportInfo");
  };

  // data incoming for resolved report
  const [bountyList, setBountyList] = useState();
  useEffect(() => {
    async function fetchProfileStats() {
      const myCookie = Cookies.get('myCookie')
      const data = {
        myCookie: `${myCookie}`,
        rep_type: "resolved"
      }
      const response = await fetch(`http://127.0.0.1:5173/trackRep`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const jwt = await response.json();
      setBountyList(jwt);
    }
    fetchProfileStats();
  }, []);
  console.log(bountyList);

  return (
    <div>
      <div className="track-report">
        <div className="track-reports-div">
          {TrackReports.defaultProps.Resolvedreports.map((title) => (
            <div key={title.id} className="res-track-report-list-div">
              <div className="bus-profile-bug-report-divtitle">
                <p className="bus-profile-bug-report-div-title-p">
                  Report Title: {title.reportTitle}
                </p>
                <p className="bus-profile-bug-report-div-id-p">
                  Report Id: {title.reportId}
                </p>
              </div>
              <div style={{ display: "flex", position: "relative" }}>
                <p
                  className="res-track-report-list-link"
                  onClick={gotoReportInfo}
                >
                  Check More Info
                </p>
                <p className="res-track-report-list-date">
                  Resolved Date: {title.reportDate}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const TrackReports = (props) => {
  const [OpenSelected, setOpenSelected] = useState("true");
  const [ResolvedSelected, setResolvedSelected] = useState();

  const handleOpenSelected = () => {
    setOpenSelected(true);
    setResolvedSelected(false);
  };
  const handleResolvedSelected = () => {
    setOpenSelected(false);
    setResolvedSelected(true);
  };

  return (
    <>
      <div className="res-profile">
        <div className="bus-profile-divs">
          <div className="bus-profile-div1">
            <ResearcherNavbar />
          </div>
          <div className="bus-profile-div2">
            <h1 className="bus-profile-div2-h">Track Reports</h1>

            <div className="dashboard">
              <center>
                <div className="bus-profile-header">
                  <img src={Avat} className="bus-profile-company-logo" />
                  <h3 className="bus-profile-company-name">
                    {props.rUsername}
                  </h3>
                </div>
              </center>
              <div className="stats">
                <div className="track-report-menu-list">
                  <ul>
                    <li
                      className={`track-report-menu-list-li ${OpenSelected ? "listselected" : ""
                        }`}
                      onClick={handleOpenSelected}
                    >
                      Open
                    </li>
                    <li
                      className={`track-report-menu-list-li ${ResolvedSelected ? "listselected" : ""
                        }`}
                      onClick={handleResolvedSelected}
                    >
                      Resolved
                    </li>
                  </ul>
                </div>

                {OpenSelected && <OpenReports />}
                {ResolvedSelected && <ResolvedReports />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

TrackReports.defaultProps = {
  researcherAvtar: "",
  rUsername: "User Name",
  reports: [
    {
      id: "1",
      reportId: "#a7ag3-jh38g",
      reportTitle: "XSS in Search Field of abc.def.com",
      reportLink: "",
    },
  ],
  Resolvedreports: [
    {
      id: "2",
      reportId: "#v3jd8-st62s ",
      reportTitle: "CSRF in Password Change Function of staging.def.com",
      reportLink: "",
      reportDate: "1/2022",
    },
  ],
};

export default TrackReports;
