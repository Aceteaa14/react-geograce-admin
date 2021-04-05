import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
  <home>
    <div id="wrapper">
    <div id="sidebar-nav" className="sidebar">
			<div className="sidebar-scroll">
				<nav>
					<ul className="nav">
						<li><a href="/" className="active"><i className="lnr lnr-briefcase"></i> <span>Dashboard</span></a></li>
						<li><a href="/home"><i className="lnr lnr-home"></i> <span>Home</span></a></li>
						<li><a href="/investor-relations"><i className="lnr lnr-heart"></i> <span>Investor Relations</span></a></li>
						<li><a href="/members"><i className="lnr lnr-users"></i> <span>Members</span></a></li>
						<li><a href="/downloadables"><i className="lnr lnr-download"></i> <span>Downloadables</span></a></li>
						
					
							
								
					</ul>
				</nav>
			</div>
		</div>
   
    <div className="main">
			<div className="row">
				<div className="col-md-8">
					<div className="panel panel-default ">
						<div className="panel-heading">
							<div>
							<h3>Activity Timeline</h3>
							
						
							
							</div>
							
						</div>
							<div className="panel-body timeline-container">
							<ul className="timeline">
								<li>
									<div className="timeline-badge"><em className="glyphicon glyphicon-home"></em></div>
									<div className="timeline-panel">
										<div className="timeline-heading">
											<h4 className="timeline-title">Updated last Tuesday</h4>
										</div>
										<div className="timeline-body">
											<p>Home page was edited last Tuesday by our web developer Juan Dela Cruz</p>
										</div>
									</div>
								</li>
								<li>
									<div className="timeline-badge primary"><em className="glyphicon glyphicon-download"></em></div>
									<div className="timeline-panel">
										<div className="timeline-heading">
											<h4 className="timeline-title">Updated 3 days ago</h4>
										</div>
										<div className="timeline-body">
											<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
										</div>
									</div>
								</li>
								<li>
									<div className="timeline-badge"><em className="glyphicon glyphicon-camera"></em></div>
									<div className="timeline-panel">
										<div className="timeline-heading">
											<h4 className="timeline-title">Updated 3 days ago</h4>
										</div>
										<div className="timeline-body">
											<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at sodales nisl. Donec malesuada orci ornare risus finibus feugiat.</p>
										</div>
									</div>
								</li>
								<li>
									<div className="timeline-badge"><em className="glyphicon glyphicon-paperclip"></em></div>
									<div className="timeline-panel">
										<div className="timeline-heading">
											<h4 className="timeline-title">Updated 4 days ago</h4>
										</div>
										<div className="timeline-body">
											<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
										</div>
									</div>
								</li>
							</ul>
						</div>
            </div>
						</div>
						
				

        <div className="col-md-4">
					<div className="panel panel-default">
						<div className="panel-heading"><h3>Publish Update</h3></div>
						<div className="panel-body">
						<div>
								<button className="btn btn-sm btn-info" style={{float:  'right'}} >Update</button>	
							 </div>
							 <div>
								 <span><em className="fa fa-eye">&nbsp;</em>Visibility: Public</span>&nbsp;<a href="#" style={{color:  'blue'}} >edit</a>
								 
							 </div>
							 <div>
								 <span><em className="fa fa-calendar-check-o">&nbsp;</em>Published: Immediately</span>&nbsp;<a href="#" style={{color:  'blue'}} >edit</a>
								
							</div>
							<button className="btn btn-sm btn-info"  style={{float:  'right'}}>Publish</button>
						</div>
            
           </div> 
</div>
   
<div className="col-md-4">
					<div className="panel panel-default">
						<div className="panel-heading"><h3>Publish Update</h3></div>
						<div className="panel-body">
						<div>
						<span><em className="fa fa-home">&nbsp;</em>Home</span>&nbsp; <button className="btn btn-sm btn-danger" style={{float:  'right'}}>Remove</button>&nbsp;	<button className="btn btn-sm btn-info" style={{float: 'right', marginRight: '2em'}} >Edit</button><br /><br />
						<span><em className="fa fa-line-chart">&nbsp;</em>Investor Relation</span>&nbsp; <button className="btn btn-sm btn-danger" style={{float:  'right'}} >Remove</button>&nbsp;	<button className="btn btn-sm btn-info" style={{float: 'right', marginRight: '2em'}}  >Edit</button><br /><br />
						<span><em className="fa fa-users">&nbsp;</em>Team</span>&nbsp; <button className="btn btn-sm btn-danger" style={{float:  'right'}} >Remove</button>&nbsp;	<button className="btn btn-sm btn-info" style={{float: 'right', marginRight: '2em'}} >Edit</button><br /><br />
						<span><em className="fa fa-download">&nbsp;</em>Downloadables</span>&nbsp; <button className="btn btn-sm btn-danger" style={{float:  'right'}}>Remove</button>&nbsp;	<button className="btn btn-sm btn-info" style={{float: 'right', marginRight: '2em'}} >Edit</button><br /><br />			
						<span><em className="fa fa-phone">&nbsp;</em>Contact</span>&nbsp;  <button className="btn btn-sm btn-danger" style={{float:  'right'}}>Remove</button>&nbsp;	<button className="btn btn-sm btn-info" style={{float: 'right', marginRight: '2em'}} >Edit </button><br /><br />	
						<br />	
								<div>
		
										<button className="btn btn-sm btn-info" style={{float:  'right'}} >Publish </button> <button className="btn btn-sm btn-success" style={{float: 'right', marginRight: '2em'}} >&nbsp;&nbsp;Add new&nbsp;&nbsp;</button>
								
								</div>
						</div>
            
           </div> 
</div>
</div>
</div>
</div>

</div>
</home>
	
  )
}
