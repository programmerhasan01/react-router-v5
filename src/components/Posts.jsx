import React from "react";
import { useHistory, useLocation, useParams } from "react-router-dom";

function Posts() {
  const { category, topic } = useParams();
  const history = useHistory();
  const location = useLocation();
  console.log(location);
  return (
    <div>
      Posts Page - {category} / {topic}
    </div>
  );
}

export default Posts;
