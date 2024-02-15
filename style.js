
$(function () {
    // saves stored info that the user inputs
      function textEntry() {
        $('.saveBtn').on('click', function () {
          const textArea = $(this).parent().attr('id');
          const input = $(this).siblings('.description').val();
          localStorage.setItem(textArea, input);
        });
      }
    ;
    //changes the color of the time slot to represent past present and future times 
      const hour = dayjs()
        $('.time-block').each(function(){
          console.log($(this))
          if ($(this).attr('id').substring(5)== hour.format('H')){
            $(this).addClass('present')
          } else if ($(this).attr('id').substring(5)> hour.format('H')){
            $(this).addClass('future')
          } else {
            $(this).addClass('past')
          }
        })
    
      $('.time-block').each(function () {
        const textArea = $(this).attr('id');
        const input = localStorage.getItem(textArea);
        $(this).children('.description').val(input);
    
        textEntry()
      });
    
    
    });
    
    
    
    //ADD THE CURRENT DAY OF THE WEEK TO THE TOP OF THE PAGE USING DAYJS
     function today(){
    const today = dayjs();
    $('#currentDay').text(today.format('[Hello, Today is] dddd MMM D, YYYY, [The time is Currently] h:mm:ss'));
    }
    setInterval(today)
    
    