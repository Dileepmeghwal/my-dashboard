import React, { useEffect, useState } from "react";

const Fullscreen = () => {
  const [dir, setDir] = useState(localStorage.getItem("direction") || "ltr");

//   function fullscreen() {
//     return page.requestFullscreen();
//   }

  function changeDir() {
    const newDirection = dir === "ltr" ? "rtl" : "ltr";
    setDir(newDirection);
    localStorage.setItem("direction", newDirection);
    document.documentElement.dir = newDirection;
  }

  useEffect(() => {
    document.documentElement.dir = dir;
  }, [dir]);

  return (
    <div id="fullscreen">
      <button onClick={changeDir}>Fullscreen</button>
      <h1>Fullscreen</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed iure
        itaque tempore, illo odit amet quam suscipit veritatis vitae officia
        quod doloremque inventore incidunt explicabo modi sequi quo dolore sint
        accusantium aliquid quae voluptates voluptas recusandae ullam!
        Obcaecati, nulla dolores! Velit nesciunt nihil facilis? Maxime fugit
        exercitationem maiores ab eius blanditiis architecto autem harum, natus
        quam quia eligendi incidunt id optio voluptatibus excepturi ipsum
        inventore earum consequatur. Neque dolore, facere libero eaque mollitia
        dignissimos, non illum, inventore totam saepe deserunt ab nesciunt
        blanditiis nihil repellendus minus. Omnis autem enim, similique ullam
        aliquam error cumque rem ratione perferendis veniam nemo. Magnam?
      </p>
    </div>
  );
};

export default Fullscreen;
