import React from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";

// Functional Component with props -- render each card with different campsite details
function RenderDirectoryItem({ campsite }) {
  return (
    <Card>
      <Link to={`/directory/${campsite.id}`}>
        <CardImg width="100%" src={campsite.image} alt={campsite.name} />
        <CardImgOverlay>
          <CardTitle>{campsite.name}</CardTitle>
        </CardImgOverlay>
      </Link>
    </Card>
  );
}

// Changed to Fuctional component -- does not use 'this' keyword

function Directory(props) {
  // pull data from each campsite using map() from array
  const directory = props.campsites.map((campsite) => {
    return (
      <div key={campsite.id} className="col-md-5 m-1">
        <RenderDirectoryItem campsite={campsite} />
      </div>
    );
  });

  // return for entire directory component
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/home">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>Directory</BreadcrumbItem>
          </Breadcrumb>
          <h2>Directory</h2>
          <hr />
        </div>
      </div>
      <div className="row">{directory}</div>
    </div>
  );
}

export default Directory;
