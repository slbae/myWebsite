document.addEventListener('DOMContentLoaded', renderPosts);

function renderPosts() {

    // Fetch the JSON file
fetch('./blogs.json')
.then(response => {
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
})
.then(data => {
  // Loop through the array of objects
  data.forEach(item => {
    console.log(`Title: ${item.title}`);
  });
})
.catch(error => {
  console.error('There was a problem fetching the data:', error);
});


}

function renderPost() {

}