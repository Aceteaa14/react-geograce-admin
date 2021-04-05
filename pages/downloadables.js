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
							<li><a href="/" ><i className="lnr lnr-briefcase"></i> <span>Dashboard</span></a></li>
							<li><a href="/home" ><i className="lnr lnr-home"></i> <span>Home</span></a></li>
							<li><a href="/investor-relations"><i className="lnr lnr-heart"></i> <span>Investor Relations</span></a></li>
							<li><a href="/members"><i className="lnr lnr-users"></i> <span>Members</span></a></li>
							<li><a href="/downloadables" className="active"><i className="lnr lnr-download"></i> <span>Downloadables</span></a></li>	
						</ul>
					</nav>
				</div>
			</div>
            <div className="col-sm-9 col-sm-offset-3 col-lg-10 col-lg-offset-2 main">
			<div className="row">
				<ol className="breadcrumb">
					<li><a href="#">
						<em className="fa fa-download"></em>
					</a></li>
					<li className="active">Downloadables</li>
				</ol>
			</div>
			
			<div className="row">
				<div className="col-lg-12">
					<h1 className="page-header">Downloadable Page</h1>
				</div>
			</div>
            <div className="row">
				<div className="col-lg-12">
				</div>
				<div className="col-lg-8">
					<div className="panel panel-default">
						<div className="panel-heading"><h3>Downloadable List</h3></div>
						<div className="panel-body" >
							<div style={{display: 'flex'}}>
								<input className="form-control" style={{marginRight: '1em'}} placeholder="Corporate Disclosure"/>
								<button className="btn btn-md btn-info" style={{marginRight: '1em'}}>Edit</button>
								<button className="btn btn-md btn-danger">Remove</button>
							</div>	
							<br/>
							<div style={{display: 'flex'}}>
								<input className="form-control" style={{marginRight: '1em'}} placeholder="Company Disclosure"/>
								<button className="btn btn-md btn-info" style={{marginRight: '1em'}}>Edit</button>
								<button className="btn btn-md btn-danger">Remove</button>
							</div>
							<br/>
							<div style={{display: 'flex'}}>
								<input className="form-control" style={{marginRight: '1em'}} placeholder="Others"/>
								<button className="btn btn-md btn-info" style={{marginRight: '1em'}}>Edit</button>
								<button className="btn btn-md btn-danger">Remove</button>
							</div>
							<br/>
							<button className="btn btn-md btn-info" style={{float:  'right'}} >Add new list</button>	
						</div>
						<br/>
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
            </div></div>
            <br/>
				<br/>
			
		
				<div className="col-lg-12">
					<div className="panel panel-info">
						<div className="panel-heading"><h3>Corporate Government Panel</h3></div>
						<div className="panel-body">
							
							
							<br/>
							<div className="container">
                                
								<div className="table">
								  <div className="col-4"><label>Manual on Corporate Governance</label>
									<table className="table table-bordered">
                                    
									  <thead>
										  
										<tr>
										  <th >Download Link</th>
										  <th >Content</th>
										  <th >Actions</th>
										</tr>
									  </thead>
									  <tbody>
										<tr>
										  <th></th>
										  <td></td>
										  
										
										  <td>
											<div style={{display: 'inline-flex'}}>
												<button type="button" className="btn btn-info">edit</button>
												<input type="file" className="btn"/>
											  </div>
										  </td>
										</tr>
										<tr>
											<th></th>
											<td></td>
										
									 
										  <td>
											<div style={{display: 'inline-flex'}}>
												<button type="button" className="btn btn-info">edit</button>
												<input type="file" className="btn"/>
											  </div>
										  </td>
										</tr>
										
										<tr>
										   <th></th>
										  <td></td>
										  
										  <td className="row">
											<div style={{display: 'inline-flex'}}>
												<button type="button" className="btn btn-info">edit</button>
												<input type="file" className="btn"/>
											  </div>
										  </td>
										</tr>
									  </tbody>
									</table>
								  </div>
								</div>
								<button className="btn btn-md btn-info" style={{float: 'right'}} >Add row</button>
								<button className="btn btn-md btn-danger" style={{float:  'right', marginRight: '2em' , marginBottom: '2em'}} >Delete row</button>
                               
                               
                                <br /> <br /> <br />
