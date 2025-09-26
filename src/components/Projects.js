import React, { useState } from "react";
import { Container, Row, Col, Card, Modal } from "react-bootstrap";
import kokuperfume from "../assets/kokuperfume.png";
import vprowebsite from "../assets/vprowebsite.png";
import boostrewards from "../assets/boostrewards.png";


function Projects() {
  const [show, setShow] = useState(false);
  const [selectedImg, setSelectedImg] = useState("");

  const projectList = [
    {
      title: "Koku Perfume",
      desc: "KokuPerfume is an e-commerce company founded by a New Zealander entrepreneur. It specializes in selling perfumes across Europe, offering customers a wide variety of fragrances to suit every style and occasion.",
      img: kokuperfume,
    },
    {
      title: "Virtual Pro",
      desc: "Virtual Pro is a software development services company founded by Engr. Edmundo Eduardo. It provides innovative technology solutions, offering custom software development, web and mobile applications, and IT consulting to help businesses grow and adapt in the digital age.",
      img: vprowebsite,
    },
    {
      title: "Boost Rewards",
      desc: "Boost Rewards is a marketing and loyalty platform founded by a French businessman. It works like an advertiser for shops by promoting their products and services. Customers who shop at participating stores can earn rewards such as points, cashback, or discounts, while businesses benefit from increased visibility, customer loyalty, and repeat sales.",
      img: boostrewards,
    },
  ];

  const handleShow = (img) => {
    setSelectedImg(img);
    setShow(true);
  };

  const handleClose = () => setShow(false);

  return (
    <section id="projects" className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-4">My Projects</h2>
        <Row>
          {projectList.map((proj, i) => (
            <Col md={4} key={i} className="mb-4">
              <Card className="h-100 shadow-sm">
                {/* Image clickable */}
                <Card.Img
                  variant="top"
                  src={proj.img}
                  alt={proj.title}
                  style={{ height: "200px", objectFit: "cover", cursor: "pointer" }}
                  onClick={() => handleShow(proj.img)}
                />
                <Card.Body>
                  <Card.Title>{proj.title}</Card.Title>
                  <Card.Text>{proj.desc}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Modal for fullscreen image */}
      <Modal show={show} onHide={handleClose} centered size="lg">
        <Modal.Body className="p-0">
          <img src={selectedImg} alt="Project" style={{ width: "100%", height: "auto" }} />
        </Modal.Body>
      </Modal>
    </section>
  );
}

export default Projects;
