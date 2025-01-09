function Footer(){
    return (
        <div className="fade-in" style={{display: 'flex', padding: '4vh 0px', fontSize: '14px', fontFamily: 'Questrial , sans-serif', fontWeight: '290', }}>
            <span>Copyright © {new Date().getFullYear()}. All Rights Reserved.</span>
        </div>
    )
}

export default Footer;