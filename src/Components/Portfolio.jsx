/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Math in a Flash",
    description:
      "Utilized Javascript, HTML, and CSS to build a web game application for children to practice math equations.",
    url: "https://my_in_a_flash.surge.sh/",
  },
  {
    title: "ArtFolio",
    description:
      "Designed an online application for visual artists to showcase their artwork by building a full-stack website with MongoDB, Express, React, and Node.Programmed full CRUD ability for each artwork feature using stored procedures in to execute operations.",
    url: "https://github.com/microsoft/workshop-library/tree/main/full/build-resume-website",
  },
  {
    title: "Bootcamp Buddy",
    description:
      "Collaborated with a team of # developers to build a full stack website with PostgreSQL, Express, React, and Node that was coded and deployed RESTful API to serve as a review hub of software engineering bootcamps for participants to share their experiences.",
    url: "https://github.com/microsoft/web-dev-for-beginners",
  },
  {
    title: "Journalize",
    description:
      "Coded a full stack application with PostgreSQL, Express, React, and Node with a RESTful API to store journal entries",
    url: "https://github.com/microsoft/workshop-library/tree/main/full/build-resume-website",
  },
];

const Portfolio = () => {
  return (
    <section className="light" id="portfolio">
      <h2>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src="https://cdn.pixabay.com/photo/2019/07/14/16/27/pen-4337521_1280.jpg
            "
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
