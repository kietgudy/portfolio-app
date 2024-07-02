import {  Modal } from "antd";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { GrReactjs } from "react-icons/gr";
interface Detail {
  description: string;
  frontend: string;
  backend: string;
  demo: string;
  github: string;
}

interface Project {
  image: string;
  title: string;
  detail: Detail;
}
const Project = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dataDetail, setDataDetail] = useState<Project | null>(null);
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setDataDetail(null);
  };
  const dataProjects: Project[] = [
    {
      image: "",
      title: "BOOK SALES MANAGEMENT WEBSITE",
      detail: {
        description: `The website manages a small bookstore, using NestJs as the backend for the RESTful API and ReactJS, this project aims to deliver a smooth and customizable user experience.`,
        frontend:
          "HTML/CSS (SCSS), JavaScript, ReactJs, Redux Toolkit, Ant Design.",
        backend: "NestJs",
        demo: "Coming soon",
        github: "https://github.com/kietgudy/ecommerce-book",
      },
    },
    {
      image: "",
      title: "QUIZ MANAGEMENT WEBSITE",
      detail: {
        description: `A quiz management website enabling users to create and answer questions flexibly. Utilizing NodeJs for the backend RESTful API and ReactJS for the frontend.`,
        frontend:
          "HTML/CSS (SCSS), JavaScript, ReactJS, Redux Toolkit, Bootstrap 5.",
        backend: "NodeJs",
        demo: "Coming soon",
        github: "https://github.com/kietgudy/test-quizz",
      },
    },
  ];
  return (
    <div className="arlo_tm_section" id="projects">
      
      <Modal
        title={dataDetail && dataDetail.title ? `Dự án ${dataDetail.title}` : ""}
        width={700}
        open={isModalOpen}
        onOk={() => handleCloseModal()}
        onCancel={() => handleCloseModal()}
        footer={null}
        // maskClosable={false}
      >
        {dataDetail && <ul>
            <li>Mô tả: {dataDetail.detail.description}</li>
            <li>Frontend: {dataDetail.detail.frontend}</li>
            <li>Backend: {dataDetail.detail.backend}</li>
            <li>Demo:
                <a href={dataDetail.detail.demo} target="_blank">{dataDetail.detail.demo}</a>
            </li>
            <li>Github:
                <a href={dataDetail.detail.github} target="_blank">{dataDetail.detail.github}</a>
            </li>
            </ul>}
      </Modal>
      <div className="arlo_tm_services_wrap">
        <div className="container">
          <div className="arlo_tm_title_holder">
            <h3>Project </h3>
            <span>Dự án cá nhân</span>
          </div>
          <div className="list_wrap">
            <ul>
              {dataProjects.map((item) => {
                return (
                  <li>
                    <div
                      className="inner"
                      onClick={() => {
                        setDataDetail(item);
                        setIsModalOpen(true);
                      }}
                    >
                      <div className="icon">
                        <GrReactjs size={50} color="#61dbfb" />
                      </div>
                      <div className="title_service">
                        <h3>{item.title}</h3>
                      </div>
                      <div className="view_detail" style={{ padding: "5px 0" }}>
                        <span style={{ cursor: "pointer" }}>
                          <FaArrowRight />
                          &nbsp; Xem chi tiết
                        </span>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
