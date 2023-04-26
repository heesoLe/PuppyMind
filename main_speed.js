// 1) player 조작 : 진입할 때, 스피드를 300으로 변경!
App.onJoinPlayer.Add(function(player){ 
    player.moveSpeed = 300; // 스피드 명령어
    player.sendUpdate();
}) // 개별 플레이어들의 스피드를 300으로 올리고 업데이트를 해주세요.