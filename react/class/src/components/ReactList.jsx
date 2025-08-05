function ReactList(){
    const cars =["BMW","LMS","nissan","cls"]
return<>
<ul>
    {cars.map((car,index)=>(
        <li key={index}>{car} </li>
    ))}
</ul>

</>
}
export default ReactList