<label>Code of Business Conduct and Ethics</label>
                                <div className="table">
								  <div className="col-4">
									<table className="table table-bordered">
                                    
									  <thead>
										  
                                      <tr>
										  <th scope="col">Download Link</th>
										  <th scope="col">Content</th>
										  <th scope="col">Actions</th>
										</tr>
									  </thead>
									  <tbody>
										<tr>
										  <th></th>
										  <td></td>
										  
										
										  <td>
											<div style={{display: 'inline-flex'}}>
												<button type="button" className="btn btn-info">edit</button>
												<input type="file" className="btn" />
											  </div>
										  </td>
										</tr>
										
									  </tbody>
									</table>
								  </div>
								</div>
								<button className="btn btn-md btn-info" style={{float: 'right'}} >Add row</button>
								<button className="btn btn-md btn-danger" style={{float:  'right', marginRight: '2em' , marginBottom: '2em'}} >Delete row</button>

                                <br /> <br /> <br />
<label>Annual Corporate Governance Report</label>
                                <div className="table">
								  <div className="col-4">
									<table className="table table-bordered">
                                    
									  <thead>
										  
                                      <tr>
										  <th scope="col">Download Link</th>
										  <th scope="col">Content</th>
										  <th scope="col">Actions</th>
										</tr>
									  </thead>
									  <tbody>
										<tr>
										  <th></th>
										  <td></td>
										  
										
										  <td>
											<div style={{display: 'inline-flex'}}>
												<button type="button" className="btn btn-info">edit</button>
												<input type="file" className="btn"/>
											  </div>
										  </td>
										</tr>
										<tr>
											<th></th>
											<td></td>
										
									 
										  <td>
											<div style={{display: 'inline-flex'}}>
												<button type="button" className="btn btn-info">edit</button>
												<input type="file" className="btn"/>
											  </div>
										  </td>
										</tr>
										
										<tr>
										   <th></th>
										  <td></td>
										  
										  <td className="row">
											<div style={{display: 'inline-flex'}}>
												<button type="button" className="btn btn-info">edit</button>
												<input type="file" className="btn"/>
											  </div>
										  </td>
										</tr>
										<tr>
											<th></th>
											<td></td>
											
										  
											<td>
											  <div style={{display: 'inline-flex'}}>
												  <button type="button" className="btn btn-info">edit</button>
												  <input type="file" className="btn"/>
												</div>
											</td>
										  </tr>
										  <tr>
											  <th></th>
											  <td></td>
										  
									   
											<td>
											  <div style={{display: 'inline-flex'}}>
												  <button type="button" className="btn btn-info">edit</button>
												  <input type="file" className="btn"/>
												</div>
											</td>
										  </tr>
										  
										  <tr>
											 <th></th>
											<td></td>
											
											<td className="row">
											  <div style={{display: 'inline-flex'}}>
												  <button type="button" className="btn btn-info">edit</button>
												  <input type="file" className="btn"/>
												</div>
											</td>
										  </tr>
										  <tr>
											<th></th>
											<td></td>
											
										  
											<td>
											  <div style={{display: 'inline-flex'}}>
												  <button type="button" className="btn btn-info">edit</button>
												  <input type="file" className="btn"/>
												</div>
											</td>
										  </tr>
										  <tr>
											  <th></th>
											  <td></td>
										  
									   
											<td>
											  <div style={{display: 'inline-flex'}}>
												  <button type="button" className="btn btn-info">edit</button>
												  <input type="file" className="btn"/>
												</div>
											</td>
										  </tr>
										  
										  
									  </tbody>
									</table>
								  </div>
								</div>
								<button className="btn btn-md btn-info" style={{float: 'right'}} >Add row</button>
								<button className="btn btn-md btn-danger" style={{float:  'right', marginRight: '2em' , marginBottom: '2em'}} >Delete row</button>
                                <br /> <br /> <br />
