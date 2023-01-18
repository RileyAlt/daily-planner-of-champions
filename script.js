$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

  //Sets current date on planner
  const currentDay = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  $("#currentDay").text(currentDay.toLocaleDateString(undefined, options));


      var toDoItems = JSON.parse(localStorage.getItem("toDoItems") || "{}");
      var my9amItem = toDoItems[9]

      var newToDoItems = toDoItems;
      newToDoItems[9]= "";


      localStorage.setItem("toDoItems", JSON.stringify(newToDoItems));


    //TODO: when save button is pressed, copy the text from the text area next to it and save to local storage


  function createCalendar(){
    
    //TODO: need to add rows = 3 to text area, need to add Aria-label to save button, and add aria hidden to the button icon

    // <div id="hour-9" class="row time-block past">
    //   <div class="col-2 col-md-1 hour text-center py-3">9AM</div>
    //   <textarea class="col-8 col-md-10 description" rows="3"> </textarea>
    //   <button class="btn saveBtn col-2 col-md-1" aria-label="save">
    //     <i class="fas fa-save" aria-hidden="true"></i>
    //   </button>
    // </div>    

    var hours = [9, 10, 11, 12, 1, 2, 3, 4, 5];
    for (const hour of hours) {
      var topLevelDiv = document.createElement("div"); //<div></div>
      topLevelDiv.className = "row time-block"; //<div class="row time-block"> </div> 

      // TODO: need to add past or future

      var time = document.createElement("div"); //<div></div>
      time.className = "col-2 col-md-1 hour text-center py-3"; //<div class="col-2 col-md-1 hour text-center py-3"> </div>
      time.textContent = (hour); //<div class="col-2 col-md-1 hour text-center py-3">9am</div>
      topLevelDiv.appendChild(time); //<div class="row time-block"> <div class="col-2 col-md-1 hour text-center py-3">9am</div> </div>

      var description = document.createElement("textarea"); // <textarea></textarea>
      description.className = "col-8 col-md-10 description"; //<textarea class="col-8 col-md-10 description"></textarea>
      description.textContent = toDoItems[hour] //<textarea class="col-8 col-md-10 description">9am</textarea>
      topLevelDiv.appendChild(description); 

      var saveButton = document.createElement("button");
      saveButton.className = "btn saveBtn col-2 col-md-1";

      
      var saveIcon = document.createElement("i");
      saveIcon.className = "fas fa-save";
      saveButton.appendChild(saveIcon);
      topLevelDiv.appendChild(saveButton);

      document.getElementById('calendar').appendChild(topLevelDiv);

      //TODO: RUN Function to savedata to local storage
      saveButton.addEventListener('click', function(event) {
        description.setAttribute("calender", "hour-${hour}-textarea");
        
        saveButton.setAttribute("data-hour", hour);
        
        var hourUserHitSaveOn = event.currentTarget.getAttribute("data-hour");
        var newItem = $(`#hour-${hour}-textarea`).text();

        });

    
    } 
  }
  
  createCalendar();

});

  //getting the colors to change in real time
  // const rows = document.getElementsByClassName("container-fluid");
  // let currentHour = parseInt(moment().format('present'));

  // Array.from(rows).forEach(row => {
  //   let
  //     rowIdString = row.id,
  //     rowHour;
  //   if (rowIdString) {
  //     rowHour = parseInt(rowIdString);
  //   }
  //   if (rowHour) {
  //     // Compares row id to current hour and sets color accordingly
  //     if (currentHour === rowHour) {
  //       setColor(row, "red");
  //     } else if ((currentHour < rowHour) && (currentHour > rowHour - 6)) {
  //       setColor(row, "green");
  //     } else if ((currentHour > rowHour) && (currentHour < rowHour + 6)) {
  //       setColor(row, "lightgrey");
  //     } 
  //   }
  // });

  // function setColor(element, color) {
  //   element.style.backgroundColor = color;
  // }

  // // Saving information to local storage
  // localStorage.setItem(key, JSON.stringify(item))


  // // Retrieve your data from locaStorage
  // var saveData = JSON.parse(localStorage.saveData || null) || {};

  // // Store your data.
  // function saveStuff(obj) {
  //   saveData.obj = obj;
  //   // saveData.foo = foo;
  //   saveData.time = new Date().getTime();
  //   localStorage.saveData = JSON.stringify(saveData);
  // }

  // // Do something with your data.
  // function loadStuff() {
  //   return saveData.obj || "default";
  // }
