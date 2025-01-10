import Cards from '../Cards/Cards';

function Docs(props){
    const {heading, content} = {...props}
    return (
        <div style={{paddingTop: '10vh'}}>
            <h1 style={{fontFamily: 'Questrial , sans-serif', fontWeight: '200', fontSize: '50px'}}>{heading}</h1>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '2vh 0',
                padding: '0 0.1vw',
                gridAutoRows: 'auto'
            }}>
                {content.map((card, index) => (
                    <Cards key={index} 
                          topic={card.topic} 
                          content={card.content} 
                          link={card.link} 
                          symbol={card.symbol}/>
                ))}
            </div>
        </div>
    )
}

export default Docs;