<label>Board Committees</label>
                                <div className="table">
								  <div className="col-4">
									<table className="table table-bordered">
                                    
									  <thead>
										  
                                      <tr>
										  <th scope="col">Download Link</th>
										  <th scope="col">Content</th>
										  <th scope="col">Actions</th>
										</tr>
									  </thead>
									  <tbody>
										<tr>
										  <th></th>
										  <td></td>
										  
										
										  <td>
											<div style={{display: 'inline-flex'}}>
												<button type="button" className="btn btn-info">edit</button>
												<input type="file" className="btn"/>
											  </div>
										  </td>
										</tr>
										<tr>
											<th></th>
											<td></td>
										
									 
										  <td>
											<div style={{display: 'inline-flex'}}>
												<button type="button" className="btn btn-info">edit</button>
												<input type="file" className="btn"/>
											  </div>
										  </td>
										</tr>
										
										<tr>
										   <th></th>
										  <td></td>
										  
										  <td className="row">
											<div style={{display: 'inline-flex'}}>
												<button type="button" className="btn btn-info">edit</button>
												<input type="file" className="btn"/>
											  </div>
										  </td>
										</tr>
										<tr>
											<th></th>
											<td></td>
											
										  
											<td>
											  <div style={{display: 'inline-flex'}}>
												  <button type="button" className="btn btn-info">edit</button>
												  <input type="file" className="btn"/>
												</div>
											</td>
										  </tr>
										  <tr>
											  <th></th>
											  <td></td>
										  
									   
											<td>
											  <div style={{display: 'inline-flex'}}>
												  <button type="button" className="btn btn-info">edit</button>
												  <input type="file" className="btn"/>
												</div>
											</td>
										  </tr>
										  
										  <tr>
											 <th></th>
											<td></td>
											
											<td className="row">
											  <div style={{display: 'inline-flex'}}>
												  <button type="button" className="btn btn-info">edit</button>
												  <input type="file" className="btn"/>
												</div>
											</td>
										  </tr>
										  
										  
										  
									  </tbody>
									</table>
								  </div>
								</div>
								<button className="btn btn-md btn-info" style={{float: 'right'}} >Add row</button>
								<button className="btn btn-md btn-danger" style={{float:  'right', marginRight: '2em' , marginBottom: '2em'}} >Delete row</button>
                                <br /> <br /> <br />
<label>Corporate Social Responsibility</label>
                                <div className="table">
								  <div className="col-4">
									<table className="table table-bordered">
                                    
									  <thead>
										  
                                      <tr>
										  <th scope="col">Download Link</th>
										  <th scope="col">Content</th>
										  <th scope="col">Actions</th>
										</tr>
									  </thead>
									  <tbody>
										<tr>
										  <th></th>
										  <td></td>
										  
										
										  <td>
											<div style={{display: 'inline-flex'}}>
												<button type="button" className="btn btn-info">edit</button>
												<input type="file" className="btn" />
											  </div>
										  </td>
										</tr>
										
									  </tbody>
									</table>
								  </div>
								</div>
								<button className="btn btn-md btn-info" style={{float: 'right'}} >Add row</button>
								<button className="btn btn-md btn-danger" style={{float:  'right', marginRight: '2em' , marginBottom: '2em'}} >Delete row</button>
                                <br /> <br /> <br />
