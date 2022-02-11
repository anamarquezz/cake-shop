document.querySelector('.hamburger-menu').addEventListener('click', () =>{
    document.querySelector('.nav').classList.toggle('change');  
    document.querySelector('.top-nav-ul').classList.toggle('top-nav-ul-visible');  
    
});




/* Carousel */
$(document).ready(function(){
    // set automatic full container width
      $("#slides").css("width", $("#slides .slide").length * 100 + "%")
    
      $(".slide").css("width", 100 / $("#slides  .slide").length + "%")
    
      var totalWidth = 0;
      
      $("#slides .slide").each(function(i){
          totalWidth += 100 + "%";
      });
      
      $("#slides").width(totalWidth);
      $("#thumbs ul li a").click(function(event, keepScroll){
          event.preventDefault();
          $("li").removeClass("active").addClass("inactive");
          $(this).parent().addClass("active");
          var pos = $(this).parent().prevAll().length;
          $("#slides").stop().animate({marginLeft:-"100" *[pos]+"%"}, 2550);
          
          //stop autoscroll
          if(!autoScroll) clearInterval(itvl); 
      });
      
      //make first active
      $("#thumbs ul li:first").addClass("active").siblings().addClass("inactive");
      
      //set right scroll
      $('.controllers .right').on('click', function(){
          if(curr == -1) return false;
          $("#thumbs ul li a").eq(curr%$("#thumbs ul li a").length).trigger("click",[true]);
          curr++;
      });
      
      $('.controllers .left').on('click', function(keepScroll){
          var currSlide = $(".active");
          var curr = $(".active").index();
          var totalLength =  $("#thumbs ul li a").length - 1;
          $(currSlide).removeClass('active');
          if (curr == 0 ){
              $("#slides").stop().animate({marginLeft:-"100" *[totalLength]+"%"}, 450);
              $("#thumbs ul li:last-child").addClass('active');
          } else {
              $("#slides").stop().animate({marginLeft:-"100" *[curr - 1]+"%"}, 450);
              $(currSlide).prev().addClass('active');
          } 
        if(!autoScroll) clearInterval(itvl); 
      });
      
      var autoScrollOn = true;
      
      //set autoscroll
      var curr = 1;
      function autoScroll(){
          if(curr == -1) return false;
          $("#thumbs ul li a").eq(curr%$("#thumbs ul li a").length).trigger("click",[true]);
          curr++;
      }
      
      //set auto speed
      var itvl = setInterval(function(){autoScroll()}, 6000);
      
  });