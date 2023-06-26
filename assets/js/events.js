document.addEventListener("DOMContentLoaded", function () {
    var events = document.querySelectorAll(".event");
    var loadMoreBtn = document.getElementById("load-more");
    var loadLessBtn = document.getElementById("load-less");
    var visibleCount = 3;
    var increment = 3;
    var isFirstLoadMoreClick = true;

    function showEvents() {
      for (var i = 0; i < events.length; i++) {
        if (i < visibleCount) {
          events[i].style.display = "flex";
        } else {
          events[i].style.display = "none";
        }
      }
    }

    function loadMore() {
      visibleCount += increment;
      showEvents();

      if (visibleCount >= events.length) {
        loadMoreBtn.style.display = "none";
        loadLessBtn.style.display = "inline-block";
      }

      if (isFirstLoadMoreClick) {
        isFirstLoadMoreClick = false;
        loadLessBtn.style.display = "inline-block";
      }
    }

    function loadLess() {
      visibleCount -= increment;
      showEvents();

      if (visibleCount <= 3) {
        visibleCount = 3; // Set visibleCount to minimum value
        loadLessBtn.style.display = "none";
        loadMoreBtn.style.display = "inline-block";
      }

      if (isFirstLoadMoreClick) {
        loadLessBtn.style.display = "inline-block";
      }
    }

    loadMoreBtn.addEventListener("click", loadMore);
    loadLessBtn.addEventListener("click", loadLess);
    showEvents();
  });