<label>Enterprise Risk Management</label>
                                <div className="table">
								  <div className="col-4">
									<table className="table table-bordered">
                                    
									  <thead>
										  
                                      <tr>
										  <th scope="col">Download Link</th>
										  <th scope="col">Content</th>
										  <th scope="col">Actions</th>
										</tr>
									  </thead>
									  <tbody>
										<tr>
										  <th></th>
										  <td></td>
										  
										
										  <td>
											<div style={{display: 'inline-flex'}}>
												<button type="button" className="btn btn-info">edit</button>
												<input type="file" className="btn" />
											  </div>
										  </td>
										</tr>
										
									  </tbody>
									</table>
								  </div>
								</div>
								<button className="btn btn-md btn-info" style={{float: 'right'}} >Add row</button>
								<button className="btn btn-md btn-danger" style={{float:  'right', marginRight: '2em' , marginBottom: '2em'}} >Delete row</button>
                                <br /> <br /> <br />
<label>Company Policies</label>
                                <div className="table">
								  <div className="col-4">
									<table className="table table-bordered">
                                    
									  <thead>
										  
                                      <tr>
										  <th scope="col">Download Link</th>
										  <th scope="col">Content</th>
										  <th scope="col">Actions</th>
										</tr>
									  </thead>
									  <tbody>
										<tr>
										  <th></th>
										  <td></td>
										  
										
										  <td>
											<div style={{display: 'inline-flex'}}>
												<button type="button" className="btn btn-info">edit</button>
												<input type="file" className="btn" />
											  </div>
										  </td>
										</tr>
										<tr>
										  <th></th>
										  <td></td>
										  
										
										  <td>
											<div style={{display: 'inline-flex'}}>
												<button type="button" className="btn btn-info">edit</button>
												<input type="file" className="btn" />
											  </div>
										  </td>
										</tr>
									  </tbody>
									</table>
								  </div>
								</div>
								<button className="btn btn-md btn-info" style={{float: 'right'}} >Add row</button>
								<button className="btn btn-md btn-danger" style={{float:  'right', marginRight: '2em' , marginBottom: '2em'}} >Delete row</button>

</div>
</div>
</div>
<div className="col-lg-14">
					<div className="panel panel-info">
						<div className="panel-heading"><h3>Company Disclosure Panel</h3></div>
						<div className="panel-body">
							
							<br/>
							<div className="container">

								<label>Sec Filings</label>
                                <div className="table">
								  <div className="col-4">
									<table className="table table-bordered">
                                    
									  <thead>
										  
                                      <tr>
										  <th scope="col">Download Link</th>
										  <th scope="col">Content</th>
										  <th scope="col">Actions</th>
										</tr>
									  </thead>
									  <tbody>
										<tr>
										  <th></th>
										  <td></td>
										  
										
										  <td>
											<div style={{display: 'inline-flex'}}>
												<button type="button" className="btn btn-info">edit</button>
												<input type="file" className="btn"/>
											  </div>
										  </td>
										</tr>
										<tr>
											<th></th>
											<td></td>
										
									 
										  <td>
											<div style={{display: 'inline-flex'}}>
												<button type="button" className="btn btn-info">edit</button>
												<input type="file" className="btn"/>
											  </div>
										  </td>
										</tr>
										
										<tr>
										   <th></th>
										  <td></td>
										  
										  <td className="row">
											<div style={{display: 'inline-flex'}}>
												<button type="button" className="btn btn-info">edit</button>
												<input type="file" className="btn"/>
											  </div>
										  </td>
										</tr>
										<tr>
											<th></th>
											<td></td>
											
										  
											<td>
											  <div style={{display: 'inline-flex'}}>
												  <button type="button" className="btn btn-info">edit</button>
												  <input type="file" className="btn"/>
												</div>
											</td>
										  </tr>
										  <tr>
											  <th></th>
											  <td></td>
										  
									   
											<td>
											  <div style={{display: 'inline-flex'}}>
												  <button type="button" className="btn btn-info">edit</button>
												  <input type="file" className="btn"/>
												</div>
											</td>
										  </tr>
										  
										  <tr>
											 <th></th>
											<td></td>
											
											<td className="row">
											  <div style={{display: 'inline-flex'}}>
												  <button type="button" className="btn btn-info">edit</button>
												  <input type="file" className="btn"/>
												</div>
											</td>
										  </tr>
										  <tr>
											<th></th>
											<td></td>
											
										  
											<td>
											  <div style={{display: 'inline-flex'}}>
												  <button type="button" className="btn btn-info">edit</button>
												  <input type="file" className="btn"/>
												</div>
											</td>
										  </tr>
										  <tr>
											  <th></th>
											  <td></td>
										  
									   
											<td>
											  <div style={{display: 'inline-flex'}}>
												  <button type="button" className="btn btn-info">edit</button>
												  <input type="file" className="btn"/>
												</div>
											</td>
										  </tr>
										  
										  
									  </tbody>
									</table>
								  </div>
								</div>
								<button className="btn btn-md btn-info" style={{float: 'right'}} >Add row</button>
								<button className="btn btn-md btn-danger" style={{float:  'right', marginRight: '2em' , marginBottom: '2em'}} >Delete row</button>

