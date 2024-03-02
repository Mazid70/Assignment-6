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
      "p-10",
      "bg-[#F3F3F5]"
    );

    let status = "";
    if (element.isActive === true) {
      status = "online";
    } else {
      status = "offline";
    }

    card.innerHTML = `<div>
                   <div class="avatar ${status}">
                    <div class="rounded-full w-16">
                      <img
                        src="${element.image}"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <div class="flex gap-5 lg:w-[800px]">
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
                    class=" my-5 border-dashed border-[1.5px] border-[#12132D40]"
                  />
                  <div class="flex gap-10 text-[#12132D99] w-full">
                    <h6>
                      <i class="fa-regular fa-message"></i> <span>${element.comment_count}</span>
                    </h6>
                    <h6><i class="fa-regular fa-eye"></i><span> ${element.view_count}</span></h6>
                    <h6><i class="fa-regular fa-clock"></i><span> ${element.posted_time}</span></h6>
                    <button class="flex justify-end  items-center flex-1">
                      <i
                        class="fa-solid fa-envelope bg-green-500 p-2 rounded-full text-white"
                      ></i>
                    </button>
                  </div>
                </div>`;

    cardContainer.appendChild(card);
  });
};

loadData();
