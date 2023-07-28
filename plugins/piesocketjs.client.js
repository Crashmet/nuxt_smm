export default ({ app }, inject) => {
  let piesocket;
  let piesocketConnected = false;
  let pieSocketTracker = 0;
  function formMessage() {
    return `${++pieSocketTracker}. Хочу работать в Гео Техно Сот!`;
  }
  inject("connectPieSocket", (saveToStore) => {
    if (piesocketConnected === false) {
      piesocket = new WebSocket(`wss://socmediamarket.ru/api/chat_ws`);
      // wss://us-nyc-1.websocket.me/v3/1?api_key=kZNNVdhuWCmup7DQQyZ5eHYJElbljH90YcDLawby&notify_self

      piesocket.onopen = function () {
        console.log("piesocket connected");
        piesocketConnected = true;
        piesocket.send(formMessage());
      };

      console.log(piesocket);

      console.log("piesocket", piesocket.readyState);

      piesocket.onmessage = function (message) {
        console.log(piesocket);

        console.log("piesocket", piesocket.readyState);
        // saveToStore(message.data);
        console.log(11);
      };

      piesocket.onclose = function () {
        console.log("piesocket disconnected");
        piesocketConnected = false;
      };

      piesocket.onerror = function (error) {
        console.log("error", error);
      };
    } else {
      piesocket.send(formMessage());
    }
  });
};
