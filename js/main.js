document.getElementById('submitButton').addEventListener('click', function () {
  // Get the email input value
  const email = document.getElementById('emailInput').value;

  // Regular expression to validate email format
  const emailPattern =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  // Check if the entered email is valid
  if (emailPattern.test(email)) {
    // Hide the email form and show the basic information UI
    document.getElementById('emailForm').style.display = 'none';
    document.getElementById('basicInfo').style.display = 'block';
  } else {
    alert('Vui lòng nhập chính xác định dạng email!');
  }
});

document.querySelectorAll('.see-more, .see-less').forEach((button) => {
  button.style.display = 'none';
});

// Function to expand content
function expandContent(button) {
  const block = button.parentNode;
  const moreContent = block.querySelector('.more-content');
  const seeMoreButton = block.querySelector('.see-more');

  moreContent.style.display = 'block';
  seeMoreButton.style.display = 'none';
}

// Function to collapse content
function collapseContent(button) {
  const block = button.parentNode.parentNode;
  const moreContent = block.querySelector('.more-content');
  const seeMoreButton = block.querySelector('.see-more');

  moreContent.style.display = 'none';
  seeMoreButton.style.display = 'block';
}

// Function to show "See More" button when hovering on the block
function showSeeMore(block) {
  const seeMoreButton = block.querySelector('.see-more');
  seeMoreButton.style.display = 'block';
}

// Function to hide "See More" button when not hovering on the block or additional content
function hideSeeMore(block) {
  const seeMoreButton = block.querySelector('.see-more');
  const moreContent = block.querySelector('.more-content');
  const seeLessButton = block.querySelector('.see-less');

  if (moreContent.style.display !== 'block') {
    seeMoreButton.style.display = 'none';
  } else if (
    moreContent.style.display === 'block' &&
    !moreContent.matches(':hover')
  ) {
    seeLessButton.style.display = 'none';
  }
}

// Function to show "See Less" button when hovering on additional content
function showSeeLess(content) {
  const seeLessButton = content.parentNode.querySelector('.see-less');
  seeLessButton.style.display = 'block';
}

// Add event listeners for hover effects on the block
document.querySelectorAll('.block').forEach((block) => {
  block.addEventListener('mouseover', function () {
    showSeeMore(block);
  });

  block.addEventListener('mouseout', function () {
    hideSeeMore(block);
  });
});

// Add event listener for "See More" button
document.querySelectorAll('.see-more').forEach((button) => {
  button.addEventListener('click', function () {
    expandContent(button);
  });
});

// Add event listener for "See Less" button
document.querySelectorAll('.see-less').forEach((button) => {
  button.addEventListener('click', function () {
    collapseContent(button);
  });
});
