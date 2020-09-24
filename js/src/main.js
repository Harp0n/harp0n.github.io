window.addEventListener('resize', function () {
  "use strict";
  window.location.reload();
});

if (window.matchMedia("(min-width: 600px)").matches) {
  const memberCards = document.querySelector(".team-image-container");
  const memberInfo = document.querySelector(".team-member-info");
  const teamCard = document.getElementById("team-card").content.cloneNode(true);
  memberInfo.append(teamCard);
  console.log("nie iksde");
  memberCards.addEventListener("click", (event) => {
    const teamImages = memberCards.querySelector(
      ".team-image-container__images"
    );
    for (const child of teamImages.children) {
      child.classList.remove("yellow-background");
    }
    while (memberInfo.firstChild) {
      memberInfo.lastChild.remove();
    }

    if (event.target.tagName === "IMG") {
      const activeMemberCard = event.target.closest("div");
      activeMemberCard.classList.add("yellow-background");
      const memberId = activeMemberCard.dataset.id;
      const memberCard = document
        .getElementById(`${memberId}-member-card`)
        .content.cloneNode(true);
      memberInfo.append(memberCard);
    } else {
      const teamCard = document
        .getElementById("team-card")
        .content.cloneNode(true);

      memberInfo.append(teamCard);
    }
  });
} else {
  const memberCard = (
    quote,
    technologies,
    imageUrl,
    name,
    title,
    github,
    linkedin
  ) => {

    const container = document.createElement("div");
    container.className = "member-card-mobile";
    const inner = `
    <p>${quote}</p>
    <div class="member-card__image">
    <img src="${imageUrl}" />
    </div>
    <div class="member-card__social">
      <a href="${github}" target="_blank" ><img src="assets/img/github.svg" /></a>
      <a href="${linkedin}" target="_blank"><img src="assets/img/LinkedIn_logo.png" /></a>
    </div>
    <div class="member-card-mobile__info">

      <div class="member-card__technologies">
      ${technologies
        .map((tech) => {
          return `<div class=member-card__technology><img src="${tech}"/></div>`;
        })
        .join(" ")}
      </div>
      <h1>${name}</h1>
      <h2>${title}</h2> 
    </div>
      `;

    container.innerHTML = inner;
    return container;
  };
  const pawel = memberCard(
    " IT student at Wroclaw University of Science and Technology. Passionate about new technologies. <br /> Also, sexy.",
    [
      "assets/img/skills/css_logo.png",
      "assets/img/skills/html_logo.svg",
      "assets/img/skills/react_logo.png",
    ],
    "assets/img/Pablo.png",
    "Paweł Kubala",
    "Harp0n Front-End Developer",
    "https://github.com/Kubcioooo",
    "https://www.linkedin.com/in/pkubala/"
  );
  const seba = memberCard(
    " Computer Science student at Wrocław University of Science and Technology. <br /> Also, hobbyist game developer",
    [
      "assets/img/skills/C++_logo.svg",
      "assets/img/skills/c_sharp_logo.svg",
      "assets/img/skills/scala_logo.svg",
    ],
    "assets/img/Sebastian.png",
    "Sebastian Pięta",
    "Harp0n Backend Developer",
    "https://github.com/KraftUnderscore",
    "https://www.linkedin.com/in/spieta/"
  );

  const mihal = memberCard(
    "Computer Science student at Wrocław University of Science and Technology. <br /> Passionate about machine learning and data science.",
    [
      "assets/img/skills/python_logo.png",
      "assets/img/skills/tensorflow_logo.svg",
      "assets/img/skills/sql_logo.svg",
    ],
    "assets/img/Michu.png",
    "Michał Janik",
    "Harp0n Data Scientist",
    "https://github.com/mihal09",
    "https://www.linkedin.com/in/janikmichal/"
  );
  const piotrek = memberCard(
    "Computer Science student at Wrocław University of Science and Technology. <br /> Interested in web-development, especially the Django framework.",
    [
      "assets/img/skills/python_logo.png",
      "assets/img/skills/css_logo.svg",
      "assets/img/skills/js_logo.svg",
    ],
    "assets/img/Pioter.png",
    "Piotr Szymański",
    "Harp0n Full-Stack Dev",
    "https://github.com/PitiMonster",
    "https://www.linkedin.com/in/piotr-szym/"
  );
  const radek = memberCard(
    "   IT student at Wroclaw University of Science and Technology with working experience. <br /> Interested in web technologies.",
    [
      "assets/img/skills/js_logo.svg",
      "assets/img/skills/ts_logo.svg",
      "assets/img/skills/react_logo.png",
    ],
    "assets/img/Radko.png",
    "Radek Karbowiak",
    "Harp0n Full-Stack Dev",
    "https://github.com/Reevo55",
    "https://www.linkedin.com/in/radoslaw-karbowiak"
  );
  const titleDiv = document.createElement('div');
  titleDiv.innerHTML = `<div class="team-page-header">
  <div class="team-page-header__title"></div>
  <p class="team-page-header__description">
    We are a group of friends from Legnica.
    <br>Our programming interests differ from each other and that's why there's nothing we can't do together.
  </p>
   </div>`

  const teamSection = document.getElementById("team-page");
  teamSection.append(titleDiv);
  teamSection.append(pawel);
  teamSection.append(radek);
  teamSection.append(seba);
  teamSection.append(mihal);
  teamSection.append(piotrek);
}
