var Greeting;
(function (Greeting) {
    var HelloWorld = (function () {
        function HelloWorld(text) {
            this.text = text;
        }
        HelloWorld.prototype.say = function () {
            console.log(this.text);
        };
        return HelloWorld;
    })();
    Greeting.HelloWorld = HelloWorld;
})(Greeting || (Greeting = {}));
var HelloWorld = new Greeting.HelloWorld("Hello, World!");
HelloWorld.say();
//# sourceMappingURL=NewFile.js.map
