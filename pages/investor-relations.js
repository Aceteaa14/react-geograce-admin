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
							<li><a href="/investor-relations" className="active"><i className="lnr lnr-heart"></i> <span>Investor Relations</span></a></li>
							<li><a href="/members" ><i className="lnr lnr-users" ></i> <span>Members</span></a></li>
							<li><a href="/downloadables"><i className="lnr lnr-download"></i> <span>Downloadables</span></a></li>	
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
						<li className="active">Investor-Relations</li>
					</ol>
				</div>
				
                <div className="row">
					<div className="col-lg-12">
						<h1 className="page-header">Investor-Relations</h1>
					</div>
				</div>
		   <div className="row">
					<div className="col-lg-12">
					</div>
					<div className="col-lg-8">
						<div className="panel panel-default">
						<div className="panel-heading"><h3>Investor Relations</h3></div>
							<div className="panel-body" >
								<textarea name="content">
									Combines finance, communication, and marketing to effectively control the flow of information within the company.
								</textarea>	
								<br />
								<button className="btn btn-lg btn-info" style={{float:  'right'}} >Publish</button>
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
		   <div className="col-lg-12">
					</div>
					<div className="col-lg-8">
						<div className="panel panel-default">
						<div className="panel-heading"><h3>Investor Relations Programs</h3></div>
							<div className="panel-body" >
								<textarea name="content2">
									The company’s policies with respect to investor relations are reviewed by the Board of Directors on a yearly basis. For shareholder inquiries relation to your Nihao Mineral Resources International, Inc. shares of stocks, you may contact the Company’s stock transfer agent:
								</textarea>	
								<br />
								<button className="btn btn-lg btn-info" style={{float:  'right'}} >Publish</button>
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
<div className="row">
			
				<div className="col-lg-8">
					<div className="panel panel-default">
						
						<div className="panel-body" >


							<div >
								<form role="Stock and Transfer Agent">
									<div className="form-group">
										<label>Stock and Transfer Agent:</label>
										<div style={{display:'flex'}}>
											<input type="text" className="form-control" style={{float: 'right', marginRight: '1em'}}
 />
											<button className="btn btn-sm btn-info" style={{float: 'right', marginRight: '1em'}}
>Edit</button>
											<button className="btn btn-sm btn-danger">Remove</button>
										</div></div>
							</form>
							
							</div>	
							<br/>
							<div >
								<form role="Contact Person">
									<div className="form-group">
										<label>Contact Person: </label>
										<div style={{display:'flex'}}>
											<input type="text" className="form-control" style={{float: 'right', marginRight: '1em'}}
 />
											<button className="btn btn-sm btn-info" style={{float: 'right', marginRight: '1em'}}
>Edit</button>
											<button className="btn btn-sm btn-danger">Remove</button>
								</div>	</div>
							</form>
						
							</div>	
							<br/>
					
							

							<div >
								<form role="Position">
									<div className="form-group">
										<label>Position: </label>
										<div style={{display:'flex'}}>
											<input type="text" className="form-control" style={{float: 'right', marginRight: '1em'}}
 />
											<button className="btn btn-sm btn-info" style={{float: 'right', marginRight: '1em'}}
>Edit</button>
											<button className="btn btn-sm btn-danger">Remove</button>
										</div></div>
							</form>
							
							</div>	
							<br/>
			
							<div >
								<form role="Contact No.">
									<div className="form-group">
										<label>Contact No: </label>
										<div style={{display:'flex'}}>
											<input type="text" className="form-control" style={{float: 'right', marginRight: '1em'}}
 />
											<button className="btn btn-sm btn-info" style={{float: 'right', marginRight: '1em'}}
>Edit</button>
											<button className="btn btn-sm btn-danger">Remove</button>
								</div></div>
							</form>
							
							</div>	
							<br/>
						
							<div >
								<form role="Fax">
									<div className="form-group">
										<label>Fax: </label>
										<div style={{display:'flex'}}>
											<input type="text" className="form-control" style={{float: 'right', marginRight: '1em'}}
 />
											<button className="btn btn-sm btn-info" style={{float: 'right', marginRight: '1em'}}
