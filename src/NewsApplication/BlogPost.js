import React, { useEffect, useState } from 'react'
import './Style.css';
function BlogPost(props) {
console.log(props)

  return (
    <>
        <h5>Post</h5>
        <div className="container">
  <div className="row">
    <div className="col-12 col-sm-8 col-md-6 col-lg-4">
      <div className="card">
        <img className="card-img" src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/pasta.jpg" alt="Bologna" />
        <div className="card-img-overlay">
          <a href="#" className="btn btn-success btn-sm">Cooking</a>
        </div>
        <div className="card-body">
          <h4 className="card-title text-primary">Pasta with Prosciutto</h4>
          <small className="text-muted cat">
            <i className="far fa-clock text-info"></i> 30 minutes
            <i className="fas fa-users text-info"></i> 4 portions
          </small>
          <p className="card-text text-muted">I love quick, simple pasta dishes, and this is one of my favorite.</p>
          <button type="button" className="btn btn-danger">Read More</button>
        </div>
        <div className="card-footer text-muted d-flex justify-content-between bg-transparent border-top-0">
          <div className="views">Oct 20, 12:45PM
          </div>
           
        </div>
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default BlogPost