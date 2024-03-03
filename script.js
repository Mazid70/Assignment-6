const loadData = async () => {
  const response = await fetch(
    "https://openapi.programming-hero.com/api/retro-forum/posts"
  );
  const data = await response.json();
  const allData = data.posts;
  const cardContainer = document.getElementById("card-container");

  allData.forEach((element) => {
    const card = document.createElement("div");
    card.classList.add(
      "rounded-xl",
      "border",
      "flex",
      "gap-5",
      "p-5",
      "lg:p-10",
      "bg-[#F3F3F5]"
    );

    let status = "";
    if (element.isActive === true) {
      status = "bg-green-500";
    } else {
      status = "bg-red-500";
    }

    card.innerHTML = `<div>
      <div class="relative ">
        <img
          class="w-20 h-20 rounded-2xl"
          src="${element.image}"
          alt="profile image"
        />
        <span
          class="top-0 start-16 absolute w-3.5 h-3.5 ${status} border-2 border-white dark:border-gray-800 rounded-full"
        ></span>
      </div>
    </div>
    <div>
      <div class="flex gap-5 lg:w-[700px]">
        <h3 class="font-medium text-sm text-[#12132DCC]">
          <span>#</span>${element.category}
        </h3>
        <h3 class="font-medium text-sm text-[#12132DCC]">
          <span>Author:</span>  ${element.author.name}
        </h3>
      </div>
      <h1 class="font-bold text-xl">
        ${element.title}
      </h1>
      <p class="font-medium text-sm  text-[#12132D99] mt-2">
        ${element.description}
      </p>
      <hr
        class="my-5 border-dashed border-[1.5px] border-[#12132D40]"
      />
      <div class="flex gap-10 text-[#12132D99] w-full">
        <h6>
          <i class="fa-regular fa-message"></i> <span>${element.comment_count}</span>
        </h6>
        <h6><i class="fa-regular fa-eye"></i><span> ${element.view_count}</span></h6>
        <h6><i class="fa-regular fa-clock"></i><span> ${element.posted_time}</span></h6>
        <button onclick="addTitle('${element.title}','${element.view_count}')" class="flex justify-end  items-center flex-1">
          <i
            class="fa-solid fa-envelope bg-green-500 p-2 rounded-full text-white"
          ></i>
        </button>
      </div>
    </div>`;

    cardContainer.appendChild(card);
  });
};

let count = 0;
const addTitle = (title, watch) => {
  count++;
  document.getElementById("count").innerText = count;
  const div = document.createElement("div");
  div.classList.add("flex", "justify-between", "bg-white", "rounded-xl", "p-9");
  div.innerHTML = ` <p class="font-semibold text-base w-4/5">
${title}
</p>
<div><i class="fa-regular fa-eye"></i><span>${watch}</span></div>`;
  document.getElementById("title-container").appendChild(div);
};
const loadRecentData=async()=>{
  const response=await fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts');
  const data=await response.json();
  
  
  const latestContainer=document.getElementById('latest-container');
  data.forEach(element=>{
    let date='';
    let pro='';
    if(!element.author.posted_date ){
      date='No publish date';
    }
    else{
      date=element.author.posted_date;
    }
    if( !element.author.designation){
      pro='Unknown'
    }
    else{
      pro=element.author.designation;
    }
    const card=document.createElement('div');
    card.classList.add("rounded-xl", "border", "space-y-3", "p-5");
    card.innerHTML=`
    <div><img src="${element.cover_image}" alt="" /></div>
          <h6 class="text-[#12132D99]">
            <i class="fa-regular fa-calendar"></i> <span> ${date}</span>
          </h6>
          <h1 class="font-bold text-lg">${element.title}</h1>
          <p class="text-[#12132D99] font-normal text-base">
          ${element.description}
          </p>
          <div class="flex gap-4">
            <img
              class="w-12 h-12 rounded-full"
              src="${element.profile_image}"
              alt=""
            />
            <div>
              <h1 class="font-bold text-base">${element.author.name}</h1>
              <p class="text-[#12132D99] font-normal text-sm">${pro}</p>
            </div>
          </div>`
          latestContainer.appendChild(card);
  })
}
loadRecentData();
loadData();
