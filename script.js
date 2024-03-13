function changeTheme(theme) {
  const bodyElement = document.querySelector("body");
  const headerElement = document.querySelector("header");
  const footerElement = document.querySelector("footer");

  if (theme === "two-color") {
    bodyElement.classList.remove("bg-gray-100");
    bodyElement.classList.add(
      "bg-gradient-to-r",
      "from-blue-500",
      "to-green-500"
    );

    headerElement.classList.remove("bg-gray-800");
    headerElement.classList.add(
      "bg-gradient-to-r",
      "from-blue-600",
      "to-green-600"
    );

    footerElement.classList.remove("bg-gray-800");
    footerElement.classList.add(
      "bg-gradient-to-r",
      "from-blue-600",
      "to-green-600"
    );
  } else {
    bodyElement.classList.remove(
      "bg-gradient-to-r",
      "from-blue-500",
      "to-green-500"
    );
    bodyElement.classList.add("bg-gray-100");

    headerElement.classList.remove(
      "bg-gradient-to-r",
      "from-blue-600",
      "to-green-600"
    );
    headerElement.classList.add("bg-gray-800");

    footerElement.classList.remove(
      "bg-gradient-to-r",
      "from-blue-600",
      "to-green-600"
    );
    footerElement.classList.add("bg-gray-800");
  }
}
function resetTheme() {
  const bodyElement = document.querySelector("body");
  const headerElement = document.querySelector("header");
  const footerElement = document.querySelector("footer");

  bodyElement.classList.remove(
    "bg-gradient-to-r",
    "from-blue-500",
    "to-green-500"
  );
  bodyElement.classList.add("bg-gray-100");

  headerElement.classList.remove(
    "bg-gradient-to-r",
    "from-blue-600",
    "to-green-600"
  );
  headerElement.classList.add("bg-gray-800");

  footerElement.classList.remove(
    "bg-gradient-to-r",
    "from-blue-600",
    "to-green-600"
  );
  footerElement.classList.add("bg-gray-800");
}
function changeLanguage(lang) {
  const htmlElement = document.querySelector("html");
  htmlElement.setAttribute("lang", lang);

  if (lang === "en") {
    document.getElementById("aboutTextEn").style.display = "block";
    document.getElementById("aboutTextId").style.display = "none";

    document.getElementById("educationTextEn").style.display = "block";
    document.getElementById("educationTextId").style.display = "none";

    document.getElementById("experienceTextEn").style.display = "block";
    document.getElementById("experienceTextId").style.display = "none";
  } else if (lang === "id") {
    document.getElementById("aboutTextEn").style.display = "none";
    document.getElementById("aboutTextId").style.display = "block";

    document.getElementById("educationTextEn").style.display = "none";
    document.getElementById("educationTextId").style.display = "block";

    document.getElementById("experienceTextEn").style.display = "none";
    document.getElementById("experienceTextId").style.display = "block";
  }
}

function navigateToSection(sectionId) {
  document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
}
const currentYear = new Date().getFullYear();

// Display the current year
document.getElementById("currentYear").textContent = currentYear;
