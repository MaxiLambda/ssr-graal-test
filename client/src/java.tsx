
export const coffee: string  = myFunc();//Java.type('com.dscsag.graalssr.ddd0interface.TestClass').getTestString() as string;

function myFunc(): string{
    return "nope";
    //cant be used because it creates a delta between the ssr rendered html and the client site
    // try {
    //     //@ts-ignore
    //     return Java.type('com.dscsag.graalssr.ddd0interface.TestClass').getTestString() as string;
    // } catch (e) {
    //     return "nope";
    // }
}