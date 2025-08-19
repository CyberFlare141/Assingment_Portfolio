import React, { useState } from "react";
import ArticleTable from "../components/ArticleTable";
import { Pagination } from "react-bootstrap";

function MyArticles() {
const allArticles = [
  { title: "AI-Powered Chatbots:\n    Enhancing User Experience with NLP", status: "Published", lastEdited: "2 days ago", category: "Artificial Intelligence" },
  { title: "Blockchain Technology:\n    Securing Digital Transactions", status: "Draft", lastEdited: "1 week ago", category: "Blockchain" },
  { title: "Cloud Computing:\n    Optimizing Storage and Scalability", status: "Published", lastEdited: "2 months ago", category: "Cloud Computing" },
  { title: "IoT in Smart Cities:\n    Real-Time Data for Urban Planning", status: "Published", lastEdited: "2 weeks ago", category: "Internet of Things" },
  { title: "Machine Learning:\n   Predictive Analytics for Big Data", status: "Published", lastEdited: "3 weeks ago", category: "Machine Learning" },
  { title: "Cybersecurity Systems:\n    Threat Detection Using AI", status: "Draft", lastEdited: "1 month ago", category: "Cybersecurity" },
  { title: "Cloud Computing:\n    Optimizing Data and Stability", status: "Published", lastEdited: "4 months ago", category: "Cloud Computing" },
];


  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 3;
  const totalPages = Math.ceil(allArticles.length / articlesPerPage);

  const indexOfLast = currentPage * articlesPerPage;
  const indexOfFirst = indexOfLast - articlesPerPage;
  const currentArticles = allArticles.slice(indexOfFirst, indexOfLast);

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <h1>My Articles</h1>
      <ArticleTable articles={currentArticles} />

      <Pagination>
        {[...Array(totalPages)].map((_, index) => (
          <Pagination.Item
            key={index + 1}
            active={index + 1 === currentPage}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </Pagination.Item>
        ))}
      </Pagination>
    </div>
  );
}

export default MyArticles;