<br/><br/><br/>
<label>Notice of Annual or Special Stockholder's Meetings</label>
                                <div className="table">
								  <div className="col-4">
									<table className="table table-bordered">
                                    
									  <thead>
										  
                                      <tr>
										  <th scope="col">Download Link</th>
										  <th scope="col">Content</th>
										  <th scope="col">Actions</th>
										</tr>
									  </thead>
									  <tbody>
										<tr>
										  <th></th>
										  <td></td>
										  
										
										  <td>
											<div style={{display: 'inline-flex'}}>
												<button type="button" className="btn btn-info">edit</button>
												<input type="file" className="btn"/>
											  </div>
										  </td>
										</tr>
										<tr>
											<th></th>
											<td></td>
										
									 
										  <td>
											<div style={{display: 'inline-flex'}}>
												<button type="button" className="btn btn-info">edit</button>
												<input type="file" className="btn"/>
											  </div>
										  </td>
										</tr>
										
										<tr>
										   <th></th>
										  <td></td>
										  
										  <td className="row">
											<div style={{display: 'inline-flex'}}>
												<button type="button" className="btn btn-info">edit</button>
												<input type="file" className="btn"/>
											  </div>
										  </td>
										</tr>
										<tr>
											<th></th>
											<td></td>
											
										  
											<td>
											  <div style={{display: 'inline-flex'}}>
												  <button type="button" className="btn btn-info">edit</button>
												  <input type="file" className="btn"/>
												</div>
											</td>
										  </tr>
										  <tr>
											  <th></th>
											  <td></td>
										  
									   
											<td>
											  <div style={{display: 'inline-flex'}}>
												  <button type="button" className="btn btn-info">edit</button>
												  <input type="file" className="btn"/>
												</div>
											</td>
										  </tr>
										  
										  <tr>
											 <th></th>
											<td></td>
											
											<td className="row">
											  <div style={{display: 'inline-flex'}}>
												  <button type="button" className="btn btn-info">edit</button>
												  <input type="file" className="btn"/>
												</div>
											</td>
										  </tr>
									  </tbody>
									</table>
								  </div>
								</div>
								<button className="btn btn-md btn-info" style={{float: 'right'}} >Add row</button>
								<button className="btn btn-md btn-danger" style={{float:  'right', marginRight: '2em' , marginBottom: '2em'}} >Delete row</button>

                                <br/><br/><br/>
