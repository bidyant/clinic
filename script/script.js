function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function deleteDetails(){
  const detialDel=document.getElementById("dataDelete");
  detialDel.style.visibility='hidden';
}


const slider = document.getElementById('slider');
const container = document.getElementById('content');

slider.addEventListener('input', () => {
    const value = slider.value;
    container.style.transform = `translateY(${value}%)`;
});


document.getElementById('print-button').addEventListener('click', function() {
  
  if (typeof Android !== 'undefined' && Android.printPage) {
                // Call the Android print function
                Android.printPage();
            } else {
                // Fallback to the browser's print function
                window.print();
            }

});


// Get the current date
const currentDate = new Date();
// Format the date as needed
const formattedDate = currentDate.toDateString(); // e.g., "Wed Jun 06 2024"
// Get the <p> tag by its ID
const dateParagraph = document.getElementById('dateParagraph');
// Set the text content of the <p> tag to the formatted date
dateParagraph.textContent = "Date: "+formattedDate;
