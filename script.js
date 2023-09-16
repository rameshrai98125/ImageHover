// const center = document.querySelector(".center");

// center.addEventListener("mousemove", (e) => {
//   console.log(e.clientX);
// });

const center = document.querySelector(".center");

const throttleFunction = (func, delay) => {
  let prev = 0;
  return (...args) => {
    let now = new Date().getTime();
    // console.log(now - prev, delay);
    if (now - prev > delay) {
      prev = now;
      return func(...args);
    }
  };
};

center.addEventListener(
  "mousemove",
  throttleFunction((dets) => {
    var div = document.createElement("div");
    div.classList.add("imgDiv");
    div.style.left = dets.clientX + "px";
    div.style.top = dets.clientY + "px";

    var img = document.createElement("img");
    img.src =
      "https://images.unsplash.com/photo-1670026132348-b765874ec822?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80";
    div.appendChild(img);
    document.body.appendChild(div);

    gsap.to(img, {
      y: "0",
      ease: "power",
      duration: 0.3,
    });
    gsap.to(img, {
      y: "100%",
      delay: 0.3,
      ease: "power",
      duration: 0.3,
    });

    setTimeout(function () {
      div.remove();
    }, 2000);
  }, 50)
);
