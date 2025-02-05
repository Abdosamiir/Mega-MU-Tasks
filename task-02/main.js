const cardData = [
  {
    title: "Introduction to Psychology Subject",
    lessons: 23,
    students: 45,
    instructor: "Eric Wild",
    price: "$96.00",
    originalPrice: "$140",
    reviews: "★ ★ ★ ★ ★ ",
    src: "./imgs/room1.jpg",
    icon: `<i class="fas fa-bookmark bookmark-icon"></i>`,
    userIcon: `<i class="fas fa-user user-icon"></i>`,
    bookIcon: `  <i class="fas fa-book book-icon"></i>`,
    description:
      "Through a combination of lectures, readings and discussions students.",
  },
  {
    title: "Complete Angular Developer in 2023",
    lessons: 54,
    students: 72,
    instructor: "Hanson Deck",
    price: "$70.00",
    originalPrice: "$120",
    reviews: "★ ★ ★ ★ ★ ",
    src: "./imgs/room2.jpg",
    icon: `<i class="fas fa-bookmark bookmark-icon"></i>`,
    userIcon: `<i class="fas fa-user user-icon"></i>`,
    bookIcon: `  <i class="fas fa-book book-icon"></i>`,
    description:
      "Through a combination of lectures, readings and discussions students.",
  },
  {
    title: "The Science of Well-being for Teens",
    lessons: 67,
    students: 24,
    instructor: "Max Conversion",
    price: "$99.00",
    originalPrice: "$150",
    reviews: "★ ★ ★ ★ ★ ",
    src: "./imgs/room3.jpg",
    icon: `<i class="fas fa-bookmark bookmark-icon"></i>`,
    userIcon: `<i class="fas fa-user user-icon"></i>`,
    bookIcon: `  <i class="fas fa-book book-icon"></i>`,
    description:
      "Through a combination of lectures, readings and discussions students.",
  },
];

function createCard(card) {
  return `
        <div class="card">
        <img src="${card.src}" alt="room1" class="card-img" />
        <div class="card-content">
        <div class="card-header">
        <p><span class="reviews">${card.reviews}</span> (03 Reviews)</p>
        <span>${card.icon}</span>
        </div>
            <h2>${card.title}</h2>
            <div class="card-info">
            <p class="info">${card.bookIcon} ${card.lessons} Lessons</p>
            <p>${card.userIcon} ${card.students} Students</p>
            </div>
            <p class="description">${card.description}</p>
            <div class="author">
            <img src="${card.src}" alt="author" />
            <p> <span>By</span> ${card.instructor}</p>
            </div>
            <div class="price">
            <p><del>${card.originalPrice}</del>  <strong>${card.price}</strong> </p>
             <p>More Details <i class="fas fa-arrow-right arrow-icon"></i></p>
            </div>
        </div>
        </div>
    `;
}

function appendCards(data) {
  const container = document.getElementById("course-container");
  const cardsHTML = data.map(createCard).join("");
  container.innerHTML = cardsHTML;
}

appendCards(cardData);
