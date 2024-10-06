
function Init()
{
    const img=document.getElementById("mangrove_1")
    img.style.left = `${800}px`;
    img.style.top = `${850}px`;
    const img_2=document.getElementById("mangrove_2")
    img_2.style.left = `${750}px`;
    img_2.style.top = `${900}px`;
    document.getElementById("arrow_1").hidden=true
    document.getElementById("arrow_2").hidden=true
    const tooltip = document.getElementById("mangrovetooltip");

    img.addEventListener("click", (event) => {
        
            tooltip.style.left = `${800}px`; // 말풍선의 X좌표 설정
            tooltip.style.top = `${850}px`; // 말풍선의 Y좌표 설정
            tooltip.style.display = "block"; // 말풍선 표시

            // 2초 후 말풍선 숨김
            setTimeout(() => {
                tooltip.style.display = "none";
            }, 4000);
        });
        img_2.addEventListener("click", (event) => {
            
            tooltip.style.left = `${750}px`; // 말풍선의 X좌표 설정
            tooltip.style.top = `${900}px`; // 말풍선의 Y좌표 설정
            tooltip.style.display = "block"; // 말풍선 표시

            // 2초 후 말풍선 숨김
            setTimeout(() => {
                tooltip.style.display = "none";
            }, 4000);
        });
}
window.onload= Init()
function ArrowMove(img,x,y)
{
   
let isDragging = false; 
    let offsetX, offsetY;
    img.style.left = `${x}px`;
    img.style.top = `${y}px`;
    
    console.log(img,"ArrowMove",img.style.left,img.style.top)
}
function Arrow_1(regionname)
{
    const arrowimg=document.getElementById("arrow_1");
    arrowimg.hidden=false
    switch(regionname)
    {
        case "인천":
            ArrowMove(arrowimg,800,360)
            break;
        case "전주 왼쪽지역":
            ArrowMove(arrowimg,820,550)
            break;
        case "광주 왼쪽지역":
            ArrowMove(arrowimg,800,620)
            break;
        case "부산 왼쪽지역":
            ArrowMove(arrowimg,1010,610)
            break;
    }
}
function Arrow_2(regionname)
{
    const arrowimg=document.getElementById("arrow_2");
    arrowimg.hidden=false
    switch(regionname)
    {
        case "인천":
            ArrowMove(arrowimg,800,400)
            break;
        case "전주 왼쪽지역":
            ArrowMove(arrowimg,850,600)
            break;
        case "광주 왼쪽지역":
            ArrowMove(arrowimg,800,670)
            break; 
        case "부산 왼쪽지역":
            ArrowMove(arrowimg,980,600)
            break;
    }
}




document.getElementById("inputText").addEventListener("keypress",function(event){
    if(event.key=="Enter")
    {
        const inputText = this.value; 
    console.log(inputText)
    Arrow_1(inputText)
    Arrow_2(inputText)
    switch(inputText)
    {
        case "인천":
            console.log("인천")
            
            document.getElementById("output").innerText="첫번째 추천 이주지역 : 부천시 두번째 추천 이주지역 : 광명시"
            break;
        case "전주 왼쪽지역":
            document.getElementById("output").innerText="첫번째 추천 이주지역 : 전주시 두번째 추천 이주지역 : 임실군"
            break;
        case "광주 왼쪽지역":
            document.getElementById("output").innerText="첫번째 추천 이주지역 : 장성군 두번째 추천 이주지역 : 함평군"
            break;
        case "부산 왼쪽지역":
            document.getElementById("output").innerText="첫번째 추천 이주지역 : 양산시 두번째 추천 이주지역 : 밀양시"
            break;

    }
}
})
document.getElementById("submitButton").onclick=function()
{
    const inputText = document.getElementById("inputText").value; 
    console.log(inputText)
    switch(inputText)
    {
        case "인천":
            console.log("인천")
            document.getElementById("output").innerText="첫번째 추천 이주지역 : 부천시 두번째 추천 이주지역 : 광명시"
            break;
        case "전주 왼쪽지역":
            document.getElementById("output").innerText="첫번째 추천 이주지역 : 전주시 두번째 추천 이주지역 : 임실군"
            break;
        case "광주 왼쪽지역":
            document.getElementById("output").innerText="첫번째 추천 이주지역 : 장성군 두번째 추천 이주지역 : 함평군"
            break;
        case "부산 왼쪽지역":
            document.getElementById("output").innerText="첫번째 추천 이주지역 : 양산시 두번째 추천 이주지역 : 밀양시"
            break;

    }
}
document.getElementById('imageSelector').addEventListener('change', function() {
    const selectedValue = this.value; 
    const imageElement = document.getElementById('displayImage'); 
    imageElement.src = selectedValue; 
});