>Edit</button>
											<button className="btn btn-sm btn-danger">Remove</button>
								</div></div>
							</form>
							
							</div>	
							<br/>
							
							<div >
								<form role="Email">
									<div className="form-group" >
										<label>Email: </label>
										<div style={{display:'flex'}}>
										<input type="text" className="form-control" style={{float: 'right', marginRight: '1em'}}
 />
								<button className="btn btn-sm btn-info" style={{float: 'right', marginRight: '1em'}}
>Edit</button>
								<button className="btn btn-sm btn-danger">Remove</button>
							</div></div>
							</form>
							
							</div>	
							<br/>
							
							
							<button className="btn btn-md btn-success" style={{float:  'right'}} >Add row</button>	
						</div>
						<br/>
						</div>
				</div>

                
                <div className="col-lg-12">
					</div>
					<div className="col-lg-8">
						<div className="panel panel-default">
						<div className="panel-heading"><h3>Investor Relations Programs</h3></div>
							<div className="panel-body" >
								<textarea name="content2">
									The company’s policies with respect to investor relations are reviewed by the Board of Directors on a yearly basis. For shareholder inquiries relation to your Nihao Mineral Resources International, Inc. shares of stocks, you may contact the Company’s stock transfer agent:
								</textarea>	
								<br />
								<button className="btn btn-lg btn-info" style={{float:  'right'}} >Publish</button>
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

			
				<div className="col-lg-8">
					<div className="panel panel-default">
						
						<div className="panel-body" >


							<div >
								<form role="Stock and Transfer Agent">
									<div className="form-group">
										<label>Stock and Transfer Agent:</label>
										<div style={{display:'flex'}}>
											<input type="text" className="form-control" style={{float: 'right', marginRight: '1em'}}
 />
											<button className="btn btn-sm btn-info" style={{float: 'right', marginRight: '1em'}}
>Edit</button>
											<button className="btn btn-sm btn-danger">Remove</button>
										</div></div>
							</form>
							
							</div>	
							<br/>
							<div >
								<form role="Contact Person">
									<div className="form-group">
										<label>Contact Person: </label>
										<div style={{display:'flex'}}>
											<input type="text" className="form-control" style={{float: 'right', marginRight: '1em'}}
 />
											<button className="btn btn-sm btn-info" style={{float: 'right', marginRight: '1em'}}
>Edit</button>
											<button className="btn btn-sm btn-danger">Remove</button>
								</div>	</div>
							</form>
						
							</div>	
							<br/>
					
							

							<div >
								<form role="Position">
									<div className="form-group">
										<label>Position: </label>
										<div style={{display:'flex'}}>
											<input type="text" className="form-control" style={{float: 'right', marginRight: '1em'}}
 />
											<button className="btn btn-sm btn-info" style={{float: 'right', marginRight: '1em'}}
>Edit</button>
											<button className="btn btn-sm btn-danger">Remove</button>
										</div></div>
							</form>
							
							</div>	
							<br/>
			
							<div >
								<form role="Contact No.">
									<div className="form-group">
										<label>Contact No: </label>
										<div style={{display:'flex'}}>
											<input type="text" className="form-control" style={{float: 'right', marginRight: '1em'}}
 />
											<button className="btn btn-sm btn-info" style={{float: 'right', marginRight: '1em'}}
>Edit</button>
											<button className="btn btn-sm btn-danger">Remove</button>
								</div></div>
							</form>
							
							</div>	
							<br/>
						
							<div >
								<form role="Fax">
									<div className="form-group">
										<label>Fax: </label>
										<div style={{display:'flex'}}>
											<input type="text" className="form-control" style={{float: 'right', marginRight: '1em'}}
 />
											<button className="btn btn-sm btn-info" style={{float: 'right', marginRight: '1em'}}
>Edit</button>
											<button className="btn btn-sm btn-danger">Remove</button>
								</div></div>
							</form>
							
							</div>	
							<br/>
							
							<div >
								<form role="Email">
									<div className="form-group" >
										<label>Email: </label>
										<div style={{display:'flex'}}>
										<input type="text" className="form-control" style={{float: 'right', marginRight: '1em'}}
 />
								<button className="btn btn-sm btn-info" style={{float: 'right', marginRight: '1em'}}
