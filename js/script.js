//2단 메뉴
$(function() {
    $('.gnb li').on('mouseover focusin', function(){
        $(this).siblings().children('ul').stop().fadeOut(200);
        $(this).children('ul').fadeIn(300);
    });
    $('.gnb li').on('mouseleave', function() {
        $(this).children('ul').stop().fadeOut()
    });
});

//체크인 체크아웃
$(function () {
  //datepicker 두개 연동
  $("#startDay, #endDay").datepicker({
    changeMonth: true,
    changeYear: true,
    minDate: "-1D",
    yearRange: "today:2028",
    showMonthAfterYear: true,
    dayNamesMin: ["월", "화", "수", "목", "금", "토", "일"],
    dateFormat: "yy-mm-dd",

  });
  $("#startDay").datepicker("option", "minDate", $("#startDay").val());
  $("#startDay").datepicker("option", "onClose", function (selectedDate) {
    $("#endDay").datepicker("option", "minDate", selectedDate);
  });

  $("#endDay").datepicker();
  $("#endDay").datepicker("option", "minDate", $("#endDay").val());
  $("#endDay").datepicker("option", "onClose", function (selectedDate) {
    $("#startDay").datepicker("option", "minDate", selectedDate);
  });
  $("#startDay").datepicker("setDate", "today");
  $("#endDay").datepicker("setDate", "+1D");
});

//스크롤시 체크인 체크아웃
$(function () {
  //datepicker 두개 연동
  $("#startDay1, #endDay2").datepicker({
    changeMonth: true,
    changeYear: true,
    minDate: "-1D",
    yearRange: "today:2028",
    showMonthAfterYear: true,
    dayNamesMin: ["월", "화", "수", "목", "금", "토", "일"],
    dateFormat: "yy-mm-dd",
  });
  $("#startDay1").datepicker("option", "minDate", $("#startDay1").val());
  $("#startDay1").datepicker("option", "onClose", function (selectedDate) {
    $("#endDay2").datepicker("option", "minDate", selectedDate);
  });

  $("#endDay2").datepicker();
  $("#endDay2").datepicker("option", "minDate", $("#endDay2").val());
  $("#endDay2").datepicker("option", "onClose", function (selectedDate) {
    $("#startDay1").datepicker("option", "minDate", selectedDate);
  });
  $("#startDay1").datepicker("setDate", "today");
  $("#endDay2").datepicker("setDate", "+1D");
});


//탭기능
$(function () {
  let tab = $(".tab li");

  tab.on("click", function () {
    let idx = $(this).index();
    let tab_cont = $(this).parents(".tab").siblings(".tab_content").eq(idx);

    $(this).addClass("on");

    $(this).siblings().removeClass("on");

    tab_cont.addClass("on");
    tab_cont.siblings().removeClass("on");
  });
});

$(function () {
  let $btn = $(".btnmenu");

  $(".btnmenu").on("click", function () {
    $(".hambuger").fadeToggle(250);
    $(".btnmenu").toggleClass("on");
  });
  
});

$(function () {
  $(".kor").on("click", function () {
    $(".in").fadeToggle(250); 
  });
});

