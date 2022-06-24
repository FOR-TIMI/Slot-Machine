
function getRandom(){
    return Math.floor(Math.random() * 3) 
}
class App extends React.Component{
    render(){
        
        return (
            <div>
                <h1>Slot Machines!</h1>
                <Slot
                s1 = {getRandom()}
                s2 = {getRandom()}
                s3 = {getRandom()}
                img={['https://icon-library.com/images/slot-machine-icon/slot-machine-icon-10.jpg',
                'https://icon-library.com/images/slot-machine-icon/slot-machine-icon-14.jpg',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh__VEuG0R5-PEYVxJ2mgLiwpWLV_GM6oPSA&usqp=CAU'
            ]} 
                />
                <Slot
                s1 = {getRandom()}
                s2 = {getRandom()}
                s3 = {getRandom()}
                img={['https://icon-library.com/images/slot-machine-icon/slot-machine-icon-10.jpg',
                'https://icon-library.com/images/slot-machine-icon/slot-machine-icon-14.jpg',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh__VEuG0R5-PEYVxJ2mgLiwpWLV_GM6oPSA&usqp=CAU'
            ]} 
                />
                <Slot
                s1 = {getRandom()}
                s2 = {getRandom()}
                s3 = {getRandom()}
                img={['https://icon-library.com/images/slot-machine-icon/slot-machine-icon-10.jpg',
                'https://icon-library.com/images/slot-machine-icon/slot-machine-icon-14.jpg',
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh__VEuG0R5-PEYVxJ2mgLiwpWLV_GM6oPSA&usqp=CAU'
            ]} 
                />
            </div>
      
            )
    }
}

ReactDOM.render(<App/>,document.getElementById('root'));