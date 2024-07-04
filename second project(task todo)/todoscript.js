'use strict';


const account1 = {
    username: 'Mark',
    password: 1234,
  };

const userName = document.querySelector('.textboxuser');
const userPass = document.querySelector('.textboxpass');
const btnsUserandPass = document.querySelector('#buttonPass');
const todoPage = document.querySelector('.todoPage');
const wrongAccount = document.querySelector('.textcontentuserlogin');
const btnReset = document.querySelector('#buttonReset');
const btnaddnewtask = document.querySelector('.btnandnewtaskcontainer');
const newtaskpopup = document.querySelector('.newtaskpopup');
// time event

const addcategory  = document.querySelector('.texttaskdateandtime')
let clickAddTodo = document.getElementById('clickaddtodo');


//drop down
const dropdownlist = document.querySelector('.dropdownlist');
const dropdownlistselected = document.querySelector('.dropdownlistselected');


//adding all input in task
const task = document.querySelector('.task');
const timeoftask = document.querySelector('.timeoftask')



//
const settime = document.querySelector('.settime');
const calendarclass = document.querySelector('.calendarclass')


const timeclass = document.querySelector('.timeclass');

//NOTEONTHIS //LESSON  child of add category which is all inputted
const dateandmonthinputted = document.querySelector('.timeclass');
const timeinputted = document.querySelector('.timeclass');





///temporary for calendar
//NOTEONTHIS
const now = new Date();
const year = now.getFullYear();
const month = now.getMonth();
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
// Create arrays for days and months
const greetings = ['Good Morning', 'Good Afternoon', 'Good Evening' ];
//for createTime function
// const hours = now.getHours()


//  opening todopage and new task button
btnsUserandPass.addEventListener('click',function(){

    userName.value === account1.username && Number(userPass.value) === account1.password ?  
    (todoPage.classList.remove('hidden') , userName.value = userPass.value = '', btnaddnewtask.classList.remove('hidden')) :
    (wrongAccount.textContent = 'Wrong Account Try Again');
    // 
})

// deleting inputted value

btnReset.addEventListener('click', function(){
    userName.value = userPass.value = '';   
    wrongAccount.textContent = ''
})


btnaddnewtask.addEventListener('click',function(){
  newtaskpopup.classList.remove('hidden') ;
 
})



  //LESSON //NOTEONTHIS by the use of function return function with ternary operator 
  document.addEventListener('DOMContentLoaded', event => {

    document.querySelector('.dropdownlist').addEventListener('change', event => {

         addcategory.value = event.target.value;

         //LESSON //NOTEONTHIS same as like this
        // const category = event.target.value;
        // console.log(category); 
      });
    }); 



// clock and date
//TEMPORARY
//NOTEONTHIS
function updateClock() {
  
    // Get the day and month names
    const dayOfWeek = days[now.getDay()];
    const monthName = monthNames[now.getMonth()];
    const day = now.getDate().toString().padStart(2, '0');
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    // const seconds = now.getSeconds().toString().padStart(2, '0');
    let greetingIndex;
    
    /// greetings condition if morning, afternoon or evening
    hours >= 0 && hours <= 11  ? greetingIndex = 0 : 
    hours >= 12 && hours <= 17  ?   greetingIndex = 1  :
    greetingIndex = 2;


    // Update the date string to include day and month names

    const greetString = `${greetings[greetingIndex]}  ${account1.username}`;
    const dateString = `${dayOfWeek}, ${monthName} ${day}, ${year}`;
    const timeString = `${hours}:${minutes}`;
    // // :${seconds}

    document.getElementById('greetAccount').textContent = `${greetString}`
    document.getElementById('clockdate').textContent = `${dateString} ${timeString}`;

  }

// Update the clock every second
setInterval(updateClock, 1000);

// Initialize the clock immediately
updateClock();

// separate this cause the time above is always updating
// //////////////////////

function createTime() {
  let timesGrid = document.createElement('div');
  timesGrid.className = 'timehoursandmin';


  // const timeclass = document.querySelector('.timeclass');
 
  for (let hours = 1; hours <= 24; hours++) {
    let timeCell = document.createElement('button');
    timeCell.className = 'time';
    timeCell.textContent = `${hours}:${0}${0}`;
    timeCell.value = hours;
    // Set the text content to the loop's hour variable
    timesGrid.appendChild(timeCell);

  //   console.log(timeCell);
  }
  timeclass.appendChild(timesGrid);

  return timeclass
 }

 document.querySelector('.timeclass').appendChild = createTime(); 


//NOTEONTHIS HERE BEGINS THE CALENDAR

function createCalendar(year, month) {

//  let daysGrid = document.querySelector('.day');
 //LESSON daysGrid = class name is days

 //LESSON dayname = class name is  day
 //weekdays
    let daysGrid = document.createElement('div');
    daysGrid.className = 'days';
          //so days grid adopt dayname and daycell
          //daysgrid holds the days while daycell adopts the calendar dates
    let calendar = document.getElementById('calendar');
    

   for (let i = 0; i < days.length; i++) {
  let dayName = document.createElement('div');
  dayName.className = 'weekday';
  dayName.textContent = days[i];
    //days grid which he creates class father which he makes dayname is his son which class is day
  daysGrid.appendChild(dayName); 
   }

   //date in month
  let date = new Date(year, month, 1);

//   // //the value 1 represents the day of the month

for (; date.getMonth() === month; date.setDate(date.getDate() + 1)) {
  let dayCell = document.createElement('button');
  dayCell.className = 'day';
  dayCell.value = date.getDate() ;
  dayCell.textContent = date.getDate();
  daysGrid.appendChild(dayCell);
  // console.log(dayCell.idName);
}

   //LESSON appendchild means si calendar ina dopt nya si daysgrid who the child he create is days
          //
   calendar.appendChild(daysGrid);
   return calendar

}
     // header 
    //  ${now.getDate()}
     document.querySelector('.month').textContent = `${year} ${monthNames[month]} `; 
     document.getElementById('calendar').appendChild = createCalendar(year, month); 
   


