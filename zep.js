// App이 최초로 시작될 때 
App.onInit.Add(function(){
    // 이 시점에 App에는 플레이어들이 참가하지 않는 상태
    // App의 나머지 필요한 부분을 초기화 시킨다.
});

// player 가 접속했을 때 
App.onJoinPlayer.Add(function(player) {
    //해당하는 모든 player가 이 이벤트}를 통해 App에 입장
});

// player가 모두 입장한 뒤에 한번 호출
App.inStart.App(function(){
    // App에서 원하는 플레이어 속성값을 부여할 수 있다. 
});

// 플레어이가 떠날 때
App.inLeavePlayer.App(function(player){
    // 플레이어가 단순히 중간에 나갔을 경우,
    // App이 종료될 때에서 이 이벤트를 통해 모두 App에서 퇴장한다.
});

// 매 20ms(0.02초) 마다 실행
App.onUpdate.Add(function(){
});

// App 이 종료될 때
App.onDestory.Add(function(){
    // 이미 모든 플레이어가 App에서 나간 상태
    // App이 나머지를 정리한다.
})