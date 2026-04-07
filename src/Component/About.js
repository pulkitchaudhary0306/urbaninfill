import "./About.css";
import useScrollVisibility from "./useScrollVisibility";

function About() {
    useScrollVisibility([
        ".ui-page .ui-hero-grid",
        ".ui-page .ui-two-col",
        ".ui-page .ui-grid-3 .ui-card",
        ".ui-page .ui-dark-panel",
        ".ui-page .ui-founder-grid",
        ".ui-page .ui-quote-wrap",
        ".ui-page .ui-grid-4 .ui-card",
        ".ui-page .ui-grid-2 > *",
        ".ui-page .ui-faq-item",
        ".site-footer .site-footer__col",
    ]);

    const expertise = [
        "Corporate Office Architecture & Workplace Interiors",
        "Commercial Interior Design for Developers & Business Centres",
        "Cinema Architecture & Multiplex Planning",
        "Hospital Architecture & Medical Planning Consultancy",
        "Hospitality Architecture – Clubs, Restaurants & Banquets",
        "High-End Residential Architecture & Luxury Interiors",
    ];

    const process = [
        "Strategic Brief & Feasibility Analysis",
        "Concept Development & Space Planning",
        "Technical Detailing & Consultant Coordination",
        "Execution Support & Multi-City Project Management",
    ];

    const whyChoose = [
        "Registered Architectural Leadership",
        "Specialized in Commercial & Healthcare Architecture",
        "Multi-City Execution Experience",
        "Structured Design & Technical Expertise",
        "Regulatory & MEP Coordination Capability",
        "Scalable Project Delivery Across India",
    ];

    const faqs = [
        {
            q: "What is URBAN iNFiLL known for?",
            a: "URBAN iNFiLL is known for Pan-India architecture and commercial interior design, with expertise in corporate offices, hospitals, cinema architecture, hospitality spaces, and high-end residential projects.",
        },
        {
            q: "Where is URBAN iNFiLL headquartered?",
            a: "URBAN iNFiLL is headquartered in Gurgaon and executes projects across multiple Indian cities.",
        },
        {
            q: "Does URBAN iNFiLL work across India?",
            a: "Yes. URBAN iNFiLL has delivered projects across 20+ cities including Delhi NCR, Mumbai, Bangalore, Kolkata, Hyderabad, Lucknow, and Varanasi.",
        },
        {
            q: "Who leads URBAN iNFiLL?",
            a: "URBAN iNFiLL is led by Ar. Subhankar Sengupta, Registered Architect with the Council of Architecture, India, and a graduate of Savitribai Phule Pune University.",
        },
        {
            q: "Does URBAN iNFiLL provide healthcare planning consultancy?",
            a: "Yes. The firm specializes in hospital architecture and medical planning consultancy including OT zoning, ICU layouts, NABH coordination, clinical workflow planning, and MEP integration.",
        },
        {
            q: "Can URBAN iNFiLL handle multi-city rollouts?",
            a: "Yes. URBAN iNFiLL has strong multi-city execution capability with structured documentation, consultant coordination, and scalable delivery systems.",
        },
    ];

    return (
        <div className="ui-page">
<section className="ui-hero">
                <div className="ui-container ui-hero-grid">
                    <div>
                        <div className="ui-tag">ABOUT URBAN iNFiLL</div>
                        <h1>Pan-India Architecture & Commercial Design Practice</h1>
                        <p>
                            <b>URBAN iNFiLL</b> is a Pan-India architecture and commercial interior
                            design practice headquartered in Gurgaon, delivering corporate
                            office architecture, hospital architecture, medical planning
                            consultancy, cinema architecture, hospitality design, and
                            high-end residential projects across India.
                        </p>
                    </div>

                    <div className="ui-hero-cards">
                        <div className="ui-card-mini">
                            <span>Established</span>
                            <strong>2018</strong>
                        </div>
                        <div className="ui-card-mini">
                            <span>Project Reach</span>
                            <strong>20+ Cities</strong>
                        </div>
                        <div className="ui-card-mini">
                            <span>Focus</span>
                            <strong>Commercial, Healthcare, Hospitality & Residential</strong>
                        </div>
                    </div>
                </div>
            </section>

            <section className="ui-section">
                <div className="ui-container ui-two-col">
                    <div>
                        <p className="ui-eyebrow">Overview</p>
                        <h2>Structured, technically detailed, and execution-ready design solutions.</h2>
                    </div>

                    <div className="ui-text">
                        <p>
                            Established in 2018, the firm specializes in structured,
                            technically detailed, and execution-ready design solutions for
                            developers, corporate organizations, healthcare operators, and
                            hospitality brands.
                        </p>
                        <p>
                            With projects delivered across 20+ cities including Delhi NCR,
                            Mumbai, Bangalore, Kolkata, Hyderabad, Lucknow, and Varanasi,
                            URBAN iNFiLL has developed strong expertise in multi-city project
                            execution, regulatory coordination, and scalable commercial design
                            delivery.
                        </p>
                    </div>
                </div>
            </section>

            <section className="ui-section ui-light">
                <div className="ui-container">
                    <p className="ui-eyebrow" style={{ textAlign: "center" }}>Our Expertise in Commercial & Healthcare Architecture</p>
                    <h2 className="ui-center-heading">URBAN iNFiLL focuses on high-performance commercial
                        environments and specialized healthcare infrastructure. Our core expertise includes</h2>

                    <div className="ui-grid-3">
                        {expertise.map((item) => (
                            <div className="ui-card" key={item}>
                                <div className="ui-line" />
                                <h3>{item}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="ui-section">
                <div className="ui-container ui-dark-panel">
                    <div>
                        <p className="ui-eyebrow ui-eyebrow-light">Integrated Design Approach</p>
                        <h2>
                            Our multidisciplinary approach balances performance, compliance, and precision.
                        </h2>
                    </div>

                    <div className="ui-text ui-text-light">
                        <p>
                            Our multidisciplinary approach integrates architectural design,
                            space planning, clinical workflow optimization, MEP coordination,
                            façade strategy, statutory compliance, and turnkey documentation
                            to ensure operational efficiency and long-term performance.
                        </p>
                    </div>
                </div>
            </section>

            <section className="ui-section">
                <div className="ui-container ui-founder-grid">
                    <div className="ui-founder-card">
                        <img
                            src="/founder.webp"
                            alt="Ar. Subhankar Sengupta"
                            loading="lazy"
                            decoding="async"
                        />
                       
                        <h3>Ar. Subhankar Sengupta</h3>
                        <p>Registered Architect, Council of Architecture, India</p>
                    </div>

                    <div className="ui-text">
                        <h2 className="ui-eyebrow">Founder & Principal Architect</h2>

                        <p>
                            <b>URBAN iNFiLL</b> is led by Ar. Subhankar Sengupta, Registered
                            Architect with the Council of Architecture, India, and a graduate
                            of Savitribai Phule Pune University.
                        </p>
                        <p>
                            With extensive experience in commercial architecture, healthcare
                            planning, and large-scale interior environments, he established
                            URBAN iNFiLL with a vision to deliver structured, scalable, and
                            technically precise design solutions for India’s evolving built
                            environment.
                        </p>
                        <p>
                            As Principal Architect, he is actively involved in concept
                            development, hospital planning, workplace strategy, space
                            optimization, MEP coordination, and execution documentation,
                            ensuring each project meets regulatory standards and client
                            objectives.
                        </p>
                    </div>
                </div>
            </section>

            <section className="ui-section ui-quote-section">
                <div className="ui-container ui-quote-wrap">
                    <p className="ui-eyebrow">Founder’s Design Philosophy</p>
                    <blockquote>
                        “At URBAN iNFiLL, design is not just about form — it is about
                        performance, purpose, and precision. Every space we create must
                        function seamlessly, respond intelligently to its environment, and
                        support the long-term goals of its users.”
                    </blockquote>
                    <p className="ui-quote-author">— Ar. Subhankar Sengupta</p>
                </div>
            </section>

            <section className="ui-section">
                <div className="ui-container">
                    <p className="ui-eyebrow" style={{ textAlign: "center" }}>Our Structured Design & Delivery Approach</p>
                    <h2 className="ui-center-heading">URBAN iNFiLL follows a systematic and process-driven methodology</h2>


                    <div className="ui-grid-4">
                        {process.map((item) => (
                            <div className="ui-card" key={item}>
                                <h3>{item}</h3>
                            </div>
                        ))}

                    </div>

                </div>

            </section>

            <section className="ui-section ui-light">
                <div className="ui-container ui-two-col">
                    <div>
                        <p className="ui-eyebrow">Pan-India Project Delivery</p>
                        <h2>Reliable architecture firm for nationwide project rollouts.</h2>
                    </div>

                    <div className="ui-text">
                        <p>
                            <b>URBAN iNFiLL </b>has successfully delivered architectural and
                            commercial interior projects across major metropolitan and
                            emerging cities in India. Our multi-city execution capability
                            ensures consistency in design standards, technical documentation,
                            and on-site coordination.
                        </p>
                    </div>
                </div>
            </section>

            <section className="ui-section">
                <div className="ui-container ui-grid-2">
                    <div className="ui-box-dark">
                        <p className="ui-eyebrow ui-eyebrow-light">Vision</p>
                        <p>
                            To be a leading Pan-India architecture and commercial design
                            practice delivering high-performance, technically advanced, and
                            future-ready built environments.
                        </p>
                    </div>

                    <div className="ui-box-light">
                        <p className="ui-eyebrow">Mission</p>
                        <p>
                            To provide structured, compliant, and scalable architectural
                            solutions that align with business objectives, operational
                            efficiency, and long-term asset value.
                        </p>
                    </div>
                </div>
            </section>

            <section className="ui-section ui-light">
                <div className="ui-container">
                    <p className="ui-eyebrow">Why Choose URBAN iNFiLL</p>
                    <h2 className="ui-center-heading">Why clients choose us</h2>

                    <div className="ui-grid-3">
                        {whyChoose.map((item) => (
                            <div className="ui-card" key={item}>
                                <h3>{item}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="ui-section">
                <div className="ui-container">
                    <p className="ui-eyebrow">FAQ</p>
                    <h2 className="ui-center-heading">Frequently Asked Questions</h2>

                    <div className="ui-faq-list">
                        {faqs.map((item, index) => (
                            <details className="ui-faq-item" key={item.q} open={index === 0}>
                                <summary>{item.q}</summary>
                                <p>{item.a}</p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>
</div>
    )

}
export default About;


