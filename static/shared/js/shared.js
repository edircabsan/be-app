var body = document.body;
var backdrop = document.querySelector(".backdrop");
var aside = document.querySelector("aside");
var toggleButtom = document.querySelector(".toggle-button");
var modal = document.querySelector("#modalMessage");
var activators = document.querySelectorAll("[id$='__activator']");
var menuSignUp = document.querySelector("#menuSignUp");
var formSignUp = document.querySelector("#formSignUp");
var menuSignIn = document.querySelector("#menuSignIn");
var formSignIn = document.querySelector("#formSignIn");
var openedSubMenu = null;

console.log(activators);


const closeModalItem = (item) => {
  if (item) {
    console.log("Closing: ", item)
    item.classList.remove("open");
  }
  backdrop.classList.remove("open");
  setTimeout(() => {
    backdrop.style.display = "none";
    //item.style.display = "none";
  }, 200);
};

const openModalItem = (item) => {
  if (item) {
    item.style.display = "block";
    backdrop.style.display = "block";
    setTimeout(() => {
      backdrop.classList.add("open");
      item.classList.add("open");
      item.style.display = "";
    }, 10);
    backdrop.addEventListener("click", () => {
      closeModalItem(item);
    });
  }
};

const closeItem = (item) => {
  if (item) {
    item.classList.remove("open");  
    setTimeout(() => {
      item.style.display = "none";
    }, 200);
  }
};

const openItem = (item, activator) => {
  if(openedSubMenu)  {
    body.click();
  }
  event.cancelBubble = true;
  if (item) {
    item.style.display = "block";
    setTimeout(() => {
      item.classList.add("open");  
    }, 10);
    openedSubMenu = item;
    body.addEventListener(
      "click",
      () => {
        closeItem(item);
      },
      { once: true }
    );
  }
};

//openModalItem(formSignUp);

toggleButtom.addEventListener("click", () => {
  openModalItem(aside);
});

activators.forEach((activator) => {
  activator.addEventListener("click", () => {
    var subMenu = document.querySelector(
      "#" + activator.id.replace("__activator", "")
    );
    openItem(subMenu);
  });
});

menuSignUp.addEventListener("click", () => {
  openModalItem(formSignUp);
});

menuSignIn.addEventListener("click", () => {
  openModalItem(formSignIn);
});
