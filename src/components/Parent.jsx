import Child from "./Child";
const Parent=()=>{
    const func_one=(param1,param2,param3)=>{
        console.log(param1,param2,param3);

    }
    return(
        <>
            <Child func_one={func_one}></Child>
        </>
    )

}
export default Parent;