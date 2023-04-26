// 5) player 조작 : 채팅 인터랙션
App.onSay.Add(function(player, text){ // player, text : 플레이어 , 채팅창에 입력한 값
    let message = player.name + '님이 '+text+'(이)라고 말했습니다.';
    App.showCenterLabel(message);
})

// 6) player 조작 : 채팅 인터랙션 -> 스피드 조작
App.onSay.Add(function(player, text){ // player, text : 플레이어 , 채팅창에 입력한 값
    
    if(text == 'speed up') {
        player.moveSpeed = 400;
    } else if (text == 'speed down') {
        player.moveSpeed = 30;
    }
    player.sendUpdated();
})