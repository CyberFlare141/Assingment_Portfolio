import React from "react";
import { Badge } from "react-bootstrap";

function ArticleTable({ articles }) {
  const getBadgeVariant = (status) => {
    if (status === "Published") return "success";
    if (status === "Draft") return "warning";
    return "secondary";
  };

  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>Title</th>
          <th>Category</th>  
          <th>Status</th>
          <th>Last Edited</th>
          
        </tr>
      </thead>
      <tbody>
        {articles.map((article, index) => (
          <tr key={index}>
            <td>
              {article.title.split("\n").map((line, i) => (
                <React.Fragment key={i}>
                  {line.trim()}
                  <br />
                </React.Fragment>
              ))}
            </td>
            <td>{article.category}</td>  
            <td>
              <Badge pill bg={getBadgeVariant(article.status)}>
                {article.status}
              </Badge>
            </td>
            <td>{article.lastEdited}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ArticleTable;
