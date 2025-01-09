import './Cards.css'

function Cards(props){
    const {topic, content, style, link, symbol} = {...props}
    return (
        <div className='card' style={{display: 'inline-block', width: '43%', ...style}}>
                
                <a href={link} target='_blank'>
                    <section>
                        <h3 style={{fontFamily: 'Questrial , sans-serif', fontWeight: '290', fontSize: '24px', }}>{topic}</h3>
                        {typeof content === 'string' ? (
                            <p dangerouslySetInnerHTML={{ __html: content }}></p>
                        ) : (
                                content.map((item, index) => (
                                    <li key={index} style={{padding: '0.5vh 0px'}} 
                                        dangerouslySetInnerHTML={{ __html: item }}>
                                    </li>
                                ))
                        )}                        
                        
                        {symbol && <div style={{display: 'flex', justifyContent: 'space-between', paddingTop: '2vh'}}>
                            <i className={symbol} style={{color: 'black'}}></i>
                        </div> } 
                    </section>                   
                </a>                        
        </div>
    )
}

export default Cards;