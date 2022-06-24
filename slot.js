class Slot extends React.Component{
    render(){
        
        const {s1,s2,s3,img} = this.props;
    
        let msg
        if(s1 === s2 && s1 === s3){
            msg = <p>You Win!!</p>

        }
        else{
            msg = <p> Unlucky, Try again</p>
        }
        return(
            <div>
            <img src={img[s1]} width='50px'/>
            <img src={img[s2]} width='50px'/>
            <img src={img[s3]} width='50px'/>
            {msg}
            </div>

        )
    }
}