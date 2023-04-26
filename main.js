App.onJoinPlayer.Add(function(player){  //function : 실행 명령어
    // CamelCase 스타일 : 읽기 쉬운 문자, 중간에 대문자있는 문자
    App.showCenterLabel("Hello sparta") // showCenterLabel() : '중앙에 (문자)라벨을 띄워줘라' 라는 명령어
}) 

// 1) player 조작 : 진입할 때, 스피드를 300으로 변경!
App.onJoinPlayer.Add(function(player){ 
    player.moveSpeed = 300; // 스피드 명령어
    player.sendUpdate();
}) // 개별 플레이어들의 스피드를 300으로 올리고 업데이트를 해주세요.


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

// 7) 구름 띄우기 : player 접속했을 경우
// 구름 이미지 불러오기
let cloud = App.loadSpritesheet('cloud.png', 659, 400, [0], 6); // 가로:659픽셀, 세로:400픽셀, 애니메이션기능:0

App.onJoinPlayer.Add(function(player){
    
    // 구름 이미지 위치(영역) (x좌표, y좌표) 
    Map.putObject(5, 5, cloud);

    // 구름 이미지 이동 (x좌표+100, y좌표+5) *34초
    Map.moveObject(5, 5, 100, 5, 34);
})