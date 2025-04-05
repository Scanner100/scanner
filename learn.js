document.addEventListener("DOMContentLoaded", function () {
  const learnMoreBtn = document.getElementById("learn-more-btn");
  const moreDetails = document.getElementById("more-details");

  learnMoreBtn.addEventListener("click", () => {
    // Toggle visibility of the more-details section
    if (moreDetails.style.display === "none" || moreDetails.style.display === "") {
      moreDetails.style.display = "block"; // Show details
    } else {
      moreDetails.style.display = "none"; // Hide details
    }
  });
});
