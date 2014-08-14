module Greeting{
    export class HelloWorld{
        constructor(private text : string){
        }
        say() : void{
            console.log(this.text);
        }
    }
}
var HelloWorld : Greeting.HelloWorld = new Greeting.HelloWorld("Hello, World!");
HelloWorld.say();