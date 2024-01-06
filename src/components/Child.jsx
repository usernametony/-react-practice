const Child=(props)=>{
    const {func_one}=props;
    return(
        <>
            <button onClick={()=>func_one(`Excelr`,`Fullstack`,`Training`)} >Button</button>
        </>
    )

}
export default Child;