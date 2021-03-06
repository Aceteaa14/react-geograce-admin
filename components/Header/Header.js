import React from "react";


export default function Header() {
    return(
      <nav className="navbar navbar-default navbar-fixed-top">
			<div className="brand">
      <a href="index.html" style={{color:"dodgerblue"}}><h2>GEOGRACE ADMIN</h2></a>
			</div>
			<div className="container-fluid">
				
				<form className="navbar-form navbar-left">
					
				</form>
        <div id="navbar-menu">
					<ul className="nav navbar-nav navbar-right">
						<li className="dropdown">
							<a href="#" className="dropdown-toggle icon-menu" data-toggle="dropdown">
								<i className="lnr lnr-alarm"></i>
								<span className="badge bg-danger">5</span>
							</a>
							<ul className="dropdown-menu notifications">
								<li><a href="#" className="notification-item"><span className="dot bg-warning"></span>System space is almost full</a></li>
								<li><a href="#" className="notification-item"><span className="dot bg-danger"></span>You have 9 unfinished tasks</a></li>
								<li><a href="#" className="notification-item"><span className="dot bg-success"></span>Monthly report is available</a></li>
								<li><a href="#" className="notification-item"><span className="dot bg-warning"></span>Weekly meeting in 1 hour</a></li>
								<li><a href="#" className="notification-item"><span className="dot bg-success"></span>Your request has been approved</a></li>
								<li><a href="#" className="more">See all notifications</a></li>
							</ul>
						</li>
						<li className="dropdown">
							<a href="#" className="dropdown-toggle" data-toggle="dropdown"><i className="lnr lnr-question-circle"></i> <span>Help</span> <i className="icon-submenu lnr lnr-chevron-down"></i></a>
							<ul className="dropdown-menu">
								<li><a href="#">Basic Use</a></li>
								<li><a href="#">Working With Data</a></li>
								<li><a href="#">Security</a></li>
								<li><a href="#">Troubleshooting</a></li>
							</ul>
						</li>
						<li className="dropdown">
							<a href="#" className="dropdown-toggle" data-toggle="dropdown"><img src="assets/img/user.png" className="img-circle" alt="Avatar" /> <span>Samuel</span> <i className="icon-submenu lnr lnr-chevron-down"></i></a>
							<ul className="dropdown-menu">
								<li><a href="#"><i className="lnr lnr-user"></i> <span>My Profile</span></a></li>
								<li><a href="#"><i className="lnr lnr-envelope"></i> <span>Message</span></a></li>
								<li><a href="#"><i className="lnr lnr-cog"></i> <span>Settings</span></a></li>
								<li><a href="#"><i className="lnr lnr-exit"></i> <span>Logout</span></a></li>
							</ul>
						</li>
						
					</ul>
				</div>
			</div>
        
        </nav>
      
    )
}