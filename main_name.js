// 2) player 조작 : 이름 변경
App.onJoinPlayer.Add(function(player){ 
    player.moveSpeed = 300; // 스피드 명령어
    player.title = "소히찡";
    player.sendUpdated();
})

// 3) player 조작 : 이름 랜덤값
App.onJoinPlayer.Add(function(player){ 
    
    let mbtis =["ENFP", "ESTJ", "INFP", "ISFJ"];

    // 랜덤값을 주고 싶다면? 
    let nth = Math.floor(Math.random() * mbtis.length); 
    // 소수점 뒤를 절삭하기 위해 Math.floor라는 함수를 사용
    
    player.moveSpeed = 300; // 스피드 명령어
    //player.title = "소히찡";
    player.title = mbtis[nth]; 
    player.sendUpdated();
}) 