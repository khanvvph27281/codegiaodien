function setupBuyPopup() {
  const Buy = document.getElementById("buy");
  const BgBuy = document.getElementById("bgbuy");
  const ContentBuy = document.getElementById("contentbuy");
  const closeBuy = document.getElementById("closebuy");

  Buy.addEventListener("click", function () {
    BgBuy.classList.remove("hidden");
    ContentBuy.classList.remove("hidden");
  });

  BgBuy.addEventListener("click", function () {
    BgBuy.classList.add("hidden");
    ContentBuy.classList.add("hidden");
  });
  closeBuy.addEventListener("click", function () {
    BgBuy.classList.add("hidden");
    ContentBuy.classList.add("hidden");
  });
  ContentBuy.addEventListener("click", function (event) {
    event.stopPropagation();
  });
}

// Gọi hàm để thiết lập sự kiện khi tài liệu được tải
document.addEventListener("DOMContentLoaded", function () {
  setupBuyPopup();
});

function checked(){
    const clickProduct=document.querySelectorAll(".ClickMuahang");
    let Icon=null;
    clickProduct.forEach((block)=>{
        block.addEventListener("click",function(){
            const iconRight=block.querySelector(".icon-right");
            if(Icon){
                Icon.style.display ="none";
            }
            iconRight.style.display ="block";

            Icon=iconRight;
            block.classList.add("bg_click");

            // Loại bỏ lớp CSS "highlighted" cho các khối khác
            clickProduct.forEach((otherBlock) => {
              if (otherBlock !== block) {
                otherBlock.classList.remove("bg_click");
              }
            });
        });
    });
     
   
}
checked();
