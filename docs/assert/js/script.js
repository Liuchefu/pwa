if("serviceWorker" in navigator){
    navigator.serviceWorker.register("sw.js").then((reg) =>{
        console.log("サービスワーカー登録された", reg);
    });
}

let time = null;
const wrap = document.querySelector("#buttonWrap");
const startButton = document.querySelector("#start");
const stopButton = document.querySelector("#stop");
const text = document.querySelector("#result");

const getTime = () => {
    return new Date().getTime();
};

const formatSeconds = (time) =>{
    return time/1000;
};

startButton.addEventListener("click", ()=>{
    wrap.classList.add("-play");
    time = getTime();
    text.innerHTML = "";
});

stopButton.addEventListener("click", ()=>{
    wrap.classList.remove("-play");
    const count = getTime() - time;

    const result = 
        count === 3000
            ? "ピッタリ おめでとう"
            :2900 < count && count < 3100
            ?"すごい"
            :2500 < count && count < 3500
            ?"おしい"
            :"もう一回やってみよう";

    text.innerHTML = `${formatSeconds(count)}秒 ${result}`;
});