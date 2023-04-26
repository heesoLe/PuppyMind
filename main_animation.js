// 7) 구름 띄우기 : player 접속했을 경우
// 구름 이미지 불러오기
let cloud = App.loadSpritesheet('cloud.png', 659, 400, [0], 6); // 가로:659픽셀, 세로:400픽셀, 애니메이션기능:0

App.onJoinPlayer.Add(function(player){
    
    // 구름 이미지 위치(영역) (x좌표, y좌표) 
    Map.putObject(5, 5, cloud);

    // 구름 이미지 이동 (x좌표+100, y좌표+5) *34초
    Map.moveObject(5, 5, 100, 5, 34);
})