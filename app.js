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
  menu.classList.toggle("menu-opened");

  const overlay = document.getElementById("overlay");
  overlay.style.display = menu.classList.contains("menu-opened");
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
  setTimeout(function() {
      copyMessage.style.display = "none";
  }, 3000);
}

//đặt hàng

// const Click = document.querySelectorAll(".Click");
// const iconRight = document.getElementById("icon-right");

// let iconRightVisiba = false;

// Click.addEventListener("click", function () {
//   Click.classList.toggle("divList");
//   if (iconRightVisiba) {
//     iconRight.style.display = "none";
//   } else {
//     iconRight.style.display = "block";
//   }

//   // Cập nhật trạng thái hiển thị ảnh
//   iconRightVisiba = !iconRightVisiba;
// });
// function dathang(){
//   const ClickMua = document.querySelectorAll(".ClickMuahang");
//   const iconRight = document.getElementById("icon-right");

//   let selectedDiv = null;
//   let isImageVisible = false;

//   ClickMua.forEach((div) => {
//     div.addEventListener("click", function () {
//       if (selectedDiv) {
//         selectedDiv.classList.remove("divList");
//       }
//       div.classList.add("divList");
//       if (isImageVisible) {
//             iconRight.style.display = "none";
//           } else {
//             iconRight.style.display = "block";
//           }
//       selectedDiv = div;
//       isImageVisible = !isImageVisible;
//     });
//   });
// }
// dathang();
//click đặt hàng
// const datmua = document.getElementById("datmua");
// const content = document.getElementById("content");

// datmua.addEventListener("click", function (event) {
//   event.stopPropagation();
//   if (content.classList.contains("hidden")) {
//     content.classList.remove("hidden");
//   } else {
//     content.classList.add("hidden");
//   }
// });

// document.addEventListener("click", function (event) {
//   if (!content.contains(event.target) && event.target !== datmua) {
//     content.classList.add("hidden");
//   }
// });

//show form
// Lấy tham chiếu đến nút và lớp content


