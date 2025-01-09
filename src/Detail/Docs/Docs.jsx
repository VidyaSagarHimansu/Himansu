import Cards from '../Cards/Cards';

function Docs(props){
    const {heading, content} = {...props}
    return (
        <div style={{paddingTop: '10vh'}}>
            <h1 style={{fontFamily: 'Questrial , sans-serif', fontWeight: '200', fontSize: '50px', }} >{heading}</h1>
            {content.map((card, index) => (
                <Cards key = {index} topic={card.topic} content={card.content} style={index%2 !== 0 ? {paddingLeft: '5vw'} : {paddingLeft: '0.4vw'}} link={card.link} symbol={card.symbol}/>
            ))}
        </div>
    )
}

export default Docs;