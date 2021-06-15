let condition = true;

let lastIndexA = 0;
let lastIndexB = 0;
let viewMode = 'A';

const first = document.getElementById("first");
const second = document.getElementById("second");

const op1 = document.getElementById("op1");
const op2 = document.getElementById("op2");

op1.addEventListener("click", () => {
  first.innerHTML = renderAccordionA(firstList);
  second.innerHTML = "";
  viewMode = "A";
  controlInital();
});

op2.addEventListener("click", () => {
  first.innerHTML = "";
  second.innerHTML = renderAccordionB(secondList);
  viewMode = "B";
  controlInital();
});

window.addEventListener("load", () => {
  first.innerHTML = renderAccordionA(firstList);
  second.innerHTML = "";
  controlInital();
});

const renderAccordionA = (items) => {
  let structure = "";
  `${items.forEach((item) => {
    structure += `
        <div class="container" id="${item.id}" onclick="getIdElement(id)">
            <div class="header">
                <span>${item.title}</span>
                <span class="material-icons">keyboard_arrow_up</span>
            </div>
            <div class="body">
                <p class="body__text">${item.text}</p>
            </div>
        </div>
        `;
  })}`;
  return structure;
};

const renderAccordionB = (items) => {
  let structure = "";
  `${items.forEach((item) => {
    structure += `
        <div class="container" id="${item.id}" onclick="getIdElement(id)">
            <div class="header">
                <span>${item.title}</span>
                <span class="material-icons">keyboard_arrow_up</span>
            </div>
            <div class="body">
                <p class="body__text">${item.text}</p>
            </div>
        </div>
        `;
  })}`;
  return structure;
};
/* Control inital position and render elements */
const controlInital = () => {
  const elements = document.getElementsByClassName("container");
  const index = viewMode === 'A' ? lastIndexA : lastIndexB;
  const [body, icon] = manageAccordion(elements[index].id);
  showIcon(body, icon);
};

const getIdElement = (id) => {
  if (viewMode === "A") lastIndexA = id - 1;
  if (viewMode === "B") lastIndexB = id - 1;
  const containers = document.getElementsByClassName("container");
  const [currentBody, currentIcon] = manageAccordion(id);

  if (currentBody.classList.contains("show")) {
    if (condition) {
      hideIcon(currentBody, currentIcon);
    }
  } else {
    Object.keys(containers).map((key) => {
      const keyId = (parseInt(key) + 1).toString();
      if (keyId === id) {
        const [body, icon] = manageAccordion(id);
        showIcon(body, icon);
      } else {
        const [body, icon] = manageAccordion(keyId);
        hideIcon(body, icon);
      }
    });
  }
};

window.addEventListener("mousedown", (e) => {
  const el = e.target.classList;
  if (el[0] === "body" || el[0] === "body__text ") condition = false;
  else condition = true;
});

const manageAccordion = (id) => {
  const initial = document.getElementById(id);
  const header = initial.getElementsByClassName("header")[0];
  const icon = header.getElementsByClassName("material-icons")[0];
  const body = initial.getElementsByClassName("body")[0];
  return [body, icon, header];
};

const showIcon = (body, icon) => {
  icon.innerText = "keyboard_arrow_down";
  body.classList.add("show");
};

const hideIcon = (body, icon) => {
  icon.innerText = "keyboard_arrow_up";
  body.classList.remove("show");
};

const firstList = [
  {
    id: 1,
    title: "Opción 1",
    text: "Lorem ipsum, dolor sit amet consectetur.",
  },
  {
    id: 2,
    title: "Opción 2",
    text: "Lorem ipsum, dolor sit amet consectetur.",
  },
  {
    id: 3,
    title: "Opción 3",
    text: "Lorem ipsum, dolor sit amet consectetur.",
  },
];

const secondList = [
  {
    id: 1,
    title: "Opción 4",
    text: "Lorem ipsum, dolor sit amet consectetur.",
  },
  {
    id: 2,
    title: "Opción 5",
    text: "Lorem ipsum, dolor sit amet consectetur.",
  },
  {
    id: 3,
    title: "Opción 6",
    text: "Lorem ipsum, dolor sit amet consectetur.",
  },
  {
    id: 4,
    title: "Opción 7",
    text: "Lorem ipsum, dolor sit amet consectetur.",
  },
];
