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
  {title: "Artificial Intelligence:\n     Transforming Modern Industries", status: "Draft", lastEdited: "2 weeks ago", category: "AI & Machine Learning" },
{title: "Big Data: Unlocking Business Insights", status: "Published", lastEdited: "1 month ago", category: "Data Science" },
{title: "Cybersecurity:\n     Protecting the Digital World", status: "Published", lastEdited: "3 months ago", category: "Security" },
{title: "Blockchain:\n     Beyond Cryptocurrencies", status: "Draft", lastEdited: "5 days ago", category: "Blockchain" },
{title: "Edge Computing:\n     Bringing Data Closer", status: "Published", lastEdited: "2 months ago", category: "Cloud Computing" },
{title: "Quantum Computing:\n     The Future of Processing", status: "Draft", lastEdited: "1 week ago", category: "Quantum Technology" },
{title: "DevOps:\n     Bridging Development and Operations", status: "Published", lastEdited: "6 months ago", category: "Software Development" },
{title: "5G Networks:\n     Powering the Next Generation", status: "Published", lastEdited: "4 weeks ago", category: "Networking" },
{title: "IoT:\n     Connecting the Physical and Digital Worlds", status: "Draft", lastEdited: "2 months ago", category: "IoT" },
{title: "Natural Language Processing:\n     Teaching Machines to Understand", status: "Published", lastEdited: "3 weeks ago", category: "AI & Machine Learning" },
{title: "Augmented Reality:\n     Enhancing Human Experience", status: "Draft", lastEdited: "1 month ago", category: "AR/VR" },
{title: "Serverless Computing:\n     Simplifying Deployment", status: "Published", lastEdited: "2 weeks ago", category: "Cloud Computing" },
{title: "Data Privacy:\n     Navigating the Challenges", status: "Published", lastEdited: "5 months ago", category: "Security" },
{title: "Digital Twins:\n     Simulating the Real World", status: "Draft", lastEdited: "6 days ago", category: "Innovation" },
{title: "Green Computing:\n     Towards Sustainable Technology", status: "Published", lastEdited: "4 months ago", category: "Sustainability" },
{title: "Microservices Architecture:\n      Building Scalable Systems", status: "Published", lastEdited: "3 months ago", category: "Software Development" },
{title: "Generative AI:\n      Creating Beyond Human Limits", status: "Draft", lastEdited: "2 weeks ago", category: "AI & Machine Learning" },
{title: "Cloud Security:\n      Safeguarding Virtual Infrastructures", status: "Published", lastEdited: "1 month ago", category: "Security" },
{title: "Data Lakes vs Data Warehouses:\n      Key Differences", status: "Draft", lastEdited: "5 days ago", category: "Data Science" },
{title: "Autonomous Vehicles:\n      Driving with AI", status: "Published", lastEdited: "2 months ago", category: "AI & Robotics" },
{title: "Containerization:\n      Powering Modern Applications", status: "Draft", lastEdited: "3 weeks ago", category: "Cloud Computing" },
{title: "Ethical AI:\n      Balancing Innovation and Responsibility", status: "Published", lastEdited: "4 months ago", category: "Ethics & Technology" },
{title: "Cybersecurity:\n     Protecting the Digital World", status: "Published", lastEdited: "3 months ago", category: "Security" },
{title: "Blockchain:\n     Beyond Cryptocurrencies", status: "Draft", lastEdited: "5 days ago", category: "Blockchain" },
{title: "Edge Computing:\n     Bringing Data Closer", status: "Published", lastEdited: "2 months ago", category: "Cloud Computing" },
{title: "Data Privacy:\n     Navigating the Challenges", status: "Published", lastEdited: "5 months ago", category: "Security" },
{title: "Digital Twins:\n     Simulating the Real World", status: "Draft", lastEdited: "6 days ago", category: "Innovation" },
{title: "Green Computing:\n     Towards Sustainable Technology", status: "Published", lastEdited: "4 months ago", category: "Sustainability" },
{title: "Microservices Architecture:\n      Building Scalable Systems", status: "Published", lastEdited: "3 months ago", category: "Software Development" },
{title: "Generative AI:\n      Creating Beyond Human Limits", status: "Draft", lastEdited: "2 weeks ago", category: "AI & Machine Learning" },
{title: "Cloud Security:\n      Safeguarding Virtual Infrastructures", status: "Published", lastEdited: "1 month ago", category: "Security" },
{title: "Data Lakes vs Data Warehouses:\n      Key Differences", status: "Draft", lastEdited: "5 days ago", category: "Data Science" },
{title: "Autonomous Vehicles:\n      Driving with AI", status: "Published", lastEdited: "2 months ago", category: "AI & Robotics" },
{title: "Containerization:\n      Powering Modern Applications", status: "Draft", lastEdited: "3 weeks ago", category: "Cloud Computing" },
{title: "Ethical AI:\n      Balancing Innovation and Responsibility", status: "Published", lastEdited: "4 months ago", category: "Ethics & Technology" }
];

const [currentPage, setCurrentPage] = useState(1);
  const [pageStart, setPageStart] = useState(1);
  const articlesPerPage = 5;
  const totalPages = Math.ceil(allArticles.length / articlesPerPage);
  const visiblePages = 6; 

  const indexOfLast = currentPage * articlesPerPage;
  const indexOfFirst = indexOfLast - articlesPerPage;
  const currentArticles = allArticles.slice(indexOfFirst, indexOfLast);

  const handlePrev = () => {
    if (pageStart > 1) {
      setPageStart(pageStart - 1);
      setCurrentPage(pageStart - 1);
    }
  };

  const handleNext = () => {
    if (pageStart + visiblePages - 1 < totalPages) {
      setPageStart(pageStart + 1);
      setCurrentPage(pageStart + 1);
    }
  };

  return (
    <div class = "Pagination">
      <h1>My Articles</h1>
      <ArticleTable articles={currentArticles} />

      <Pagination>
        <Pagination.Prev disabled={pageStart === 1} onClick={handlePrev} />

        {Array.from({ length: Math.min(visiblePages, totalPages - pageStart + 1) }, (_, i) => {
          const pageNum = pageStart + i;
          return (
            <Pagination.Item
              key={pageNum}
              active={pageNum === currentPage}
              onClick={() => setCurrentPage(pageNum)}
            >
              {pageNum}
            </Pagination.Item>
          );
        })}

        <Pagination.Next
          disabled={pageStart + visiblePages - 1 >= totalPages}
          onClick={handleNext}
        />
      </Pagination>
    </div>
  );
}

export default MyArticles;
