import React from "react";

export default function NewsItem(props) {
  let {title,description, imageUrl, newsUrl, author, date} = props;     

  return (
      <div className="my-3">
        <div className="card">
          <img src={imageUrl ? imageUrl : 'https://c.ndtvimg.com/2022-07/ng9r0t5o_international-space-station-reuters_625x300_28_July_22.jpg'} 
          className="card-img-top" alt="Sports" />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              {description}
            </p>
            <p className="card-text">
              <small className="text-muted">By {author ? author : 'Unknown'} on {new Date(date).toUTCString()}</small>
            </p>
            <a rel="noreferrer" href={newsUrl} target='_blank' className="btn btn-sm btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
}
