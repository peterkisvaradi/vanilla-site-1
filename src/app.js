(() => {
  const onClickContent = (event) => {
    cogElement.classList.toggle("rotate");
    switch (event.currentTarget.id) {
      case "header0":
        contentOne.classList.add("contentoneactive");
        contentTwo.classList.remove("contenttwoactive");
        headerItems[0].classList.add("headeritemactive");
        headerItems[1].classList.remove("headeritemactive");
        break;
      case "header1":
        contentOne.classList.remove("contentoneactive");
        contentTwo.classList.add("contenttwoactive");
        headerItems[1].classList.add("headeritemactive");
        headerItems[0].classList.remove("headeritemactive");
        break;
    }
  };

  const rootElement = document.getElementById("root");
  rootElement.classList.add(["wrap"]);

  const header = document.createElement("div");
  header.classList.add(["header"]);

  const headerItems = [];
  for (let i = 0; i < 2; i++) {
    headerItems.push(document.createElement("div"));
    headerItems[i].innerHTML = CONTENT[`MENU${i}`];
    headerItems[i].classList.add("headeritem");
    headerItems[i].onclick = (event) => onClickContent(event);
    headerItems[i].setAttribute("id", `header${i}`);

    header.appendChild(headerItems[i]);
  }
  headerItems[0].classList.add("headeritemactive");
  rootElement.appendChild(header);

  const contentWrapper = document.createElement("div");
  contentWrapper.classList.add("contentwrap");

  const contentOne = document.createElement("div");
  const contentTwo = document.createElement("div");
  contentOne.innerHTML = "CONTENT ONE";
  contentTwo.innerHTML = "CONTENT TWO";
  contentOne.classList.add("contents");
  contentTwo.classList.add("contents");
  contentOne.classList.add("contentone", "contentoneactive");
  contentTwo.classList.add("contenttwo");

  contentWrapper.appendChild(contentOne);
  contentWrapper.appendChild(contentTwo);

  const cogElement = document.createElement("div");
  const cogHole = document.createElement("div");
  const cogTip1 = document.createElement("div");
  const cogTip2 = document.createElement("div");
  const cogShadow = document.createElement("div");

  cogShadow.classList.add("cogshadow");
  cogHole.classList.add("coghole");
  cogTip1.classList.add("cogtip1");
  cogTip2.classList.add("cogtip2");

  header.appendChild(cogShadow);
  cogElement.appendChild(cogHole);
  cogElement.appendChild(cogTip1);
  cogElement.appendChild(cogTip2);

  cogElement.classList.add("cog");
  header.appendChild(cogElement);
  cogElement.addEventListener("animationiteration", () =>
    cogElement.classList.remove("rotate")
  );

  rootElement.appendChild(contentWrapper);
})();