<label>Minutes of All General or Special Stockholder's Meeting</label>
                                <div className="table">
								  <div className="col-4">
									<table className="table table-bordered">
                                    
									  <thead>
										  
                                      <tr>
										  <th scope="col">Download Link</th>
										  <th scope="col">Content</th>
										  <th scope="col">Actions</th>
										</tr>
									  </thead>
									  <tbody>
										<tr>
										  <th></th>
										  <td></td>
										  
										
										  <td>
											<div style={{display: 'inline-flex'}}>
												<button type="button" className="btn btn-info">edit</button>
												<input type="file" className="btn"/>
											  </div>
										  </td>
										</tr>
										<tr>
											<th></th>
											<td></td>
										
									 
										  <td>
											<div style={{display: 'inline-flex'}}>
												<button type="button" className="btn btn-info">edit</button>
												<input type="file" className="btn"/>
											  </div>
										  </td>
										</tr>
										
										<tr>
										   <th></th>
										  <td></td>
										  
										  <td className="row">
											<div style={{display: 'inline-flex'}}>
												<button type="button" className="btn btn-info">edit</button>
												<input type="file" className="btn"/>
											  </div>
										  </td>
										</tr>
										<tr>
											<th></th>
											<td></td>
											
										  
											<td>
											  <div style={{display: 'inline-flex'}}>
												  <button type="button" className="btn btn-info">edit</button>
												  <input type="file" className="btn"/>
												</div>
											</td>
										  </tr>
										  <tr>
											  <th></th>
											  <td></td>
										  
									   
											<td>
											  <div style={{display: 'inline-flex'}}>
												  <button type="button" className="btn btn-info">edit</button>
												  <input type="file" className="btn"/>
												</div>
											</td>
										  </tr>
										  
										  <tr>
											 <th></th>
											<td></td>
											
											<td className="row">
											  <div style={{display: 'inline-flex'}}>
												  <button type="button" className="btn btn-info">edit</button>
												  <input type="file" className="btn"/>
												</div>
											</td>
										  </tr>
                                          <tr>
										  <th></th>
										  <td></td>
										  
										
										  <td>
											<div style={{display: 'inline-flex'}}>
												<button type="button" className="btn btn-info">edit</button>
												<input type="file" className="btn"/>
											  </div>
										  </td>
										</tr>
										<tr>
											<th></th>
											<td></td>
										
									 
										  <td>
											<div style={{display: 'inline-flex'}}>
												<button type="button" className="btn btn-info">edit</button>
												<input type="file" className="btn"/>
											  </div>
										  </td>
										</tr>
										
										<tr>
										   <th></th>
										  <td></td>
										  
										  <td className="row">
											<div style={{display: 'inline-flex'}}>
												<button type="button" className="btn btn-info">edit</button>
												<input type="file" className="btn"/>
											  </div>
										  </td>
										</tr>
										<tr>
											<th></th>
											<td></td>
											
										  
											<td>
											  <div style={{display: 'inline-flex'}}>
												  <button type="button" className="btn btn-info">edit</button>
												  <input type="file" className="btn"/>
												</div>
											</td>
										  </tr>
									  </tbody>
									</table>
								  </div>
								</div>
								<button className="btn btn-md btn-info" style={{float: 'right'}} >Add row</button>
								<button className="btn btn-md btn-danger" style={{float:  'right', marginRight: '2em' , marginBottom: '2em'}} >Delete row</button>
                                </div>
</div>
</div>
<div className="col-lg-14">
					<div className="panel panel-info">
						<div className="panel-heading"><h3>Others Panel</h3></div>
						<div className="panel-body">
							
							<br/>
							<div className="container">

								<label>Others</label>
                                <div className="table">
								  <div className="col-4">
									<table className="table table-bordered">
                                    
									  <thead>
										  
                                      <tr>
										  <th scope="col">Download Link</th>
										  <th scope="col">Content</th>
										  <th scope="col">Actions</th>
										</tr>
									  </thead>
									  <tbody>
										<tr>
										  <th></th>
										  <td></td>
										  
										
										  <td>
											<div style={{display: 'inline-flex'}}>
												<button type="button" className="btn btn-info">edit</button>
												<input type="file" className="btn"/>
											  </div>
										  </td>
										</tr>
										
										  
										  
									  </tbody>
									</table>
								  </div>
								</div>
								<button className="btn btn-md btn-info" style={{float: 'right'}} >Add row</button>
								<button className="btn btn-md btn-danger" style={{float:  'right', marginRight: '2em' , marginBottom: '2em'}} >Delete row</button>


</div>

</div>
</div></div></div></div></div></div>
</div>
</home>
	
  )
}