>Edit</button>
								<button className="btn btn-sm btn-danger">Remove</button>
							</div></div>
							</form>
							
							</div>	
							<br/>
							
							
							<button className="btn btn-md btn-success" style={{float:  'right'}} >Add row</button>	
						</div>
						<br/>
						</div>
				</div>
                <div className="row">
                <div className="col-lg-12">
				<div className="col-md-12">
					<div className="panel panel-default">
						<div className="panel-heading"><h3>Foreign Ownership Percentage as of December 31, 2020</h3></div>
							
							
				
							<table className="table table-striped table-responsive-md btn-table">

								<thead>
								  <tr>
									
									<th></th>
									<th>Number of Shares</th>
									<th>Percentage</th>
									<th>Action</th>
								  </tr>
								</thead>
								
								<tbody>
									<tr>
										
										<td>Filipino</td> 
										<td>3,400,487,293</td>
										<td>97.16</td>
										<td>
										  <button type="button" className="btn btn-info btn-sm m-0">Edit</button>
										</td>
									  </tr>
									  <tr>
										
										<td>Foreign-OWNERSHIP Level</td> 
										<td>99,512,707</td>
										<td>2.843</td>
										<td>
										  <button type="button" className="btn btn-info btn-sm m-0">Edit</button>
										</td>
									  </tr>
								  <tr>
									
									<td>Foreign-OWNERSHIP Limit</td> 
									<td></td>
									<td>40</td>
									<td>
									  <button type="button" className="btn btn-info btn-sm m-0">Edit</button>
									</td>
								  </tr>
								  <tr>
									
									<td>Total</td> 
									<td>3,500,000,000</td>
									<td>100</td>
									<td>
									  <button type="button" className="btn btn-info btn-sm m-0">Edit</button>
									</td>
								  </tr>
								</tbody>
								
								</table>
								</div>
								
								<button className="btn btn-md btn-danger" style={{float:  'right'}} >Delete row</button>
				<button className="btn btn-md btn-success" style={{float: 'right', marginRight: '2em', marginBottom: '2em'}} >Add row</button>
                <br />	
				</div>
			</div>
            </div>
            <div className="row">
            <div className="col-lg-12">
				<div className="col-md-12">
					<div className="panel panel-default">
						<div className="panel-heading"><h3>Public Ownership Percentage</h3></div>
							
							
				
							<table className="table table-striped table-responsive-md btn-table">

								<thead>
								  <tr>
									
								
									<th>Category of Shareholders</th>
									<th>Number of Shares</th>
									<th>% of Issued Shares</th>
									<th>Action</th>
								  </tr>
								</thead>
								
								<tbody>
									<tr>
										
										<td>Total Number of Shares owned by Public</td> 
										<td>3,007,462,703</td>
										<td>85.93</td>
										<td>
										  <button type="button" className="btn btn-info btn-sm m-0">Edit</button>
										</td>
									  </tr>
									  <tr>
										
										<td>Total Number of Non-Public Shares</td> 
										<td>492,527,297</td>
										<td>14.07</td>
										<td>
										  <button type="button" className="btn btn-info btn-sm m-0">Edit</button>
										</td>
									  </tr>
								  <tr>
									
									<td>Total</td> 
									<td>3,500,000,000</td>
									<td>100</td>
									<td>
									  <button type="button" className="btn btn-info btn-sm m-0">Edit</button>
									</td>
								  </tr>
								  <tr>
									
									<td>Number of Shareholder</td> 
									<td>520</td>
									<td></td>
									<td>
									  <button type="button" className="btn btn-info btn-sm m-0">Edit</button>
									</td>
								  </tr>
								</tbody>
								
								</table>
							</div>
                            <button className="btn btn-md btn-danger" style={{float:  'right'}} >Delete row</button>
				<button className="btn btn-md btn-success" style={{float: 'right', marginRight: '2em' , marginBottom: '2em'}} >Add row</button>	
					</div>
				</div>
				</div>
				
                <br/>
                <div className="row">
					<div className="col-lg-12">
				<div className="col-md-12">
					<div className="panel panel-default">
						<div className="panel-heading"><h3>Beneficial Owners owning 5% or More as of December 31, 2020</h3></div>
							
							
				
							<table className="table table-striped table-responsive-md btn-table">


								<thead>
								  <tr>
									<th>Shareholder</th>
									<th>Name of BO^v</th>
									<th>Citizenship</th>
									<th>Number of Share</th>
									<th>Percent</th>
									<th>Action</th>
								  </tr>
								</thead>
								
								<tbody>
									<tr>
										
										<td>PCD Nominee Corporation</td> 
										<td>AP Securities, Inc.:<br />
											418,642,484 shares (11.96%),</td>
										<td>Filipino/Foreign</td>
										<td>2,435,254,818</td>
										<td>69.58%</td>
										<td>
										  <button type="button" className="btn btn-info btn-sm m-0">Edit</button>
										</td>
									  </tr>
									  <tr>
										
										<td></td> 
										<td>Premium Securities, Inc.:<br />
											200,973,054 shares (5.74%)</td>
										<td></td>
										<td></td>
										<td></td>
										<td>
										  <button type="button" className="btn btn-info btn-sm m-0">Edit</button>
										</td>
									  </tr>
								  <tr>
									
									<td></td> 
									<td>Citibank N.A.:<br />
										203,917,000 shares (5.83%)</td>
									<td></td>
									<td></td>
									<td></td>
									<td>
									  <button type="button" className="btn btn-info btn-sm m-0">Edit</button>
									</td>
								  </tr>
								 
								</tbody>
								
								</table>
							</div>
                            <button className="btn btn-md btn-danger" style={{float:  'right'}} >Delete row</button>
				<button className="btn btn-md btn-success" style={{float: 'right', marginRight: '2em' , marginBottom: '2em'}} >Add row</button>	
					</div>
					</div>
				</div>
				
			<br></br>
            <div className="row">
					<div className="col-lg-12">
				<div className="col-md-12">
					<div className="panel panel-default">
						<div className="panel-heading"><h3>Beneficial Owners owning 5% or More as of December 31, 2020</h3></div>
							
							
				
							<table className="table table-striped table-responsive-md btn-table">


                            <thead>
							  <tr>
								<th></th>
							<th>Stockholder</th>
							<th>Number of Shares</th>
							<th>% of Issued Shares</th>
							<th>Action</th>
                            </tr></thead>
