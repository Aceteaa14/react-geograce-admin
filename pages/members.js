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
						<li><a href="/"><i className="lnr lnr-briefcase"></i> <span>Dashboard</span></a></li>
						<li><a href="/home"><i className="lnr lnr-home"></i> <span>Home</span></a></li>
						<li><a href="/investor-relations"><i className="lnr lnr-heart"></i> <span>Investor Relations</span></a></li>
						<li><a href="/members" className="active"><i className="lnr lnr-users" ></i> <span>Members</span></a></li>
						<li><a href="/downloadables" ><i className="lnr lnr-download"></i> <span>Downloadables</span></a></li>		
					</ul>
				</nav>
			</div>
		</div>
        <div className="col-sm-9 col-sm-offset-3 col-lg-10 col-lg-offset-2 main">
				<div className="row">
					<ol className="breadcrumb">
						<li><a href="#">
							<em className="fa fa-users"></em>
						</a></li>
						<li className="active">Members</li>
					</ol>
				</div>
				
				<div className="row">
					<div className="col-lg-12">
						<h1 className="page-header">MEET THE TEAM</h1>
					</div>
				</div>
                <div className="row">
					<div className="col-lg-8">
						<div className="panel panel-default">
							<div className="panel-heading"><h3>ADD NEW MEMBER FORM</h3></div>
							<div className="panel-body">
							<label for="ClassMember">Class Member:</label>
								<select name="cars" id="cars">
									<option value="RegularDirector">Regular Director</option>
									<option value="IndependentDirector">Independent Director</option>
									<option value="ExecutiveDirector">Executive Director</option>
								</select>
								<div className="form-group">
											<label>ADD PHOTO</label>
											<input type="file" />
											
										</div>
										
										<div className="form-group">
											<label>Member Name</label>
											<input className="form-control" />
										</div>
							
										<label>Background</label>
										<div className="form-group">
										<textarea name="BusinessBackground"></textarea>
										<div className="form-group">
										
										</div>
										<button className="btn btn-success" style={{float:  'right'}} >Add</button>	
										</div>
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
            </div>
            <div className="panel panel-default">
						<div className="panel-heading"><h3>BOARD COMITTEE MEMBERS</h3></div>
							<div className="panel-body">
								
										
										<div className="form-group">
				
											<h1>Audit Committee</h1>
											<div className="container">
		  <div className="table">
			<div className="col-4">
			  <table className="table table-bordered">
				<thead>
				  <tr>
					<th scope="col">Name</th>
					<th scope="col">Position</th>
					<th scope="col">Actions</th>
				  </tr>
				</thead>
				<tbody>
				  <tr>
					<td>Manuel G. Ong</td>
					<td>Chairman</td>
					<td>
					  <button type="button" className="btn btn-info">Edit</button>
					  
					</td>
				  </tr>
				  <tr>
					<td>Delfin S. Castro</td>
					<td>Member</td>
					<td>
					  <button type="button" className="btn btn-info">Edit</button>
					  
					</td>
				  </tr>
				  
				  <tr>
					<td>Felixes G. Latonero</td>
					<td>Member</td>
					<td>
					  <button type="button" className="btn btn-info">Edit</button>
					  
					</td>
				  </tr>
				</tbody>
			  </table>
			</div>
		  </div>
		  
		  <button className="btn btn-success" style={{float:  'right'}} >Update</button>	
											
		</div>
        <h1>Governance Committee</h1>
											<div className="container">
		  <div className="table">
			<div className="col-4">
				<table className="table table-bordered">
					<thead>
					  <tr>
						<th scope="col">Name</th>
						<th scope="col">Position</th>
						<th scope="col">Actions</th>
					  </tr>
					</thead>
					<tbody>
					  <tr>
						<td>Manuel G. Ong</td>
						<td>Chairman</td>
						<td>
						  <button type="button" className="btn btn-info">Edit</button>
						  
						</td>
					  </tr>
					  <tr>
						<td>Raymond T. Koa</td>
						<td>Member</td>
						<td>
						  <button type="button" className="btn btn-info">Edit</button>
						  
						</td>
					  </tr>
					  
					  <tr>
						<td>Felixes G. Latonero</td>
						<td>Member</td>
						<td>
						  <button type="button" className="btn btn-info">Edit</button>
						  
						</td>
					  </tr>
					</tbody>
				  </table>
			</div>
		  </div>
		  
		  <button className="btn btn-success" style={{float:  'right'}} >Update</button>	
											
		</div>
        <h1>Compensation Committee</h1>
										<div className="container">
	  <div className="table">
		<div className="col-4">
			<table className="table table-bordered">
				<thead>
				  <tr>
					<th scope="col">Name</th>
					<th scope="col">Position</th>
					<th scope="col">Actions</th>
				  </tr>
				</thead>
				<tbody>
				  <tr>
					<td>Felixes G. Latonero</td>
					<td>Chairman</td>
					<td>
					  <button type="button" className="btn btn-info">Edit</button>
					  
					</td>
				  </tr>
				  <tr>
					<td>Delfin S. Castro</td>
					<td>Member</td>
					<td>
					  <button type="button" className="btn btn-info">Edit</button>
					  
					</td>
				  </tr>
				  
				  <tr>
					<td>Raymond T. Koa</td>
					<td>Member</td>
					<td>
					  <button type="button" className="btn btn-info">Edit</button>
					  
					</td>
				  </tr>
				</tbody>
			  </table>
			</div>
		  </div>
		  
		  <button className="btn btn-success" style={{float:  'right'}} >Update</button>	
											
		</div>
        <h1>Nomination Committee</h1>
											<div className="container">
		  <div className="table">
			<div className="col-4">
				<table className="table table-bordered">
					<thead>
					  <tr>
						<th scope="col">Name</th>
						<th scope="col">Position</th>
						<th scope="col">Actions</th>
					  </tr>
					</thead>
					<tbody>
					  <tr>
						<td>Manuel G. Ong</td>
						<td>Chairman</td>
						<td>
						  <button type="button" className="btn btn-info">Edit</button>
						  
						</td>
					  </tr>
					  <tr>
						<td>Delfin S. Castro</td>
						<td>Member</td>
						<td>
						  <button type="button" className="btn btn-info">Edit</button>
						  
						</td>
					  </tr>
					  
					  <tr>
						<td>Felixes G. Latonero</td>
						<td>Member</td>
						<td>
						  <button type="button" className="btn btn-info">Edit</button>
						  
						</td>
					  </tr>
					</tbody>
				  </table>
			</div>
		  </div>
		  
		  <button className="btn btn-success" style={{float:  'right'}} >Update</button>	
											
		</div>
        <h1>Risk Management Committee</h1>
										<div class="container">
											<table class="table table-bordered">
												<thead>
												  <tr>
													<th scope="col">Name</th>
													<th scope="col">Position</th>
													<th scope="col">Actions</th>
												  </tr>
												</thead>
												<tbody>
												  <tr>
													<td>Manuel G. Ong</td>
													<td>Chairman</td>
													<td>
													  <button type="button" class="btn btn-info">Edit</button>
													  
													</td>
												  </tr>
												  <tr>
													<td>Delfin S. Castro</td>
													<td>Member</td>
													<td>
													  <button type="button" class="btn btn-info">Edit</button>
													  
													</td>
												 </tr>
												</tbody>
											  </table>
		
			</div>
		  </div>
		  
		  <button className="btn btn-success" style={{float:  'right'}} >Update</button>	
											
		</div>
										
           </div> </div></div>



</home>
	
  )
}
