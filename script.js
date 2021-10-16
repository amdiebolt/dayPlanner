var textAreaEl = document.querySelector('textarea')
var hourEl = document.querySelector('section')
var pastEl = document.querySelector('.past')
var presentEl = document.querySelector('.present')
var futureEl = document.querySelector('.future')    




 $(document).ready(function(){

//Creates a save button event listener to add text to local storage
 $(".saveBtn").on("click", function(event){
     var toDo = $(this).siblings('textarea').val()
     console.log(toDo)
    var whatHour = $(this).siblings('.hour').text()
    console.log(whatHour)
    localStorage.setItem(whatHour, toDo)

})

//Tracks time of day and colors time blocks accordingly
 function timeOfDay(){

   
    $("textarea").each(function () {
    var rightNow = parseInt(moment().format('H'))
    var timeBlock = parseInt($(this).attr(".hour"))
        if(rightNow > timeBlock){
          $(this).addClass('past')
    }
        else if(rightNow === timeBlock){
        $(this).addClass('present')
    }
        else{
        $(this).addClass('future')
    }

     var today = moment()
      $("#currentDay").text(today.format("MMMM Do YYYY"))

    
})}

//Retrieves strings in local storage and adds them to indicated text blocks
$('#9').val(localStorage.getItem('9 am'))
$('#10').val(localStorage.getItem('10 am'))
$('#11').val(localStorage.getItem('11 am'))
$('#12').val(localStorage.getItem('12 pm'))
$('#13').val(localStorage.getItem('1 pm'))
$('#14').val(localStorage.getItem('2 pm'))
$('#15').val(localStorage.getItem('3 pm'))
$('#16').val(localStorage.getItem('4 pm'))
$('#17').val(localStorage.getItem('5 pm'))

 timeOfDay()


 })

