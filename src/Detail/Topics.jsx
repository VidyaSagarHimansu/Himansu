import Docs from './Docs/Docs';

function Topics() {
    const cards = [
        {heading: "docs.", content: [
            {topic: "📄 Resume", content: "A little about me.", link: "src/assets/Vidya Sagar Himansu Resume 0125.pdf", symbol: "far fa-file-pdf"},
            {topic: "📝 Cover Letter", content: "Letter of Interest.", link: "src/assets/Vidya Sagar Himansu Cover Letter 0125.pdf", symbol: "far fa-file-pdf"},
        ]},
        {heading: "Professional Experience", content: [
            {topic: "Trade Flown Monitoring", content: ["Built web applications using <strong>React, Redux, and RESTful APIs</strong>.", "Automated build and deployment processes using Jenkins, resulting in more frequent and reliable releases.", "Testing using JUnit and Mockito.", "Worked closely with product managers to gather requirements and deliver software solutions."], symbol: "fas fa-code"},
            {topic: "Conduit Service", content: ["Built scalable, cloud-native backend services using <strong>Java and Spring Boot</strong>, managing concurrent trade flows worth over USD 50M.", "Automated software delivery pipelines using CI/CD tools, cutting deployment lead time by 60% and maintaining high code quality.", "Implemented robust security protocols to protect sensitive trade data, ensuring compliance."], symbol: "fas fa-code"},
            {topic: "Airflow Batch Processing for reporting", content: ["Batch processing workflows using <strong>Apache Airflow</strong>, automating data pipelines and improving data processing efficiency.", "Implemented DAGs (Directed Acyclic Graphs) to schedule and monitor complex batch jobs.", "Integrated Airflow with various data sources including PostgreSQL, MongoDB to streamline ETL."], symbol: "fas fa-code"},
            {topic: "Trade Flown Downstream Processing", content: ["Robust backend services using <strong>C# and ASP.NET Core</strong>, supporting high-traffic applications.", "Integrated RESTful APIs and microservices into existing systemss, improving system modularity and maintainability.", "Automated continuous integration and deployment processes with Jenkins, reducing deployment times."], symbol: "fas fa-code"},
        ]},
        {
            heading: "School / College", content: [
                {topic: "Army Institute of Technology, Pune", content: ["B.Tech in Information Technology and Graduated in 2021"], symbol: "fas fa-graduation-cap"},
                {topic: "M.Tech", content: "Coming Soon...", symbol: "fas fa-graduation-cap"},
            ]
        }
        
    ]
    return (
        <div style={{}}>
            {cards.map((card, index) => (
                <Docs key = {index} heading={card.heading} content={card.content} link={card.link}/>
            ))}
        </div>
    )
}

export default Topics;