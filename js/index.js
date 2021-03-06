// PRELOADER
$(window).on("load", function () {
  $("#preloader").delay(3000).fadeOut("slow");
});

// STICKY ADD
window.onscroll = function () {
  toggleStickyAdd();
};
var header = document.getElementById("navigation");
var sticky = header.offsetTop;

function toggleStickyAdd() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

// A SCROLL DOWN SPEED
$("a.page-scroll, a.nav-link").click(function (e) {
  var targetHref = $(this).attr("href");
  $("html, body").animate(
    {
      scrollTop: $(targetHref).offset().top - 80,
    },
    1500
  );
  e.preventDefault();
});

// MENU-BAR TOGGLE
$(".nav-link").click(function () {
  // If the clicked element has the active class, remove the active class from EVERY .nav-link>.state element
  if ($(this).hasClass("active")) {
    $(".nav-link").removeClass("active");
  }
  // Else, the element doesn't have the active class, so we remove it from every element before applying it to the element that was clicked
  else {
    $(".nav-link").removeClass("active");
    $(this).addClass("active");
  }
});

/**
 * ANIMATION CLASSES
 */

$(window).on("scroll", function (e) {
  const top = $(window).scrollTop() + $(window).height(),
    sobreVisible = top > $("#sobre").offset().top,
    boxVisible = top > $(".box").offset().top,
    servicosVisible = top > $(".servicos-grid").offset().top,
    projetosVisible = top > $("#projetos").offset().top;

  $("#sobre p").toggleClass(
    "animate__animated animate__fadeInUp",
    sobreVisible
  );

  $(".box p").toggleClass("animate__animated animate__fadeInUp", boxVisible);

  $(".servicos-grid .servicos-item").toggleClass(
    "animate__animated animate__bounceInUp",
    servicosVisible
  );

  $("#projetos .projetos-item").toggleClass(
    "animate__animated animate__bounceIn",
    projetosVisible
  );

  $("#projetos .projetos-item").toggleClass(
    "animate__animated animate__fadeOutDown",
    !projetosVisible
  );
});

/**
 * BARS
 */

$(".bars").on("click", function () {
  const menuStyle = document.querySelector(".nav-menu").style,
    lis = document.querySelectorAll(".nav-menu li"),
    nav = document.querySelector("#navigation"),
    menuCont = document.querySelector(".menu"),
    shrink = document.querySelector(".shrink-menu"),
    navLogo = document.querySelector(".nav-logo");

  if (menuStyle.display === "none") {
    menuStyle.display = "flex";
    menuStyle.flexDirection = "column";
    menuStyle.margin = "auto";
    menuStyle.padding = "0px";
    shrink.style.alignItems = "center";
    nav.classList.add("sticky");
    menuCont.style.height = "100vh";
    navLogo.style.position = "absolute";
    lis.forEach((li) => (li.style.margin = "20px 0"));
  } else {
    menuStyle.display = "none";
    menuCont.style.height = "100%";
    shrink.style.alignItems = "flex-end";
    navLogo.style.position = "unset";
    nav.classList.remove("sticky");
  }
});

const width = $(document).width();
if (width <= 700) {
  const bars = document.querySelector(".bars");
  bars.classList.remove("hidden");

  $(".nav-link").click(function () {
    $(".nav-menu").css("display", "none");
    $(".menu").css("height", "100%");
    $(".shrink-menu").css("alignItems", "flex-end");
    $(".nav-logo").css("position", "unset");
    $("#navigation").removeClass("sticky");
  });
}

function removeHidden(project) {
  if (project.classList.contains("hidden")) {
    project.classList.remove("hidden");
  }
}

function addHidden(project, condition) {
  if (!project.classList.contains(condition)) {
    project.classList.add("hidden");
  }
}

/**
 * PROJECTS FILTERING
 */
$(".projetos-navigation li").on("click", function (e) {
  const { id } = e.target;
  const projects = document.querySelectorAll(".projetos-item");

  if (id === "all") {
    projects.forEach((project) => {
      return removeHidden(project);
    });
  }

  if (id === "node") {
    projects.forEach((project) => {
      removeHidden(project);
      return addHidden(project, "node");
    });
  }
  if (id === "react") {
    projects.forEach((project) => {
      removeHidden(project);
      return addHidden(project, "react");
    });
  }
  if (id === "typescript") {
    projects.forEach((project) => {
      removeHidden(project);
      return addHidden(project, "typescript");
    });
  }
  if (id === "other") {
    projects.forEach((project) => {
      removeHidden(project);
      return addHidden(project, "other");
    });
  }
});
