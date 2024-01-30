var a = "hello";
let unmae:string|number
type userid=string
// console.log(a);
function sum(a:number,b:number){
    return a+b;
}
const userbj:{name:string,age?:number,id?:userid} ={
    name:'bhavesh',
}
userbj.age=22;
console.log(sum(10,20));
interface Human{
    name:string,
    networth:number,
    message():string
}
const user2:Human={
    name:"henil",
    networth:9087900,
    message(){
        return "hello";
    }
}
unmae=90;
unmae="newuser";
const data:[number,number,string]=[90,100,"yeti"]
console.log(data);
const mymessage=():void=>{
    console.log("Hello world from typescript");
}
function anyone(data:any){
    return "Hello"+data;
}
anyone("ahmedabad");
anyone(50);
class Test{
    fname:string;
    lname:string;
    constructor(fn:string,ln:string){
        this.fname=fn;
        this.lname=ln;
    }
    public fullname=():string=>{
        return this.fname+this.lname;
    }
}
const t1obj = new Test("bhavesh","bhavnani");
console.log(t1obj.fullname());
