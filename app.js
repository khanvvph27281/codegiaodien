const bgGray = document.querySelectorAll(".bg-link");
let activeLink = null;
bgGray.forEach((link) => {
  link.addEventListener("click", (event) => {
    if (activeLink) {
      activeLink.style.backgroundColor = "#ffffff";
    }
    activeLink = link;
    link.style.backgroundColor = "#e5e7eb";
  });
});

//phân trang
const table = document.getElementById("myTable");
const rows = table.rows;
const rowsPerPage = 1;
let currentPage = 1;

function displayRows(page) {
  for (let i = 1; i < rows.length; i++) {
    rows[i].style.display = "none";
  }
  for (
    let i = (page - 1) * rowsPerPage + 1;
    i < page * rowsPerPage + 1 && i < rows.length;
    i++
  ) {
    rows[i].style.display = "table-row";
  }
}

function updatePagination() {
  const pagination = document.getElementById("pagination");
  const numPages = Math.ceil((rows.length - 1) / rowsPerPage);

  let paginationHTML = "";

  paginationHTML += `<a href="#" onclick="changePage(1)"><</a>`;

  for (let i = 1; i <= numPages; i++) {
    paginationHTML += `<a class="${
      i === currentPage ? "active" : ""
    }" href="#"  onclick="changePage(${i})">${i}</a>`;
  }

  paginationHTML += `<a href="#" onclick="changePage(${numPages})">></a>`;

  pagination.innerHTML = paginationHTML;
}

function changePage(page) {
  currentPage = page;
  displayRows(page);
  updatePagination();
}

displayRows(currentPage);
updatePagination();
//menu

function toggleMenu() {
  const menu = document.getElementById("menu");
  const bgMenu = document.getElementById("bgMenu");
  const overlay = document.getElementById("overlay");
  overlay.addEventListener("click" , function(){
    menu.classList.add("menu-opened");
    bgMenu.classList.add("bg-opened");
    overlay.innerHTML='<div class="bg-no-repeat bg-contain" style="background-image: url(image/closee.png); width: 16px; height: 16px;">';
  })
 
  bgMenu.addEventListener("click", function () {
    bgMenu.classList.remove("menu-opened");
    menu.classList.remove("bg-opened");
    overlay.innerHTML = "Menu";
  });
 
  

  // Thêm sự kiện click cho bgMenu để đóng menu
  bgMenu.addEventListener("click", function () {
    menu.classList.remove("menu-opened");
    bgMenu.classList.remove("bg-opened");
    overlay.innerHTML = "menu";
  });


  
  
}
//tab
function openTab(tabName) {
  var i;
  var tabContent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
  }

  document.getElementById(tabName).style.display = "block";
}
//copy
function copyText() {
  var input = document.getElementById("CopyInput");
  input.select();
  input.setSelectionRange(0, 99999);
  document.execCommand("copy");
  var copyMessage = document.getElementById("copyMessage");
  copyMessage.style.display = "block"; // Hiển thị thẻ div

  // Ẩn thẻ div sau 3 giây (3000 milliseconds)
  setTimeout(function () {
    copyMessage.style.display = "none";
  }, 3000);
}
