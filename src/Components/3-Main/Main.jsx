import { useState } from "react";
import { myProjects } from "./myProjects";
import { AnimatePresence, motion } from "framer-motion";
import { Element } from "react-scroll";
import "./main.css";

const Main = () => {
  const [curruntActive, setCurruntActive] = useState("all");
  const [arr, setArr] = useState(myProjects);

  const handleClick = (buttonCategory) => {
    setCurruntActive(buttonCategory);

    const newArr = myProjects.filter((item) => {
      const ZZZ = item.category.find((myItem) => {
        return myItem === buttonCategory;
      });
      return ZZZ === buttonCategory;
    });
    setArr(newArr);
  };
  return (
    <Element name="projects">
      <main className="flex">
        <section className="flex  left-section">
          <button
            onClick={() => handleClick("all")}
            className={curruntActive === "all" ? "active" : null}
          >
            all projects
          </button>
          <button
            onClick={() => handleClick("css")}
            className={curruntActive === "css" ? "active" : null}
          >
            HTML & CSS
          </button>
          <button
            onClick={() => handleClick("js")}
            className={curruntActive === "js" ? "active" : null}
          >
            JavaScript
          </button>
          <button
            onClick={() => handleClick("bootstrap")}
            className={curruntActive === "bootstrap" ? "active" : null}
          >
            Bootstrap
          </button>
          <button
            onClick={() => handleClick("react")}
            className={curruntActive === "react" ? "active" : null}
          >
            React
          </button>
        </section>

        <section className=" flex right-section">
          <AnimatePresence>
            {arr.map((item) => {
              return (
                <motion.article
                  layout
                  initial={{ transform: "scale(0.4)" }}
                  animate={{ transform: "scale(1)" }}
                  transition={{ type: "spring", damping: 8, stiffness: 50 }}
                  key={item.image}
                  className="  card"
                >
                  <img width={266} src={item.image} alt="" />

                  <div style={{ width: "266px" }} className="box">
                    <h1 className="title">{item.title} </h1>
                    <p className="sub-title">{item.description}</p>

                    <div className="flex icons">
                      <div style={{ gap: "11px" }} className="flex">
                        <div>
                          <a
                            className="icon-link"
                            href={item.link}
                            target="_blank"
                          ></a>
                        </div>
                        <div>
                          <a
                            className="icon-github"
                            href={item.github}
                            target="_blank"
                          ></a>
                        </div>
                      </div>

                      <a className="link flex" href="">
                        more
                        <span
                          style={{ alignSelf: "end" }}
                          className="icon-arrow-right"
                        ></span>
                      </a>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </section>
      </main>
    </Element>

  );
};

export default Main;
