import { Banners, FeaturedProducts, LatestProducts, Offer } from "./main.js";

const hero = document.querySelector(".hero");
const featuredProducts = document.querySelector(".featuredProducts");
const buttons = document.querySelectorAll(".tab-btn");
const contents = document.querySelectorAll(".tab-content");
const product = document.querySelector(".productBlock");
const offerBlock = document.querySelector(".offerBlock");

hero.innerHTML = Banners.map(
  (item) => `
<div class="w-[644px]">
<p class="font-[700] text-[17px] leading-[175%] mb-[12px] text-[#FB2E86]">${item.miniText}</p>
<h1 class="font-[700] text-[53px]  mb-[12px] ">${item.title}</h1>
<p class="font-[700] text-[17px] leading-[175%] text-[#8A8FB9] mb-[27px] ">${item.headerText}</p>
<button class="py-[16px] px-[40px] bg-[#FB2E86] text-white font-[600] text-[16px]">${item.headerBtn}</button>
</div>
<div>
<img src="${item.HeaderImg}">
</div>`
);

featuredProducts.innerHTML = FeaturedProducts.map(
  (item) => `
  <div>
<div>
<div class="pt-[46px] pr-[52px] pb-[12px] pl-[40px] bg-[#f6f7fb]"><img src="${item.featuredImg}"></div>
<div class="text-center bg-white shadow-xl text-[#151875]  hover:bg-[#2F1AC4] hover:text-white">
<h3 class="font-[700] text-[18px] text-[#FB2E86] hover:text-white    pt-[15px] mb-[12px] ">${item.featuredInnerTitle}</h3>
<div>
<img class="text-center mx-auto mb-[12px]" src="${item.featuredDes}"
</div>
<p class="font-[500] text-[14px]  mb-[12px] ">${item.featuredText}</p>
<p class="font-[500] text-[14px] pb-[17px]">${item.featuredPrice}</p>
</div>
</div>
</div>
</div>
`
).join("");

product.innerHTML = LatestProducts.map(
  (item) =>
    `<div class="tab-content w-[360px] " id="tab-1">
  <div class="">
  <img class="bg-[#F7F7F7] pb-[8px] mb-[23px] text-center px-[70px] mx-auto pt-[38px]" src="${item.img}"</div>
  <div class="flex justify-between items-center">
  <p class="font-[500] text-[16px] text-[#151875]">${item.text}</p>
  <div class="flex items-center gap-[10px]">
  <p class="text-[14px] font-[500] text-[#151875]">${item.price}</p>
  <p class="line-through font-[500] text-[14px] text-[#FB2448]">${item.previousPrice}</p>
  </div>
  </div>
  </div>
  </div>
</div> 
`
).join("");

const Tabs = () => {
  const showTab = (tabNumber) => {
    contents.forEach((content) => content.classList.add("hidden"));
    buttons.forEach((button) =>
      button.classList.remove(
        "border-b-2",
        "border-[#FB2E86]",
        "text-[#FB2E86]"
      )
    );
    document.getElementById(`tab-${tabNumber}`).classList.remove("hidden");
    document
      .querySelector(`button[data-tab="${tabNumber}"]`)
      .classList.add("border-b-2", "border-[#FB2E86]", "text-[#FB2E86]");
  };
  buttons.forEach((button) => {
    button.addEventListener("click", () => showTab(button.dataset.tab));
  });
};
document.addEventListener("DOMContentLoaded", () => {
  Tabs();
});

offerBlock.innerHTML = Offer.map(
  (item) =>
    `<div class="flex gap-[28px] text-center">
  <div class="bg-[#fff] shadow-xl"><img class="text-center mx-auto pt-[61px] mb-[27px]" src="${item.img}"</div>
  <div class="px-[27px] pb-[45px]">
  
  <h3 class="mb-[20px] font-[600] text-[22px] text-[#151875]">${item.title}</h3>
  <p class="text-[16px] font-[700] leading-[160%] text-[#BBB6CE]">${item.text}</p>
  </div>
  </div>
  `
).join("");
