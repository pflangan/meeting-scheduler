<template>
  <div class="container-fluid">
    <div class="row flex-nowrap">
      <div class="col-1 times" style>
        <div class="slot-30" data-time="0" style="height:26px;">#</div>
        <div class="slot-30 time" data-time="1" data-value="07:00">07:00</div>
        <div class="slot-30 time" data-time="2" data-value="07:30">07:30</div>
        <div class="slot-30 time" data-time="3" data-value="08:00">08:00</div>
        <div class="slot-30 time" data-time="4" data-value="08:30">08:30</div>
        <div class="slot-30 time" data-time="5" data-value="09:00">09:00</div>
        <div class="slot-30 time" data-time="6" data-value="09:30">09:30</div>
        <div class="slot-30 time" data-time="7" data-value="10:00">10:00</div>
        <div class="slot-30 time" data-time="8" data-value="10:30">10:30</div>
        <div class="slot-30 time" data-time="9" data-value="11:00">11:00</div>
        <div class="slot-30 time" data-time="10" data-value="11:30">11:30</div>
        <div class="slot-30 time" data-time="11" data-value="12:00">12:00</div>
        <div class="slot-30 time" data-time="12" data-value="12:30">12:30</div>
        <div class="slot-30 time" data-time="13" data-value="13:00">13:00</div>
        <div class="slot-30 time" data-time="14" data-value="13:30">13:30</div>
        <div class="slot-30 time" data-time="15" data-value="14:00">14:00</div>
        <div class="slot-30 time" data-time="16" data-value="14:30">14:30</div>
        <div class="slot-30 time" data-time="17" data-value="15:00">15:00</div>
        <div class="slot-30 time" data-time="18" data-value="15:30">15:30</div>
        <div class="slot-30 time" data-time="19" data-value="16:00">16:00</div>
        <div class="slot-30 time" data-time="20" data-value="16:30">16:30</div>
        <div class="slot-30 time" data-time="21" data-value="17:00">17:00</div>
        <div class="slot-30 time" data-time="22" data-value="17:30">17:30</div>
        <div class="slot-30 time" data-time="23" data-value="18:00">18:00</div>
        <div class="slot-30 time" data-time="24" data-value="18:30">18:30</div>
        <div class="slot-30 time d-none" data-time="25" data-value="19:00">19:00</div>
      </div>
      <div class="col-1 room col-offset-1" data-room="1">
        <div class="room-name">Room 1</div>
        <div class="slot-30" data-time="1"></div>
        <div class="slot-30" data-time="2">
          <div class="meeting" data-meeting-id="{asdf-fdsa-aaaa-sfss}">Paul Langan</div>
        </div>
        <div class="slot-30" data-time="3">
          <div class="meeting" data-meeting-id="{asdf-fdsa-aaaa-sfss}"></div>
        </div>
        <div class="slot-30" data-time="4">
          <div class="meeting" data-meeting-id="{asdf-fdsa-aaaa-sfss}"></div>
        </div>
        <div class="slot-30" data-time="5"></div>
        <div class="slot-30" data-time="6"></div>
        <div class="slot-30" data-time="7"></div>
        <div class="slot-30" data-time="8"></div>
        <div class="slot-30" data-time="9"></div>
        <div class="slot-30" data-time="10"></div>
        <div class="slot-30" data-time="11"></div>
        <div class="slot-30" data-time="12"></div>
        <div class="slot-30" data-time="13"></div>
        <div class="slot-30" data-time="14"></div>
        <div class="slot-30" data-time="15"></div>
        <div class="slot-30" data-time="16"></div>
        <div class="slot-30" data-time="17"></div>
        <div class="slot-30" data-time="18"></div>
        <div class="slot-30" data-time="19"></div>
        <div class="slot-30" data-time="20"></div>
        <div class="slot-30" data-time="21"></div>
        <div class="slot-30" data-time="22"></div>
        <div class="slot-30" data-time="23"></div>
        <div class="slot-30" data-time="24"></div>
        <div class="slot-30 d-none" data-time="25"></div>
      </div>
      <div class="col-1 room" data-room="2">
        <div class="room-name">Room 2</div>
        <div class="slot-30" data-time="1"></div>
        <div class="slot-30" data-time="2"></div>
        <div class="slot-30" data-time="3"></div>
        <div class="slot-30" data-time="4"></div>
        <div class="slot-30" data-time="5"></div>
        <div class="slot-30" data-time="6"></div>
        <div class="slot-30" data-time="7"></div>
        <div class="slot-30" data-time="8"></div>
        <div class="slot-30" data-time="9"></div>
        <div class="slot-30" data-time="10"></div>
        <div class="slot-30" data-time="11"></div>
        <div class="slot-30" data-time="12"></div>
        <div class="slot-30" data-time="13"></div>
        <div class="slot-30" data-time="14"></div>
        <div class="slot-30" data-time="15"></div>
        <div class="slot-30" data-time="16"></div>
        <div class="slot-30" data-time="17">
          <div class="meeting" data-meeting-id="{asdf-fdsa-aaaa-sssd}"><div class="meeting-top"></div>Paul Langan</div>
        </div>
        <div class="slot-30" data-time="18">
          <div class="meeting" data-meeting-id="{asdf-fdsa-aaaa-sssd}"></div>
        </div>
        <div class="slot-30" data-time="19">
          <div class="meeting" data-meeting-id="{asdf-fdsa-aaaa-sssd}"><div class="meeting-bottom"></div></div>
        </div>
        <div class="slot-30" data-time="20"></div>
        <div class="slot-30" data-time="21"></div>
        <div class="slot-30" data-time="22"></div>
        <div class="slot-30" data-time="23"></div>
        <div class="slot-30" data-time="24"></div>
        <div class="slot-30 d-none" data-time="25"></div>
      </div>
      <div class="col-1 room" data-room="3">
        <div class="room-name">Room 3</div>
        <div class="slot-30" data-time="1"></div>
        <div class="slot-30" data-time="2"></div>
        <div class="slot-30" data-time="3"></div>
        <div class="slot-30" data-time="4"></div>
        <div class="slot-30" data-time="5"></div>
        <div class="slot-30" data-time="6"></div>
        <div class="slot-30" data-time="7"></div>
        <div class="slot-30" data-time="8"></div>
        <div class="slot-30" data-time="9"></div>
        <div class="slot-30" data-time="10"></div>
        <div class="slot-30" data-time="11"></div>
        <div class="slot-30" data-time="12"></div>
        <div class="slot-30" data-time="13"></div>
        <div class="slot-30" data-time="14"></div>
        <div class="slot-30" data-time="15"></div>
        <div class="slot-30" data-time="16"></div>
        <div class="slot-30" data-time="17"></div>
        <div class="slot-30" data-time="18"></div>
        <div class="slot-30" data-time="19"></div>
        <div class="slot-30" data-time="20"></div>
        <div class="slot-30" data-time="21"></div>
        <div class="slot-30" data-time="22"></div>
        <div class="slot-30" data-time="23"></div>
        <div class="slot-30" data-time="24"></div>
        <div class="slot-30 d-none" data-time="25"></div>
      </div>
      <div class="col-1 room" data-room="4">
        <div class="room-name">Room 4</div>
        <div class="slot-30" data-time="1"></div>
        <div class="slot-30" data-time="2"></div>
        <div class="slot-30" data-time="3"></div>
        <div class="slot-30" data-time="4"></div>
        <div class="slot-30" data-time="5"></div>
        <div class="slot-30" data-time="6"></div>
        <div class="slot-30" data-time="7"></div>
        <div class="slot-30" data-time="8"></div>
        <div class="slot-30" data-time="9"></div>
        <div class="slot-30" data-time="10"></div>
        <div class="slot-30" data-time="11"></div>
        <div class="slot-30" data-time="12"></div>
        <div class="slot-30" data-time="13"></div>
        <div class="slot-30" data-time="14"></div>
        <div class="slot-30" data-time="15"></div>
        <div class="slot-30" data-time="16"></div>
        <div class="slot-30" data-time="17"></div>
        <div class="slot-30" data-time="18"></div>
        <div class="slot-30" data-time="19"></div>
        <div class="slot-30" data-time="20"></div>
        <div class="slot-30" data-time="21"></div>
        <div class="slot-30" data-time="22"></div>
        <div class="slot-30" data-time="23"></div>
        <div class="slot-30" data-time="24"></div>
        <div class="slot-30 d-none" data-time="25"></div>
      </div>
      <div class="col-1 room" data-room="5">
        <div class="room-name">Room 5</div>
        <div class="slot-30" data-time="1"></div>
        <div class="slot-30" data-time="2"></div>
        <div class="slot-30" data-time="3"></div>
        <div class="slot-30" data-time="4"></div>
        <div class="slot-30" data-time="5"></div>
        <div class="slot-30" data-time="6"></div>
        <div class="slot-30" data-time="7"></div>
        <div class="slot-30" data-time="8"></div>
        <div class="slot-30" data-time="9"></div>
        <div class="slot-30" data-time="10"></div>
        <div class="slot-30" data-time="11"></div>
        <div class="slot-30" data-time="12"></div>
        <div class="slot-30" data-time="13"></div>
        <div class="slot-30" data-time="14"></div>
        <div class="slot-30" data-time="15"></div>
        <div class="slot-30" data-time="16"></div>
        <div class="slot-30" data-time="17"></div>
        <div class="slot-30" data-time="18"></div>
        <div class="slot-30" data-time="19"></div>
        <div class="slot-30" data-time="20"></div>
        <div class="slot-30" data-time="21"></div>
        <div class="slot-30" data-time="22"></div>
        <div class="slot-30" data-time="23"></div>
        <div class="slot-30" data-time="24"></div>
        <div class="slot-30 d-none" data-time="25"></div>
      </div>
      <div class="col-1 room" data-room="6">
        <div class="room-name">Room 6</div>
        <div class="slot-30" data-time="1"></div>
        <div class="slot-30" data-time="2"></div>
        <div class="slot-30" data-time="3"></div>
        <div class="slot-30" data-time="4"></div>
        <div class="slot-30" data-time="5"></div>
        <div class="slot-30" data-time="6"></div>
        <div class="slot-30" data-time="7"></div>
        <div class="slot-30" data-time="8"></div>
        <div class="slot-30" data-time="9"></div>
        <div class="slot-30" data-time="10"></div>
        <div class="slot-30" data-time="11"></div>
        <div class="slot-30" data-time="12"></div>
        <div class="slot-30" data-time="13"></div>
        <div class="slot-30" data-time="14"></div>
        <div class="slot-30" data-time="15"></div>
        <div class="slot-30" data-time="16"></div>
        <div class="slot-30" data-time="17"></div>
        <div class="slot-30" data-time="18"></div>
        <div class="slot-30" data-time="19"></div>
        <div class="slot-30" data-time="20"></div>
        <div class="slot-30" data-time="21"></div>
        <div class="slot-30" data-time="22"></div>
        <div class="slot-30" data-time="23"></div>
        <div class="slot-30" data-time="24"></div>
        <div class="slot-30 d-none" data-time="25"></div>
      </div>
      <div class="col-1 room" data-room="7">
        <div class="room-name">Room 7</div>
        <div class="slot-30" data-time="1"></div>
        <div class="slot-30" data-time="2"></div>
        <div class="slot-30" data-time="3"></div>
        <div class="slot-30" data-time="4"></div>
        <div class="slot-30" data-time="5"></div>
        <div class="slot-30" data-time="6"></div>
        <div class="slot-30" data-time="7"></div>
        <div class="slot-30" data-time="8"></div>
        <div class="slot-30" data-time="9"></div>
        <div class="slot-30" data-time="10"></div>
        <div class="slot-30" data-time="11"></div>
        <div class="slot-30" data-time="12"></div>
        <div class="slot-30" data-time="13"></div>
        <div class="slot-30" data-time="14"></div>
        <div class="slot-30" data-time="15"></div>
        <div class="slot-30" data-time="16"></div>
        <div class="slot-30" data-time="17"></div>
        <div class="slot-30" data-time="18"></div>
        <div class="slot-30" data-time="19"></div>
        <div class="slot-30" data-time="20"></div>
        <div class="slot-30" data-time="21"></div>
        <div class="slot-30" data-time="22"></div>
        <div class="slot-30" data-time="23"></div>
        <div class="slot-30" data-time="24"></div>
        <div class="slot-30 d-none" data-time="25"></div>
      </div>
      <div class="col-1 room" data-room="8">
        <div class="room-name">Room 8</div>
        <div class="slot-30" data-time="1"></div>
        <div class="slot-30" data-time="2"></div>
        <div class="slot-30" data-time="3"></div>
        <div class="slot-30" data-time="4"></div>
        <div class="slot-30" data-time="5"></div>
        <div class="slot-30" data-time="6"></div>
        <div class="slot-30" data-time="7"></div>
        <div class="slot-30" data-time="8"></div>
        <div class="slot-30" data-time="9"></div>
        <div class="slot-30" data-time="10"></div>
        <div class="slot-30" data-time="11"></div>
        <div class="slot-30" data-time="12"></div>
        <div class="slot-30" data-time="13"></div>
        <div class="slot-30" data-time="14"></div>
        <div class="slot-30" data-time="15"></div>
        <div class="slot-30" data-time="16"></div>
        <div class="slot-30" data-time="17"></div>
        <div class="slot-30" data-time="18"></div>
        <div class="slot-30" data-time="19"></div>
        <div class="slot-30" data-time="20"></div>
        <div class="slot-30" data-time="21"></div>
        <div class="slot-30" data-time="22"></div>
        <div class="slot-30" data-time="23"></div>
        <div class="slot-30" data-time="24"></div>
        <div class="slot-30 d-none" data-time="25"></div>
      </div>
      <div class="col-1 room" data-room="9">
        <div class="room-name">Room 9</div>
        <div class="slot-30" data-time="1"></div>
        <div class="slot-30" data-time="2"></div>
        <div class="slot-30" data-time="3"></div>
        <div class="slot-30" data-time="4"></div>
        <div class="slot-30" data-time="5"></div>
        <div class="slot-30" data-time="6"></div>
        <div class="slot-30" data-time="7"></div>
        <div class="slot-30" data-time="8"></div>
        <div class="slot-30" data-time="9"></div>
        <div class="slot-30" data-time="10"></div>
        <div class="slot-30" data-time="11"></div>
        <div class="slot-30" data-time="12"></div>
        <div class="slot-30" data-time="13"></div>
        <div class="slot-30" data-time="14"></div>
        <div class="slot-30" data-time="15"></div>
        <div class="slot-30" data-time="16"></div>
        <div class="slot-30" data-time="17"></div>
        <div class="slot-30" data-time="18"></div>
        <div class="slot-30" data-time="19"></div>
        <div class="slot-30" data-time="20"></div>
        <div class="slot-30" data-time="21"></div>
        <div class="slot-30" data-time="22"></div>
        <div class="slot-30" data-time="23"></div>
        <div class="slot-30" data-time="24"></div>
        <div class="slot-30 d-none" data-time="25"></div>
      </div>
      <div class="col-1 room" data-room="10">
        <div class="room-name">Room 10</div>
        <div class="slot-30" data-time="1"></div>
        <div class="slot-30" data-time="2"></div>
        <div class="slot-30" data-time="3"></div>
        <div class="slot-30" data-time="4"></div>
        <div class="slot-30" data-time="5"></div>
        <div class="slot-30" data-time="6"></div>
        <div class="slot-30" data-time="7"></div>
        <div class="slot-30" data-time="8"></div>
        <div class="slot-30" data-time="9"></div>
        <div class="slot-30" data-time="10"></div>
        <div class="slot-30" data-time="11"></div>
        <div class="slot-30" data-time="12"></div>
        <div class="slot-30" data-time="13"></div>
        <div class="slot-30" data-time="14"></div>
        <div class="slot-30" data-time="15"></div>
        <div class="slot-30" data-time="16"></div>
        <div class="slot-30" data-time="17"></div>
        <div class="slot-30" data-time="18"></div>
        <div class="slot-30" data-time="19"></div>
        <div class="slot-30" data-time="20"></div>
        <div class="slot-30" data-time="21"></div>
        <div class="slot-30" data-time="22"></div>
        <div class="slot-30" data-time="23"></div>
        <div class="slot-30" data-time="24"></div>
        <div class="slot-30 d-none" data-time="25"></div>
      </div>
      <div class="col-1 room" data-room="11">
        <div class="room-name">Room 11</div>
        <div class="slot-30" data-time="1"></div>
        <div class="slot-30" data-time="2"></div>
        <div class="slot-30" data-time="3"></div>
        <div class="slot-30" data-time="4"></div>
        <div class="slot-30" data-time="5"></div>
        <div class="slot-30" data-time="6"></div>
        <div class="slot-30" data-time="7"></div>
        <div class="slot-30" data-time="8"></div>
        <div class="slot-30" data-time="9"></div>
        <div class="slot-30" data-time="10"></div>
        <div class="slot-30" data-time="11"></div>
        <div class="slot-30" data-time="12"></div>
        <div class="slot-30" data-time="13"></div>
        <div class="slot-30" data-time="14"></div>
        <div class="slot-30" data-time="15"></div>
        <div class="slot-30" data-time="16"></div>
        <div class="slot-30" data-time="17"></div>
        <div class="slot-30" data-time="18"></div>
        <div class="slot-30" data-time="19"></div>
        <div class="slot-30" data-time="20"></div>
        <div class="slot-30" data-time="21"></div>
        <div class="slot-30" data-time="22"></div>
        <div class="slot-30" data-time="23"></div>
        <div class="slot-30" data-time="24"></div>
        <div class="slot-30 d-none" data-time="25"></div>
      </div>
      <div class="col-1 room" data-room="12">
        <div class="room-name">Room 12</div>
        <div class="slot-30" data-time="1"></div>
        <div class="slot-30" data-time="2"></div>
        <div class="slot-30" data-time="3"></div>
        <div class="slot-30" data-time="4"></div>
        <div class="slot-30" data-time="5"></div>
        <div class="slot-30" data-time="6"></div>
        <div class="slot-30" data-time="7"></div>
        <div class="slot-30" data-time="8"></div>
        <div class="slot-30" data-time="9"></div>
        <div class="slot-30" data-time="10"></div>
        <div class="slot-30" data-time="11"></div>
        <div class="slot-30" data-time="12"></div>
        <div class="slot-30" data-time="13"></div>
        <div class="slot-30" data-time="14"></div>
        <div class="slot-30" data-time="15"></div>
        <div class="slot-30" data-time="16"></div>
        <div class="slot-30" data-time="17"></div>
        <div class="slot-30" data-time="18"></div>
        <div class="slot-30" data-time="19"></div>
        <div class="slot-30" data-time="20"></div>
        <div class="slot-30" data-time="21"></div>
        <div class="slot-30" data-time="22"></div>
        <div class="slot-30" data-time="23"></div>
        <div class="slot-30" data-time="24"></div>
        <div class="slot-30 d-none" data-time="25"></div>
      </div>
      <div class="col-1 room" data-room="13">
        <div class="room-name">Room 13</div>
        <div class="slot-30" data-time="1"></div>
        <div class="slot-30" data-time="2"></div>
        <div class="slot-30" data-time="3"></div>
        <div class="slot-30" data-time="4"></div>
        <div class="slot-30" data-time="5"></div>
        <div class="slot-30" data-time="6"></div>
        <div class="slot-30" data-time="7"></div>
        <div class="slot-30" data-time="8"></div>
        <div class="slot-30" data-time="9"></div>
        <div class="slot-30" data-time="10"></div>
        <div class="slot-30" data-time="11"></div>
        <div class="slot-30" data-time="12"></div>
        <div class="slot-30" data-time="13"></div>
        <div class="slot-30" data-time="14"></div>
        <div class="slot-30" data-time="15"></div>
        <div class="slot-30" data-time="16"></div>
        <div class="slot-30" data-time="17"></div>
        <div class="slot-30" data-time="18"></div>
        <div class="slot-30" data-time="19"></div>
        <div class="slot-30" data-time="20"></div>
        <div class="slot-30" data-time="21"></div>
        <div class="slot-30" data-time="22"></div>
        <div class="slot-30" data-time="23"></div>
        <div class="slot-30" data-time="24"></div>
        <div class="slot-30 d-none" data-time="25"></div>
      </div>
      <div class="col-1 room" data-room="14">
        <div class="room-name">Room 14</div>
        <div class="slot-30" data-time="1"></div>
        <div class="slot-30" data-time="2"></div>
        <div class="slot-30" data-time="3"></div>
        <div class="slot-30" data-time="4"></div>
        <div class="slot-30" data-time="5"></div>
        <div class="slot-30" data-time="6"></div>
        <div class="slot-30" data-time="7"></div>
        <div class="slot-30" data-time="8"></div>
        <div class="slot-30" data-time="9"></div>
        <div class="slot-30" data-time="10"></div>
        <div class="slot-30" data-time="11"></div>
        <div class="slot-30" data-time="12"></div>
        <div class="slot-30" data-time="13"></div>
        <div class="slot-30" data-time="14"></div>
        <div class="slot-30" data-time="15"></div>
        <div class="slot-30" data-time="16"></div>
        <div class="slot-30" data-time="17"></div>
        <div class="slot-30" data-time="18"></div>
        <div class="slot-30" data-time="19"></div>
        <div class="slot-30" data-time="20"></div>
        <div class="slot-30" data-time="21"></div>
        <div class="slot-30" data-time="22"></div>
        <div class="slot-30" data-time="23"></div>
        <div class="slot-30" data-time="24"></div>
        <div class="slot-30 d-none" data-time="25"></div>
      </div>
      <div class="col-1 room" data-room="15">
        <div class="room-name">Room 15</div>
        <div class="slot-30" data-time="1"></div>
        <div class="slot-30" data-time="2"></div>
        <div class="slot-30" data-time="3"></div>
        <div class="slot-30" data-time="4"></div>
        <div class="slot-30" data-time="5"></div>
        <div class="slot-30" data-time="6"></div>
        <div class="slot-30" data-time="7"></div>
        <div class="slot-30" data-time="8"></div>
        <div class="slot-30" data-time="9"></div>
        <div class="slot-30" data-time="10"></div>
        <div class="slot-30" data-time="11"></div>
        <div class="slot-30" data-time="12"></div>
        <div class="slot-30" data-time="13"></div>
        <div class="slot-30" data-time="14"></div>
        <div class="slot-30" data-time="15"></div>
        <div class="slot-30" data-time="16"></div>
        <div class="slot-30" data-time="17"></div>
        <div class="slot-30" data-time="18"></div>
        <div class="slot-30" data-time="19"></div>
        <div class="slot-30" data-time="20"></div>
        <div class="slot-30" data-time="21"></div>
        <div class="slot-30" data-time="22"></div>
        <div class="slot-30" data-time="23"></div>
        <div class="slot-30" data-time="24"></div>
        <div class="slot-30 d-none" data-time="25"></div>
      </div>
      <div class="col-1 room" data-room="16">
        <div class="room-name">Room 16</div>
        <div class="slot-30" data-time="1"></div>
        <div class="slot-30" data-time="2"></div>
        <div class="slot-30" data-time="3"></div>
        <div class="slot-30" data-time="4"></div>
        <div class="slot-30" data-time="5"></div>
        <div class="slot-30" data-time="6"></div>
        <div class="slot-30" data-time="7"></div>
        <div class="slot-30" data-time="8"></div>
        <div class="slot-30" data-time="9"></div>
        <div class="slot-30" data-time="10"></div>
        <div class="slot-30" data-time="11"></div>
        <div class="slot-30" data-time="12"></div>
        <div class="slot-30" data-time="13"></div>
        <div class="slot-30" data-time="14"></div>
        <div class="slot-30" data-time="15"></div>
        <div class="slot-30" data-time="16"></div>
        <div class="slot-30" data-time="17"></div>
        <div class="slot-30" data-time="18"></div>
        <div class="slot-30" data-time="19"></div>
        <div class="slot-30" data-time="20"></div>
        <div class="slot-30" data-time="21"></div>
        <div class="slot-30" data-time="22"></div>
        <div class="slot-30" data-time="23"></div>
        <div class="slot-30" data-time="24"></div>
        <div class="slot-30 d-none" data-time="25"></div>
      </div>
      <div class="col-1 room" data-room="17">
        <div class="room-name">Room 17</div>
        <div class="slot-30" data-time="1"></div>
        <div class="slot-30" data-time="2"></div>
        <div class="slot-30" data-time="3"></div>
        <div class="slot-30" data-time="4"></div>
        <div class="slot-30" data-time="5"></div>
        <div class="slot-30" data-time="6"></div>
        <div class="slot-30" data-time="7"></div>
        <div class="slot-30" data-time="8"></div>
        <div class="slot-30" data-time="9"></div>
        <div class="slot-30" data-time="10"></div>
        <div class="slot-30" data-time="11"></div>
        <div class="slot-30" data-time="12"></div>
        <div class="slot-30" data-time="13"></div>
        <div class="slot-30" data-time="14"></div>
        <div class="slot-30" data-time="15"></div>
        <div class="slot-30" data-time="16"></div>
        <div class="slot-30" data-time="17"></div>
        <div class="slot-30" data-time="18"></div>
        <div class="slot-30" data-time="19"></div>
        <div class="slot-30" data-time="20"></div>
        <div class="slot-30" data-time="21"></div>
        <div class="slot-30" data-time="22"></div>
        <div class="slot-30" data-time="23"></div>
        <div class="slot-30" data-time="24"></div>
        <div class="slot-30 d-none" data-time="25"></div>
      </div>
      <div class="col-1 room" data-room="18">
        <div class="room-name">Room 18</div>
        <div class="slot-30" data-time="1"></div>
        <div class="slot-30" data-time="2"></div>
        <div class="slot-30" data-time="3"></div>
        <div class="slot-30" data-time="4"></div>
        <div class="slot-30" data-time="5"></div>
        <div class="slot-30" data-time="6"></div>
        <div class="slot-30" data-time="7"></div>
        <div class="slot-30" data-time="8"></div>
        <div class="slot-30" data-time="9"></div>
        <div class="slot-30" data-time="10"></div>
        <div class="slot-30" data-time="11"></div>
        <div class="slot-30" data-time="12"></div>
        <div class="slot-30" data-time="13"></div>
        <div class="slot-30" data-time="14"></div>
        <div class="slot-30" data-time="15"></div>
        <div class="slot-30" data-time="16"></div>
        <div class="slot-30" data-time="17"></div>
        <div class="slot-30" data-time="18"></div>
        <div class="slot-30" data-time="19"></div>
        <div class="slot-30" data-time="20"></div>
        <div class="slot-30" data-time="21"></div>
        <div class="slot-30" data-time="22"></div>
        <div class="slot-30" data-time="23"></div>
        <div class="slot-30" data-time="24"></div>
        <div class="slot-30 d-none" data-time="25"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WeeklyRoomBookings",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.room {
  border: 1px solid #ccc;
  border-width: 0 1px 1px 0px;
  padding: 2px;
}
.meeting { 
  position:relative; 
  cursor: help; 
  width: 100%;
  min-height: 100%;
  background: #6492cf;
}
.meeting-top {
  position: absolute;
  top: 0;
  left: 0;
  height: 2px;
  width: 100%;
  background-color:red;
  cursor: n-resize;
}
.meeting-bottom {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2px;
  width: 100%;
  background-color:red;
  cursor: n-resize;
}
.slot-30:empty:hover {
  background-color: #fafafa;
}
.room .slot-30 {
  cursor: copy;
  /*
  padding: 1px 1px;
  margin: 1px;
  */
  border-top: 1px solid #eee;
  height: 24px;
  /* max-height:36px; */
  overflow-y: hidden;
}
.slot-30:empty {
  border-top: 1px solid #eee;
}
.container {
  height: 100%;
  border-left: 1px solid #ccc;
  margin-top: 20px;
}
.time {
  text-align: right;
  background-color: #9cbeea;
  border-top: 1px solid #83a2cc;
  border-right: 1px solid #4c73a7;
  padding-right:4px;
  height:24px;
}
.times {
  padding: 0;
}

.selecting {
  background-color: #e91e63;
}
.times .selecting {
  background-color: white;
  border-top: 1px solid rgb(212, 218, 247);
}


.room-name {
  background-color: #9cbeea;
  font-weight: bold;
  margin:-2px;
  padding:2px;
  white-space: nowrap;
}
.selection-info {
  color: rgba(255,255,255,0.85);
}
h3 {
  margin: 10px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