<tbody>
						<tr>
							<td >1</td>
							<td>PCD Nominee Corporation (Filipino)</td>
							<td >2,368,877,120</td>
							<td >67.682</td>
							<td>
								<button type="button" class="btn btn-info btn-sm m-0">Edit</button>
							  </td>
						</tr><tr>
							<td >2</td>
							<td>Antonio Victoriano G. Gregorio III</td>
							<td >220,000,000</td>
							<td >6.286</td>
							<td>
								<button type="button" class="btn btn-info btn-sm m-0">Edit</button>
							  </td>
						</tr><tr>
							<td >3</td>
							<td>Garry Lincoln C. Taboso</td>
							<td >200,001,000</td>
							<td >5.714</td>
							<td>
								<button type="button" class="btn btn-info btn-sm m-0">Edit</button>
							  </td>
						</tr><tr>
							<td >4</td>
							<td>Jose M. Crisostomo</td>
							<td >120,000,000</td>
							<td >3.429</td>
							<td>
								<button type="button" class="btn btn-info btn-sm m-0">Edit</button>
							  </td>
						</tr><tr>
							<td >5</td>
							<td>Daniel C. Go</td>
							<td >120,000,000</td>
							<td >3.429</td>
							<td>
								<button type="button" class="btn btn-info btn-sm m-0">Edit</button>
							  </td>
						</tr><tr>
							<td >6</td>
							<td>David M. Dela Cruz</td>
							<td >100,100,000</td>
							<td >2.860</td>
							<td>
								<button type="button" class="btn btn-info btn-sm m-0">Edit</button>
							  </td>
						</tr><tr>
							<td >7</td>
							<td>Delfin S. Castro, Jr.</td>
							<td >72,468,571</td>
							<td >2.071</td>
							<td>
								<button type="button" class="btn btn-info btn-sm m-0">Edit</button>
							  </td>
						</tr><tr>
							<td >8</td>
							<td>PCD Nominee Corporation (Non-Filipino)</td>
							<td >66,377,698</td>
							<td >1.897</td>
							<td>
								<button type="button" class="btn btn-info btn-sm m-0">Edit</button>
							  </td>
						</tr><tr>
							<td >9</td>
							<td>Jose Francisco E. Miranda</td>
							<td >60,198,000</td>
							<td >1.720</td>
							<td>
								<button type="button" class="btn btn-info btn-sm m-0">Edit</button>
							  </td>
						</tr><tr><td >10</td>
							<td>Zandro L. Zulueta</td>
							<td >60,000,000</td>
							<td >1.714</td>
							<td>
								<button type="button" class="btn btn-info btn-sm m-0">Edit</button>
							  </td>
						</tr><tr>
							<td >11</td>
							<td>Mercury Group of Companies, Inc.</td>
							<td >44,508,600</td>
							<td >1.272</td>
							<td>
								<button type="button" class="btn btn-info btn-sm m-0">Edit</button>
							  </td>
						</tr><tr>
							<td >12</td>
							<td>J.P Morgan Securities</td>
							<td >25,475,814</td>
							<td >0.728</td>
							<td>
								<button type="button" class="btn btn-info btn-sm m-0">Edit</button>
							  </td>
						</tr><tr>
							<td >13</td>
							<td>Li Chih Hui</td>
							<td >6,000,000</td>
							<td >0.171</td>
							<td>
								<button type="button" class="btn btn-info btn-sm m-0">Edit</button>
							  </td>
						</tr><tr>
							<td >14</td>
							<td>Salvador H. Laurel</td>
							<td >2,472,700</td>
							<td >0.071</td>
							<td>
								<button type="button" class="btn btn-info btn-sm m-0">Edit</button>
							  </td>
						</tr><tr><td >15</td>
							<td>Florencio T. Mallare</td>
							<td >1,953,433</td>
							<td >0.056</td>
							<td>
								<button type="button" class="btn btn-info btn-sm m-0">Edit</button>
							  </td>
						</tr><tr>
							<td >16</td>
							<td>Jane Mallare</td>
							<td >1,879,252</td>
							<td >0.054</td>
							<td>
								<button type="button" class="btn btn-info btn-sm m-0">Edit</button>
							  </td>
						</tr><tr>
							<td >17</td>
							<td>Valmora Investment &amp; Management Corp.</td>
							<td >1,772,625</td>
							<td >0.051</td>
							<td>
								<button type="button" class="btn btn-info btn-sm m-0">Edit</button>
							  </td>
						</tr><tr>
							<td >18</td>
							<td>Horst Mac Warta</td>
							<td >1,352,700</td>
							<td >0.039</td>
							<td>
								<button type="button" class="btn btn-info btn-sm m-0">Edit</button>
							  </td>
						</tr><tr>
							<td >19</td>
							<td>Robert S. Chua</td>
							<td >1,100,000</td>
							<td >0.031</td>
							<td>
								<button type="button" class="btn btn-info btn-sm m-0">Edit</button>
							  </td>
						</tr><tr>
							<td >20</td>
							<td>Candice Choa Cocuaco</td>
							<td >1,028,571</td>
							<td >0.029</td>
							<td>
								<button type="button" class="btn btn-info btn-sm m-0">Edit</button>
							  </td>
						</tr><tr class="blank">
							<td></td><td></td><td></td><td></td></tr><tr><td></td>
								<td>Sub-Total</td>
								<td>3,475,566,084</td>
								<td>99.300</td>
								<td>
									<button type="button" class="btn btn-info btn-sm m-0">Edit</button>
								  </td>
							</tr><tr>
								<td></td>
								<td>Other Stockholders</td>
								<td>24,433,916</td>
								<td>0.700</td>
								<td>
									<button type="button" class="btn btn-info btn-sm m-0">Edit</button>
								  </td>
							</tr><tr>
								<td></td>
								<td>TOTAL
								</td><td>3,500,000,000</td>
								<td>100.00</td>
							
								<td>
								  <button type="button" class="btn btn-info btn-sm m-0">Edit</button>
								</td>
							 </tr>
                             </tbody>
							
							</table>
							</div>
                            <button className="btn btn-md btn-danger" style={{float:  'right'}} >Delete row</button>
				<button className="btn btn-md btn-success" style={{float: 'right', marginRight: '2em' , marginBottom: '2em'}} >Add row</button>	
					</div>
					</div>
				</div>
				
			<br></br>
				</div>
                
                </div>


                </div>


</home>
	
  )
}
