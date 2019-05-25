      // client code here
      var socket = io.connect('127.0.0.1:8443');
      socket.on('test', function(message) {
      console.log(message)
        document.getElementById("message").innerHTML = message;
      });