
export const coffee: string  = myFunc();//Java.type('com.dscsag.graalssr.ddd0interface.TestClass').getTestString() as string;

function myFunc(): string{
    try {
        //@ts-ignore
        return Java.type('com.dscsag.graalssr.ddd0interface.TestClass').getTestString() as string;
    } catch (e) {
        return "nope";
    }
}