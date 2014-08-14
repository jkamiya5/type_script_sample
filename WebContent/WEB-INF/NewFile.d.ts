declare module Greeting {
    class HelloWorld {
        private text;
        constructor(text: string);
        public say(): void;
    }
}
declare var HelloWorld: Greeting.HelloWorld;
