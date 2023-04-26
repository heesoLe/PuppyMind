// 4) player 조작 : 캐릭터 변경
let spartan = App.loadSpritesheet('spartan.png', 64, 96, { // 64픽셀 (너비), 96픽셀(높이)
    // 각각의 방향키를 눌렀을 때, 이미지 반복
    left : [0, 1, 2, 3], //왼쪽 방향으로 걸을 때의 애니메이션 이름
    up: [0],  // 그 이름에 쓰일 전체 파일에서의 인덱스 넘버들
    down: [0], // 0일 경우, 고정
    right: [0, 1, 2, 3],
}, 8); // 1초에 8장으로 한다

// 4) player 조작 : 캐릭터 변경
App.onJoinPlayer.Add(function(player){ 
    
    player.sprite = spartan;
    player.sendUpdated();
}) 