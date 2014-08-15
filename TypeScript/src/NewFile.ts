module Greeting{
    export class HelloWorld1{
        constructor(private text : string){
        }
        say() : void{
            console.log(this.text);
        }
    }
}
var HelloWorld1 : Greeting.HelloWorld1 = new Greeting.HelloWorld1("Hello, World!");
HelloWorld1.say();