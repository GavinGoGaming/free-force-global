import { ReactNode } from "react";

export interface Member {
    name: string;
    title: string;
    short: string;
    description: ReactNode | string;
}
const members = [
    {
        name: "Barry van Zyl",
        title: "Educator | Coach | Strategist | Drummer",
        short: "After Barry spent 21 years touring the world with South Africa’s renowned artist Johnny Clegg, and collaborating with notable musicians such as Annie Lennox, Ladysmith Black Mambazo, Peter Gabriel, and Die Antwoord, he completed an MBA at Henley Business School.",
        description: <>After Barry spent 21 years touring the world with South Africa’s renowned artist Johnny Clegg, and collaborating with notable musicians such as Annie Lennox, Ladysmith Black Mambazo, Peter Gabriel, and Die Antwoord, he completed an MBA at Henley Business School. He now focuses on executive education, specializing in personal development, entrepreneurship, and innovation. 
<br /><br />
Passionate about integrating the creative sector with executive leadership, Barry designs and delivers customized personal and team development programs for clients across various industries, including finance, telecoms, manufacturing, media, energy, and education. Barry provides tailored group training in areas such as awareness, communication, leadership, and decision-making, contributing to business growth across the USA, Canada, Europe, South America, and Asia. 
<br /><br />
Since 2017, Barry has been instrumental in expanding Henley Business School’s reach, beginning with Nigeria and extending into other regions of West and East Africa. His mission is to ‘build the people, that build the businesses, that build Africa.’ In addition to his role as an international MBA tutor and author of the academic paper “Resonance” Barry serves as the Chair of Henley’s pan-African Alumni community.</>
    },
    {
        name: "Rob Sullivan",
        title: "International Speaker, Author & Coach | Sales Trainer | Reiki Master",
        short: "Rob loves helping professionals create opportunities by being more authentic and seeing the world from the client’s perspective.",
        description: <>Rob loves helping professionals create opportunities by being more authentic and seeing the world from the client’s perspective. Demonstrating a deeper appreciation of the subtle ways we unknowingly damage our credibility and presence through word choice, tone, and body language. 
<br /><br />
        He provides 360 coaching and training from helping executives with presentation skills to doing ride-along with salespeople.  In addition, he provides the guidance and coaching to help people take the next step toward careers they find truly energizing.</>
    },
    {
        name: "Ross Parr",
        title: "Entrepreneur | Strategist | Innovator",
        short: "With over 30 years of experience in both startups and large corporations such as Oracle and Salesforce, Ross brings a wealth of expertise in executive strategy and sales processes.",
        description: <>With over 30 years of experience in both startups and large corporations such as Oracle and Salesforce, Ross brings a wealth of expertise in executive strategy and sales processes. He has aa deep passion for guiding organizations through complex challenges and opportunities, leveraging his extensive knowledge to design and implement effective sales strategies and processes. 
<br /><br />
        Renowned for his ability to deliver impactful training, Ross empowers sales teams with actionable tools and techniques that facilitate immediate, effective use in consultative selling. His approach ensures that sales professionals are not only equipped with the latest methodologies but are also adept at engaging clients in a meaningful way to drive business growth. 
        <br /><br />
        Ross’s extensive experience and 100’s of millions in sales combined with his unwavering commitment to professional development, makes him an asset for organizations looking to enhance their sales capabilities and executive strategy. Whether in a startup environment or within established corporations, his guidance helps businesses achieve tangible results and sustain long-term success.</>
    },
    {
        name: "Chris Hennes",
        title: "Technologist | Innovator",
        short: "With over 25 years of experience in innovating technology solutions and leading technology teams, Chris offers a deep expertise in developing web-based and SaaS applications across both Microsoft and open-source platforms.",
        description: <>With over 25 years of experience in innovating technology solutions and leading technology teams, Chris offers a deep expertise in developing web-based and SaaS applications across both Microsoft and open-source platforms. His skill set includes business analysis, requirements gathering, and comprehensive leadership in product, project, and team management. Chris has effectively overseen both local and remote teams, utilizing classic waterfall and Agile methodologies to achieve project success. 
<br /><br />
        Beyond his technical acumen, Chris excels in budgeting and financial forecasting, and is highly skilled in cultivating and maintaining key relationships with clients, partners, and vendors. His background also includes a strong technical sales capacity, where he applies his problem-solving abilities to navigate and resolve complex challenges efficiently.</>
    },
    {
        name: "Nate Teske",
        title: "Strategist | Sales Business Architect | Motivator",
        short: "Nate is a successful technology sales executive with three decades of experience selling into large enterprise accounts, federal and public sector agencies, telecommunications providers, manufacturers, engineering firms, and utilities.",
        description: <>Nate is a successful technology sales executive with three decades of experience selling into large enterprise accounts, federal and public sector agencies, telecommunications providers, manufacturers, engineering firms, and utilities. He has extensive experience selling Software-as-a-Service (SaaS), ERP/Enterprise Software and Support, cloud-based solutions, performance management software, conferencing solutions, and HCM/HR/Payroll services. His specialties include key account relationship management, strategic sales planning, consultative selling, business partner and team collaboration, forecast management, negotiating expertise, business development, prospecting, qualifying, and customer service. 
<br /><br />
        Nate is passionate about teaching newer sales executives how to boost revenue by implementing a repeatable sales process developed over 30 years of professional selling. His focus is on helping people build their own dream rather than someone else&#39;s, focusing on startup and early-stage technology companies. His extensive experience has provided him with valuable insights into what it takes to succeed in these types of organizations, as well as the critical lessons on what to avoid. 
        <br /><br />
        In addition to his expertise in sales, he has experience in helping new sales executives succeed, as well as in third-party ERP maintenance services, independent software support, performance management, VoIP software, OSS/BSS, Geographic Information System (GIS) solutions, SaaS solutions, discounted cash flow and property management in the commercial real estate market, and HR/Financial/Payroll services.</>
    },
    {
        name: "William Sullivan",
        title: "",
        short: "William has built a diverse and distinguished career in the legal field, showcasing a strong commitment to both practice and education.",
        description: <>William has built a diverse and distinguished career in the legal field, showcasing a strong commitment to both practice and education. Heexcels as an attorney, contract trainer, consultant, and writer. His role involves a dynamic blend of legal expertise and instructional duties, reflecting his broad experience and dedication to advancing the legal profession. 
<br /><br />
        Prior to his current role, Williams accumulated significant experience at Seyfarth at Work as a Contract Attorney Trainer, Coach, and Consultant. This position allowed him to leverage his legal acumen to mentor and guide other professionals. His ability to balance these responsibilities highlights his capacity for managing complex legal and educational functions simultaneously. 
        <br /><br />
        Williams’ career trajectory includes notable positions such as Division Administrator for Cook County Government and Elbow Clerk at the Illinois Appellate Court, First District. His tenure in these roles, spanning from 2003 to 2017, involved key responsibilities that honed his legal skills and administrative capabilities. This extensive background underscores his comprehensive understanding of the legal system and his commitment to contributing at multiple levels within the field.</>
    },
    {
        name: "Rene Rich",
        title: "",
        short: "Rene is a versatile professional with extensive experience in accounting, customer service, corporate training, and sales across various industries.",
        description: <>Rene is a versatile professional with extensive experience in accounting, customer service, corporate training, and sales across various industries. Her roles at Dun &amp; Bradstreet Software and Oracle were pivotal in developing her skills, where she assisted companies nationwide in learning and implementing complex financial software applications. These experiences allowed her to integrate her expertise across different domains, offering a comprehensive approach to client needs and software deployment. 
<br /><br />
        Her success is marked by consistently surpassing performance goals, underscoring her ability to drive revenue and build strong client relationships. Rene’s problem-solving capabilities, honed through years of customer service, enable her to identify underlying issues, craft effective solutions, and communicate efficiently to resolve challenges. Her approach to problem-solving is both methodical and proactive, ensuring that client needs are addressed with precision and care. 
        <br /><br />
        In addition to her achievements in sales and customer service, Rene’s accounting background reinforces her commitment to accuracy and detail. She excels in maintaining balance and precision in financial tasks, demonstrating a meticulous approach to ensuring that all financial elements align correctly. This blend of skills and experiences positions Rene as a well-rounded professional dedicated to delivering exceptional results and enhancing client satisfaction.</>
    },
    {
        name: "Steve Duesbury",
        title: "Executive Advisor | Digital Strategy and Transformation Expert | Musician",
        short: "Steve has a storied career helping some of the largest companies in the world imagine and create their digital futures. ",
        description: <>Steve has a storied career helping some of the largest companies in the world imagine and create their digital futures. 
<br /><br />
        He helps business leaders imagine and create their digital futures by guiding them through the complexities of digital transformation. His process begins with a thorough assessment of their current operations and long-term goals, enabling him to identify opportunities for technological advancements and strategic improvements. Steve works closely with leaders to understand their unique challenges and aspirations, ensuring that the digital strategies he develops are tailored to their specific needs and vision. 
        <br /><br />
        Once a clear and actionable vision is established, Steve focuses on developing a comprehensive digital strategy that integrates cutting-edge technologies and industry best practices. This includes designing and implementing solutions that streamline processes, enhance efficiency, and drive productivity. From adopting new software and optimizing existing systems to leveraging data analytics, Steve aims to provide scalable solutions that support both immediate needs and future growth. His goal is to ensure that the technology not only meets current demands but also positions the organization for future success.  By fostering a culture of digital innovation and continuous improvement, Steve helps leaders navigate the evolving digital landscape, empowering them to stay competitive and achieve long-term success.</>
    },
    {
        name: "James Frainey",
        title: "Sales",
        short: "With 35+ years in senior sales leadership roles Jim...",
        description: <>With 35+ years in senior sales leadership roles Jim...</>
    },
    {
        name: "Robert Andrews",
        title: "Strategist | Influencer | Visionary ",
        short: "Rick is a true visionary with a remarkable ability to translate vision into clear, workable ideas and effective action plans.",
        description: <>Rick is a true visionary with a remarkable ability to translate vision into clear, workable ideas and effective action plans. Rick has a deep understanding of business dynamics while maintaining a strong grasp of the technical context. He excels at identifying market opportunities and crafting compelling, differentiating value propositions and messaging. Rick brings immense energy and passion to his role as a marketer and entrepreneur, inspiring and motivating those around him. 
<br /><br />
        His skill in convincing, earning trust, and energizing teams drives initiatives from innovative ideas to successful implementations, consistently meeting and exceeding expectations. Whether it involves technical and commercial content creation, enthusiastic delivery, new product development, assisting sales teams in the field, or invigorating the channel, Rick consistently delivers at both tactical and strategic levels, with excellence.</>
    },
    {
        name: "Andrea Lipton",
        title: "Innovator | Creator | Mentor",
        short: "Andrea is a collaborative problem-solver who combines creativity and business acumen to drive exceptional performance at individual, team, and organizational levels.",
        description: <>Andrea is a collaborative problem-solver who combines creativity and business acumen to drive exceptional performance at individual, team, and organizational levels. By harnessing her expertise in coaching, facilitation, and communication, along with a deep passion for fostering success, she consistently identifies innovative strategies to achieve impactful results. 
<br /><br />
        Her professional skills span executive coaching, facilitation, learning strategy, instructional design, process improvement, evaluation and assessment, and competency modeling. She is adept in eLearning, learning management systems, and mobile learning tools. Beyond her extensive background in training and development, she has played a pivotal role in large-scale, global IT system implementations, including Learning Management Systems (LMS), Client Relationship Management Systems (CRM), and Human Resource Information Systems (HRIS). She also possesses a solid understanding of Agile Software Development and has foundational training in the Scrum Master role.</>
    },
    {
        name: "Tess Gouws",
        title: "Curious Designer | Strategic Facilitator | Brand Experience Architect",
        short: "At the heart of Tess’s work is a commitment to empowering individuals and organizations to forge their own path toward positive impact.",
        description: <>At the heart of Tess’s work is a commitment to empowering individuals and organizations to forge their own path toward positive impact. She is a strong advocate for the transformative power of thoughtful design as a catalyst for meaningful and enduring change. Through collaborative workshops and consultative engagements, she partners with businesses to create impactful and rewarding human experiences. 
<br /><br />
        In a landscape filled with buzzwords like Human-Centered Design, Behavioral Science, and Interaction Design, her expertise lies at the intersection of these concepts. She operates in a space where empathy meets creativity and strategic thinking intertwines with problem-solving. Her focus is on crafting solutions that are not only functional but also aesthetically pleasing and engaging. Collaborating closely with clients, she delves deep to uncover potential blind spots that may be holding the business back. Whether it involves developing a strategic roadmap for growth, fine-tuning workflows, or providing coaching to clear obstacles, she is fully committed. Her approach is not about short-term fixes or superficial solutions; instead, she is dedicated to building long-term relationships based on trust, mutual respect, and shared accountability. Her role is to offer a fresh perspective, reveal hidden opportunities, and guide clients around obstacles, helping them realize that they already possess the keys to their success.</>
    },
    {
        name: "Dave Dopeck",
        title: "Coach | Athlete | Motivator",
        short: "Passionate about guiding individuals to reach their ultimate potential Dave is the greatest sprinter in DePaul’s history, winning seven individual Great Midwest Conference Championships, and claiming multiple indoor and outdoor titles, including the 1995 NCAA National Champion for the indoor 200 meters and NCAA runner-up for the outdoor 200 meters.",
        description: <>Passionate about guiding individuals to reach their ultimate potential Dave is the greatest sprinter in DePaul’s history, winning seven individual Great Midwest Conference Championships, and claiming multiple indoor and outdoor titles, including
the 1995 NCAA National Champion for the indoor 200 meters and NCAA runner-up for the outdoor 200 meters. Dave built and managed DePaul’s Track &amp; Field and Cross-Country coaching staff for over 26 years, and he was inducted into the DePaul Athletics Hall of Fame in 2010.</>
    },
    {
        name: "Dean DeRenzis",
        title: "Implementation Specialist | Teacher",
        short: "As an implementation specialist Dean plays a crucial role in ensuring the successful deployment and integration of complex systems and solutions within an organization.",
        description: <>As an implementation specialist Dean plays a crucial role in ensuring the successful deployment and integration of complex systems and solutions within an organization. His primary responsibility is to oversee and manage the implementation process from start to finish, working closely with clients and internal teams to ensure that projects are executed efficiently and effectively. This involves understanding the specific needs of the client, customizing solutions to fit those needs, and coordinating with various stakeholders to ensure seamless integration with existing systems. 
<br /><br />
        In addition to managing the technical aspects of implementation, Dean also serves as a key point of contact for clients throughout the process providing training and support to end-users, addressing any issues or concerns that arise and ensuring that the system is fully operational and meets the client’s expectations. Their role requires strong problem-solving skills, as he must troubleshoot and resolve any technical challenges that occur during the implementation phase. 
        <br /><br />
        His focus on the development of best practices and process improvements is constantly refined based on his experiences with different projects which helps organizations maximize the value of their investments in new technologies and ensures that systems are implemented in a way that supports long-term success and growth.</>
    },
    {
        name: "Lynette Deutsch MSc",
        title: "Implementation Specialist | Teacher",
        short: "A fascination with people has always driven Lynette. Her innate curiosity and desire to challenge the status quo has characterized her inspirational 35-year career.",
        description: <>A fascination with people has always driven Lynette. Her innate curiosity and desire to challenge the status quo has characterized her inspirational 35-year career.  Lynette specialises in C-suite and board level appointments across all functions, market intelligence, and leadership and cultural development and acts as an on-hand advisor to many senior executives.
<br /><br />
        Working with such major brands as Walt Disney Company, Nokia/Vertu, Next (a relationship spanning over 18 years) Lynette focuses on people, their professional journey and how she could support them to enable them to be the best they could be, through a ‘coaching’ style approach.  For Lynette, this isn’t a ‘job’; it’s simply doing what she loves. She is the embodiment of her core values: trust, challenge, commitment and innovation.</>
    }
];
export default members;