//blurred the date before
const date = now.getDate();
const day = document.querySelectorAll('.day');

// This all the container for all
const containerforinput = document.querySelector('.containerclickaddtodoclasstexttaskdateandtime');

const inputam = document.querySelectorAll('.am');


///disable buttons
//function for disabling buttons for day class
function disableAllButtons() {
  day.forEach(function(day) {
    day.disabled = true;
  });
}

//blurred the date before

day.forEach(day => {
  if (Number(day.value) < date ){   
  day.textContent = "NA",
  //LESSON BUTTON IS DISABLED
  day.disabled = true;
 
  }else if( Number(day.value) === date) {
    //adding backgroundcolor for the exact date
      day.classList.add('backgroundforclass');
  }

//day function which been looped

day.addEventListener('click',function(){
    let inputdate = document.createElement('div');
    inputdate.className = 'dateandmonthinputted';
    inputdate.textContent = `${monthNames[month]} ${day.value}`;
    containerforinput.appendChild(inputdate);
    disableAllButtons()

})

});


/////for adding time in and out
const timebtn = document.querySelectorAll('.time');
const endtimebtn = document.querySelectorAll('.endtime'); // Button for end of task, assuming 'endtime' is an ID
const amtopm = document.querySelector('.amtopm');
let inputcount = 0;
const timebegginingoftask = document.querySelector('.timebeginningoftask');
const timeendoftask = document.querySelector('.timeendoftask');
const savechanges = document.querySelector('.savechanges')





// listening the input
// Function to handle the beginning of task
function handleBeginningOfTask() {


  
  timebtn.forEach(time => {
    time.addEventListener('click', function() {
      // Create a div for the beginning of the task

      if (inputcount === 0) {
      const timebegins = document.createElement('div');
      timebegins.classList.add('timebeginningoftask');
      timebegins.textContent = `${time.value}:00`;
      amtopm.appendChild(timebegins);
      inputcount++;
  
      // Increment input count
      // inputcounter() 
    }else if(inputcount === 1) {
      //handles end of task
      time.addEventListener('click', function() {
      const timeends = document.createElement('div');
      timeends.classList.add('timeendoftask');
      timeends.textContent = `${time.value}:00`;
      amtopm.appendChild(timeends);
      inputcount++;      
      }
          );
  
    }else{
      prompt('Two Values only');
    }

  
    });


  });

  return amtopm
}

//NOTEONTHIS
//clicking set time this will appear
handleBeginningOfTask();



////handles the calendar unhidden

// const settime = document.querySelector('.settime');

settime.addEventListener('click', function(){

  amtopm.classList.remove('hidden');
  timeclass.classList.remove('hidden');

})



///////// Save changes event
//NOTEONTHIS //LESSON
// childnodes
//in class you cant get value just text content unless it is input


//LESSON putting time into 'containerclickaddtodoclasstexttaskdateandtime' class

savechanges.addEventListener('click',function () {

const allinputted = document.querySelectorAll('.amtopm')

allinputted.forEach( time => {

  let timeinput = document.createElement('div');
      timeinput.classList.add('timeinputted')
      timeinput.textContent = `${time.innerText}`
      containerforinput.appendChild(timeinput)
   }
    );

});


//NOTEONTHIS
//event if  'clickaddtodo' is check class
//const clickaddtodo = document.getElementById('clickaddtodo') this is the variable above i just put it here for not complicated situation


/////containerforinput in adding task

function checkboxinputall(){

// const texttaskdateandtime = document.querySelector('.texttaskdateandtime').value;
// need to call it again //NOTEONTHIS
const timeinputted = document.querySelector('.timeinputted');
const containerclickaddtodoclasstexttaskdateandtimeid = document.getElementById('containerclickaddtodoclasstexttaskdateandtimeid');
const childofcontainerclickaddtodoclasstexttaskdateandtimeid = document.querySelector('.dateandmonthinputted');
const childofcontainerclickaddtodoclasstexttaskdateandtimeid2 = document.querySelector('.timeinputted');
const day = document.querySelectorAll('.day');
const date = now.getDate();
const amtopmid = document.getElementById('amtopmid');
const timebeginningoftask = document.querySelector('.timebeginningoftask');
const timeendoftask  = document.querySelector('.timeendoftask');


if(clickAddTodo.checked === true ){
  console.log('checkbox is check');
  task.textContent = addcategory.value ;
  timeoftask.textContent = timeinputted.textContent;
  newtaskpopup.classList.add('hidden') ;
  //stop propogation means after click it wont call the other loaded function
  event.stopPropagation();
  addcategory.value = '';
  timeinputted.textContent = '';
  clickAddTodo.checked = false;
  containerclickaddtodoclasstexttaskdateandtimeid.removeChild(childofcontainerclickaddtodoclasstexttaskdateandtimeid);
  containerclickaddtodoclasstexttaskdateandtimeid.removeChild(childofcontainerclickaddtodoclasstexttaskdateandtimeid2);
  day.forEach( day => Number(day.value) < date ? day.disabled = true : day.disabled = false );
  amtopmid.removeChild(timebeginningoftask);
  amtopmid.removeChild(timeendoftask);
  inputcount = 0;
  amtopm.classList.add('hidden');
  timeclass.classList.add('hidden');

}
}










 