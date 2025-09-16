// =============================
// Part 2: JavaScript Functions
// =============================

// Function with parameters & return value
function calculateArea(width, height) {
  // local variable
  let area = width * height;
  return area;
}

// Function to update DOM with area result from input
function showArea() {
  let width = parseFloat(document.getElementById("width").value);
  let length= parseFloat(document.getElementById("length").value); 

  if (isNaN(width) || isNaN(length)) {
    document.getElementById("areaResult").textContent = "⚠️ Please enter valid numbers!";
    return;
  }

  let result = calculateArea(width, length); 
  document.getElementById("areaResult").textContent = "Calculated Area: " + result;
}

// Event listener for calculation button
document.getElementById("calcBtn").addEventListener("click", showArea);


// =============================
// Part 3: Combining CSS & JS
// =============================

// Toggle box animation using classList
const toggleBoxBtn = document.getElementById("toggleBoxBtn");
const jsBox = document.getElementById("jsBox");

toggleBoxBtn.addEventListener("click", () => {
  jsBox.classList.toggle("active");
});

// Modal popup
const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");
const modal = document.getElementById("modal");

openModalBtn.addEventListener("click", () => {
  modal.classList.add("active");
});

closeModalBtn.addEventListener("click", () => {
  modal.classList.remove("active");
});

// Close modal if user clicks outside modal-content
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("active");
  }
});
