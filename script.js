const eventForm = document.getElementById("eventForm");
const eventTitle = document.getElementById("eventTitle");
const eventDate = document.getElementById("eventDate");
const eventCategory = document.getElementById("eventCategory");
const eventDescription = document.getElementById("eventDescription");
const category = document.getElementById("eventCategory");
const description = document.getElementById("eventDescription");

const clearAllBtn = document.getElementById("clearAllBtn");
const addSampleBtn = document.getElementById("addSampleBtn");
const eventContainer = document.getElementById("eventContainer");

const sampleEvents = [
  {
    title: "Python Webinar",
    date: "2026-02-15",
    category: "Webinar",
    description: "A Webinar on Python Programming."
  },
  {
    title: "Coding Hackathon",
    date: "2026-02-20",
    category: "Social",
    description: "Code Hackathon Event."
  }
];

let sampleEvent =
    [
        {
            title: "Web dev",
            date: "4-12-2026",
            category: "workshop",
            description: "hasvhuno oadhoo asoikla dfoi"
        },
        {
            title: "Web dev2",
            date: "5-12-2026",
            category: "conference",
            description: "hasvhuno oadshdbf hoo asoikla dfoi"
        }
    ]

//   create event card  
function createEventCard(eventData){
    const card = document.createElement("div");
    card.innerHTML=`
    <button class=delete-btn>X</button>
function createEventCard(eventData) {
  const card = document.createElement("div");
  card.className = "event-card";

  card.innerHTML = `
    <button class="delete-btn">X</button>
    <h3>${eventData.title}</h3>
    <div>${eventData.date}</div>
    <span>${eventData.category}</span>
    <p>📅 ${eventData.date}</p>
    <p><strong>${eventData.category}</strong></p>
    <p>${eventData.description}</p>
    `
    return card;
  `;

  return card;
}

function removeEmptyState() {
  const emptyState = eventContainer.querySelector(".empty-state");
  if (emptyState) emptyState.remove();
}

function addEvent(eventData){
  const emptyState=document.querySelector(".empty-state");
  if(emptyState) emptyState.remove();

  eventContainer.appendChild(createEventCard(eventData));
function showEmptyState() {
  if (eventContainer.children.length === 0) {
    const div = document.createElement("div");
    div.className = "empty-state";
    div.textContent = "No events yet. Add your first event!";
    eventContainer.appendChild(div);
  }
}


function addEvent(eventData) {
  removeEmptyState();
  const card = createEventCard(eventData);
  eventContainer.appendChild(card);
}


eventForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const eventData = {
        title: eventTitle.value,
        date: eventDate.value,
        category: eventCategory.value,
        description: eventDescription.value
    }
eventForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const eventData = {
    title: eventTitle.value,
    date: eventDate.value,
    category: category.value,
    description: description.value
  };

  addEvent(eventData);
  eventForm.reset();
});


clearAllBtn.addEventListener("click", function () {
  eventContainer.innerHTML = "";
  showEmptyState();
});


addSampleBtn.addEventListener("click", function () {
  sampleEvents.forEach(function (event) {
    addEvent(event);
  });
});


    addEvent(eventData);
    eventForm.reset();
eventContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("delete-btn")) {
    e.target.parentElement.remove();
    showEmptyState();
  }
});

})

document.addEventListener("keydown", function (e) {
  const demo = document.getElementById("demoContent");
  demo.textContent = "You pressed: " + e.key;
  demo.style.color = "#6c63ff";
});
