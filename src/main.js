import Vue from "vue";
import App from "./App.vue";
import jQuery from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

Vue.config.productionTip = false;
const $ = jQuery;
window.$ = $;

new Vue({ render: h => h(App) }).$mount("#app");

var columnDragging;
var startTime, startTimeName;
var endTime, endTimeName;
var times = [];
var timeValues = [];
var startTimeElement, endTimeElement, midTimeElement;
// [name] is the name of the event "click", "mouseover", .. 
// same as you'd pass it to bind()
// [fn] is the handler function
$.fn.bindFirst = function(name, fn) {
  // bind as you normally would
  // don't want to miss out on any jQuery magic
  this.bind(name, fn);

  // Thanks to a comment by @Martin, adding support for
  // namespaced events too.
  var handlers = this.data('events')[name.split('.')[0]];
  // take out the handler we just inserted from the end
  var handler = handlers.pop();
  // move it at the beginning
  handlers.splice(0, 0, handler);
};


$(function() {
  //$(".slot-30").attr("ondragstart", false);
  $(".room .slot-30:empty:not(.selecting)").bind("mouseover", function(e) {
    
      var hoverTime = $(".times .time[data-time=" + Number($(this).attr("data-time")) + "]").attr("data-value");
      $('.room .slot-30 .time-info').remove();
      $(this).html("<span class='time-info' style='color:#ddd'>" + hoverTime + "</span>");
      $(this).bind("mouseleave", () => { 
        if (!$(this).hasClass("selection-info"))
          $(this).html(""); 
        $('.room .slot-30 .time-info').remove();
      });     
    
  });
    
 

  $(".room .slot-30").on("mousedown", function(e) {
    e.preventDefault();
    if ($(this).children(".meeting").length === 0) {
      $(this).html("");
      $(this).addClass("selecting");

      
      columnDragging = $(this).parent().attr("data-room");
      startTime = Number($(this).attr("data-time"));
      startTimeName = $(".times .time[data-time=" + startTime + "]").attr("data-value");
      endTimeName = $(".times .time[data-time=" + (startTime + 1) + "]").attr("data-value");
      // startTimeElement = this;
      $('<div class="selection-info end-time">' + startTimeName + ' -- ' + endTimeName + '</div>').appendTo(this);
      times.push(startTime);
      // timeValues.push( $(".times .time[data-time=" + startTime + "]").attr("data-value") );
      $(".times .time[data-time=" + startTime + "]").addClass("selecting");
    }

    $(".room .slot-30").bind("mouseover", function(e) {
      if ($(this).parent().attr("data-room") === columnDragging) {
        var thisTime = Number($(this).attr("data-time"));
        times = [];
        if ($(this).children(".meeting").length === 0) 
          times.push(thisTime);

        if (thisTime > startTime) { //selecting later than the first clicked slot
          // endTimeName = $(".times .time[data-time=" + (thisTime+1) + "]").attr("data-value");
          // endTimeElement = this;
          times = [];
          $(this).parent().find(".slot-30").removeClass("selecting");
          $(".times .time").removeClass("selecting");
          for (var el = startTime; el <= thisTime; el++) {
            if ($(this).parent().find(".slot-30[data-time=" + el + "]").children(".meeting").length === 0) {
              //check no booking exists already in this room for the selected range
              $(this).parent().find(".slot-30[data-time=" + el + "]").addClass("selecting");
              $(".times .time[data-time=" + el + "]").addClass("selecting");
              times.push(el);
            } else {
              break;
            }
          }
          // $('.selection-info').remove();
          // $('<div class="selection-info start-time">from ' + startTimeName + '</div>').appendTo(startTimeElement);
          // $('<div class="selection-info end-time"> to ' + endTimeName + '</div>').appendTo(endTimeElement);

          // $(this).addClass("selecting");
        } else if (thisTime < startTime) {  //selecting earlier than the first clicked slot
          $(this).parent().find(".slot-30").removeClass("selecting");
          // endTimeElement = startTimeElement;
          // startTimeElement = this;
          $(".times .time").removeClass("selecting");
          times = [];
          for (el = startTime; el >= thisTime; el--) {
            if ($(this).parent().find(".slot-30[data-time=" + el + "]").children(".meeting").length === 0) {
              //check no booking exists already in this room for the selected range
              $(this).parent().find(".slot-30[data-time=" + el + "]").addClass("selecting");
              $(".times .time[data-time=" + el + "]").addClass("selecting");
              times.push(el);
            } else {
              break;
            }
          }
          // startTimeName = $(".times .time[data-time=" + thisTime + "]").attr("data-value");
          // endTimeName = $(".times .time[data-time=" + (startTime + 1) + "]").attr("data-value");
          // $('.selection-info').remove();
          // $('<div class="selection-info start-time">from ' + startTimeName + '</div>').appendTo(startTimeElement);
          // $('<div class="selection-info end-time"> to ' + endTimeName + '</div>').appendTo(endTimeElement);
          // $(this).addClass("selecting");
        } else {
          if ($(this).children(".meeting").length === 0) {
            $(this).siblings(".slot-30").removeClass("selecting");
            $('.selection-info').remove();
            $(".times .time").removeClass("selecting");
            $(".times .time[data-time=" + startTime + "]").addClass("selecting");
            // startTimeName = $(".times .time[data-time=" + startTime + "]").attr("data-value");
            // endTimeName = $(".times .time[data-time=" + (startTime + 1) + "]").attr("data-value");
            // startTimeElement = endTimeElement = this;
            // $('<div class="selection-info end-time">' + startTimeName + ' - ' + endTimeName + '</div>').appendTo(this);
            // $(".times .time[data-time=" + $(this).attr("data-time") + "]").siblings().removeClass("selecting");
          }
        }

        //add decorations to give the user info about the meeting selection slots
        if (!!times) {
          var uniqueTimes = [...new Set([...times])]; //this reduces an array to singular values, i.e. no duplicates
          uniqueTimes.sort((a, b) => a - b);
          if (uniqueTimes.length === 1) { // only 1 time selected
            $('.selection-info').remove();
            startTimeName = $(".times .time[data-time=" + uniqueTimes[0] + "]").attr("data-value");
            endTimeName = $(".times .time[data-time=" + (uniqueTimes[0] + 1) + "]").attr("data-value");
            $(this).html("");
            $('<div class="selection-info start-time end-time">' + startTimeName + ' - ' + endTimeName + '</div>').appendTo(this);
          } else if (uniqueTimes.length > 1 ) {
            $('.selection-info').remove();
            startTimeName = $(".times .time[data-time=" + uniqueTimes[0] + "]").attr("data-value");
            startTimeElement = $(this).parent().find(".slot-30[data-time=" + uniqueTimes[0] + "]");
            $(startTimeElement).html("");
            if (!!startTimeElement)
              $('<div class="selection-info start-time">from ' + startTimeName + '</div>').appendTo(startTimeElement);
            
            endTimeName = $(".times .time[data-time=" + (uniqueTimes[uniqueTimes.length - 1] + 1) + "]").attr("data-value");
            endTimeElement = $(this).parent().find(".slot-30[data-time=" + (uniqueTimes[uniqueTimes.length - 1]) + "]");
            $(endTimeElement).html("");
            if (!!endTimeElement)
              $('<div class="selection-info end-time">to ' + endTimeName + '</div>').appendTo(endTimeElement);
          }
        
        }
        // times.push(thisTime);
        //$(this).addClass("selecting");
      }
    });
  });

  // $(".room .slot-30").hover(function() {
  //   if (!!columnDragging)
  //     if ($(this).parent().attr("data-room") === columnDragging)
  //       $(this).addClass("selecting");
  // });

  $(window).on("mouseup", function() {
    columnDragging = null;
    //var uniq = (times) => (times.filter((item, index, times) => (times.indexOf(item) === index)));
    let uniq = [...new Set([...times])]; //reduce the array to unique values
    if (!!uniq && uniq.length > 0) {
      let selectedTimes = [];
      uniq.sort((a, b) => a - b);

      uniq.push(uniq[uniq.length - 1] + 1); //add the start time of the next slot

      uniq.forEach(entry => {
        selectedTimes.push($(".times .time[data-time=" + entry + "]").attr("data-value"));
      });
      alert("Confirm meeting room booking from " + selectedTimes[0] + " to " + selectedTimes[selectedTimes.length - 1]);
    }
    times = [];

    $(".slot-30").removeClass("selecting");
    $(".times .time").removeClass("selecting");
    $(".selection-info").remove();
  });
});
