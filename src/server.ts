var a = "hello";
let unmae:string|number;//union operator
type userid=string;
type pmtive = string|number|boolean;
// console.log(a);
function sum(a:number,b:number){
    return a+b;
}
const userbj:{name:string,age?:number,id?:userid} ={//using ? which allows optional params one can also say you can use or assign value after declaration
    name:'bhavesh'
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
let i:unknown="typescript";
console.log((i as string).length);//type casting with as
console.log((<string>i).length);//type casting with <>

const data:[number,number,string]=[90,100,"yeti"];//tupple with defined value types
console.log(data);
//a function wich does not return the value
const mymessage=():void=>{
    console.log("Hello world from typescript");
}
//any so data parameter can be of any type !!just for practice use of any is not suggestable
function anyone(data:any){
    return "Hello"+data;
}
anyone("ahmedabad");
anyone(50);
//just a normal class with defined types for data members and functions
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
//interface very useful simply define and use as type where you want
interface student{
    s_id:number,
    s_name:string
}
interface teacher{
    t_id:number,
    t_name?:string
}
//intersect operator
type intersect_type=student&teacher;
//partial demo
let pa_demo:Partial<student>={};
//required demo
let re_demo:Required<teacher>={
    t_id: 90,
    t_name:"rohan"
}
//record demo 
const nameagemapper:Record<string,number>={
    "bhavesh":22,
    "nishil":22
}
let s1:intersect_type={
    s_id:12,
    s_name:'bhavesh',
    t_id:22,
    t_name:'mahesh'
}
//omit example
const omit_demo:Omit<teacher, 't_id'|'t_name'>={
}
//pick example
const pick_demo:Pick<student, 's_id'> = {
    's_id':1901
};
//exclude example
const exclude_demo:Exclude<pmtive, 'string'>=false;

function intro(inp:string|null|undefined)
{
    if(inp)
    {
        return "hello"+inp;
    }
    else{
        return "nullable types";
    }
}
interface customer{
    b_date:Date
}
function getdata(id:number):customer|null|undefined{
    return id==0?null :{ b_date :new Date()}
}
let c1=getdata(1);
const t1obj = new Test("bhavesh","bhavnani");
//enum demo
enum size{
    small=1,medium,large
};
type Point = { x: number; y: number };
type P = keyof Point; //p is the same type of point as above with the help of keyof
let s_size:size=size.small;
let m_size:size=size.medium;
let l_size:size=size.large;
console.log("small size"+" "+s_size+"medium size"+" "+m_size+"large zie"+" "+l_size);
console.log(t1obj.fullname());
console.log(typeof t1obj);//get type printed
console.log(s1.t_name);
console.log(intro(null));
console.log(intro(undefined));
console.log(intro("homosepian"));