import { Accordion, AccordionDetails, AccordionGroup, AccordionSummary, Button, accordionSummaryClasses } from "@mui/joy";
import React, { ReactNode, useState } from "react";

const openIndicator = <img src={"/arrow-down.svg"} height={10} width={20} />;
const closedIndicator = <img src={"/arrow-right.svg"} width={10} height={20} />;

function NestedCourse({ left, breakdown, duration }: { left: { title: string, short: ReactNode | string, full: ReactNode | string }, breakdown: ReactNode | string, duration: ReactNode | string }) {
    const [open, setOpen] = useState(false);
    return (
        <Accordion expanded={open} onChange={(_, e) => setOpen(e)}>
            <AccordionSummary indicator={closedIndicator} sx={{ padding: '3.5vh 30px', background: `${open ? '#f0f4f8' : 'white'}` }}>
                <div className="split-course">
                    <div className="left">
                        <b>{left.title}</b>
                        {open ? <><span>{left.full} <b>Read less.</b></span></> : <><span>{left.short} <b>Read more.</b></span></>}
                    </div>
                    <div className="right">
                        <div className="split-course">
                            <div className="left">
                                <b>Class Breakdown</b>
                                {breakdown}
                            </div>
                            <div className="right">
                                <b>Duration</b>
                                {duration}
                            </div>
                        </div>
                    </div>
                </div>
            </AccordionSummary>
            <AccordionDetails>
            </AccordionDetails>
        </Accordion>
    )
}
function NestedCourses({ children }: { children: ReactNode }) {
    return (
        <AccordionGroup transition="0.2s ease"
            sx={{
                width: '100%',
                [`& .${accordionSummaryClasses.indicator}`]: {
                    transition: '0.2s',
                },
                [`& [aria-expanded="true"] .${accordionSummaryClasses.indicator}`]: {
                    transform: 'rotate(90deg)',
                },
                [`.${accordionSummaryClasses.button}`]: {
                    alignItems: 'flex-start',
                },
                [`& [aria-expanded="true"] .${accordionSummaryClasses.button}:not(.Mui-selected, [aria-selected="true"]):hover`]: {
                    background: 'transparent'
                }
            }}>
            {children}
        </AccordionGroup>
    );
}

export default function CourseSections() {
    const [catMode, setCatMode] = useState(false);
    var arrow = catMode ? "https://media1.tenor.com/m/V1F0K5Rh5rcAAAAd/huh.gif" : "/arrow-down.svg";
    var arrowHeight = catMode ? 30 : 10;
    return (
        <>
            {/* <Button onClick={() => setCatMode(!catMode)}>cat mode</Button> */}
            <AccordionGroup transition="0.2s ease" sx={{ width: '70%' }}>
                <Accordion>
                    <AccordionSummary indicator={<img src={arrow} height={arrowHeight} />}>
                        <h2 style={{ fontFamily: 'Inter' }}>Sales</h2>
                    </AccordionSummary>
                    <AccordionDetails>
                        <NestedCourses>
                            <NestedCourse left={{
                                title: "Relationship-focused Selling",
                                short: "These workshops cover both the process—what the sales team should be doing—and equally important, how they should be doing it.",
                                full: <>These workshops cover both the process—what the sales team should be doing—and equally important, how they should be doing it. This training can either integrate into an existing sales process or we can help you develop your own customized approach based on the best practices you want to see spread within the organization. Whether the goal is to inspire an existing client to partner with us on additional projects or to convince a prospect to work with us, the relationship building process is important. However, having coached sales people for more than a decade, it is clear that what separates the best sales people isn’t what they do (process) its how they do it. In other words, the key diﬀerentiator is how well people practice the Non- Negotiable proﬁciencies. With that in mind, this class explores both the business development process as well as the opportunities and pitfalls at each stage. We also pay particular attention to identifying and resolving the objections that show up at diﬀerent stages of the process.</>
                            }} breakdown={<>
                                <span><strong>Customer-facing teams:</strong> <br />Sales, Marketing, Customer Service <br /> &lt;20</span>
                            </>} duration={<>
                                <span>1, 2, or 3 days <br />(depending on focus / customization)</span>
                            </>} />
                            <NestedCourse left={{
                                title: "Coaching for Results",
                                short: "This coaching program provides managers with the tools to identify and address the root causes of the gaps impacting individual team member performance.",
                                full: <>This coaching program provides managers with the tools to identify and address the root causes of the gaps impacting individual team member performance. The focus is on understanding the mindset, motivations, and limiting beliefs of the individual performers.</>
                            }} breakdown={<>
                                <span>Managers of managers <br /><br /> Managers of customer facing teams (Sales, Customer Service, etc.) <br /><br /> &lt;15</span>
                            </>} duration={<>
                                <span></span>
                            </>} />
                            <NestedCourse left={{
                                title: "Managing Managers: Executive Coaching Immersion for Leaders & Managers",
                                short: "The art/science of coaching managers: Definitions, some theory, and then straight into simulated sessions guided by an easy-to-follow framework.",
                                full: <>The art/science of coaching managers: Definitions, some theory, and then straight into simulated sessions guided by an easy-to-follow framework.</>
                            }} breakdown={<>
                                <span>Managers of managers <br /><br /> &lt;12</span>
                            </>} duration={<>
                                <span>1/2 day - 1 day (1/2 day if they have attended Coaching for Results)</span>
                            </>} />
                            <NestedCourse left={{
                                title: "Coaching for Senior Leaders",
                                short: "ICF-aligned executive coaching sessions designed for leaders looking to overcome internal barriers and improve their leadership effectiveness.",
                                full: <>ICF-aligned executive coaching sessions designed for leaders looking to overcome internal barriers and improve their leadership effectiveness. The approach draws from a mix of solution-based coaching, somatic techniques, Gestalt methods, cognitive approaches, the "Time to Think" framework, and other methodologies. The one-to-one sessions serve as a guiding torch, helping leaders navigate internal roadblocks and rediscover the wisdom they may have forgotten. Ideal for those ready to embrace transformational growth, the coaching journey helps leaders identify and reconnect with their own knowledge and strengths, enabling them to make clear, confident decisions and lead more effectively.</>
                            }} breakdown={<>
                                <span>1:1</span>
                            </>} duration={<>
                                <span>60/90-minute sessions, with a monthly frequency</span>
                            </>} />
                            <NestedCourse left={{
                                title: "Prospecting",
                                short: "This workshop gives participants an opportunity to practice introducing themselves to prospects, positioning value, cross-selling, upselling, and getting meetings at higher levels within the prospect organization.",
                                full: <>This workshop gives participants an opportunity to practice introducing themselves to prospects, positioning value, cross-selling, upselling, and getting meetings at higher levels within the prospect organization. <br /><br />
                                    <b>Prospecting Deep Dive:</b> Getting Clients to Call You Back (Leaving effective voicemails) <br />For Sales teams of all levels - &lt;12 <br />Learn why so many people have trouble building relationships and what it takes to communicate in such a way that inspires people to WANT to talk with you. Find ways to identify and create the opportunities most people miss. <br />Sustainment session: 2-4 hours
                                    <br /><br /><b>Prospecting Deep Dive:</b> Writing Effective Emails <br />For Sales teams of all levels - &lt;12 <br />Like the Voicemail class, this session focuses on the art of writing compelling emails. <br />Sustainment session: 2-4 hours</>
                            }} breakdown={<>
                                <span>Sales teams of all levels <br /> <br /> &lt;20</span>
                            </>} duration={<>
                                <span>1 day - 2 days <br /><br />2-day provides more individual attention and is ideal for newer reps</span>
                            </>} />
                            <NestedCourse left={{
                                title: "Presentation Skills",
                                short: <><b>Sales / Non-sales</b> This workshop is often customized for sales teams who are doing client presentations. Sessions can also be run for non-sales professionals who want to improve their presentation skills either in general or for internal audiences.</>,
                                full: <><b>Sales / Non-sales</b> This workshop is often customized for sales teams who are doing client presentations. Sessions can also be run for non-sales professionals who want to improve their presentation skills either in general or for internal audiences.</>
                            }} breakdown={<>
                                <span>&lt;12</span>
                            </>} duration={<>
                                <span>2 days</span>
                            </>} />
                            <NestedCourse left={{
                                title: "Ride-along Coaching for Managers",
                                short: "By observing managers run team meetings and coach their teams, we help managers identify and address blind spots that are negatively impacting communication and results.",
                                full: <>By observing managers run team meetings and coach their teams, we help managers identify and address blind spots that are negatively impacting communication and results. For example, it wasn’t a coincidence that one company’s worst performing team was led by the manager who needed the most improvement in his communication style. This person unintentionally chipped away at his presence and credibility through his words, phrasing, and questioning strategy—and the team picked up his bad habits.</>
                            }} breakdown={<>
                                <span><strong>Managers</strong> <br /><br />1:1</span>
                            </>} duration={<>
                                <span>1 day per manager includes feedback/debrief<br /><br />Written summary follows</span>
                            </>} />
                            <NestedCourse left={{
                                title: "Ride-along Coaching for Team Members",
                                short: "By observing sales reps in real-time customer-facing situations, we are able to help in two important ways:",
                                full: <>By observing sales reps in real-time customer-facing situations, we are able to help in two important ways:<br />
                                    <ol>
                                        <li>We partner with the individuals to provide strategic insights that will help better understand the prospect and maximize the opportunity at hand</li>
                                        <li>We identify blind spots that may negatively impact communication and lead directly to missed opportunities</li>
                                    </ol><br />
                                    One of the key differentiators in what we do from a training perspective is that our involvement goes far beyond the classroom. The ride-along coaching with sales people and other customer-facing team members is one of the main ways we stay in close touch with the dynamic marketplace and the ever-evolving objections business development professionals face.</>
                            }} breakdown={<>
                                <span>Sales team members <br /><br />1:1</span>
                            </>} duration={<>
                                <span>1 day per salesperson includes feedback/debrief <br /><br />Written summary follows</span>
                            </>} />
                            <NestedCourse left={{
                                title: "Account Planning for Key Accounts",
                                short: "To be most successful, participants should identify the key account they would like to focus on ahead of time.",
                                full: <>To be most successful, participants should identify the key account they would like to focus on ahead of time.</>
                            }} breakdown={<>
                                <span>&lt;12</span>
                            </>} duration={<>
                                <span>1 day<br /><br />(longer if individuals present plans for feedback)</span>
                            </>} />
                        </NestedCourses>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary indicator={<img src={arrow} height={arrowHeight} />}>
                        <h2 style={{ fontFamily: 'Inter' }}>Leadership</h2>
                    </AccordionSummary>
                    <AccordionDetails>
                        <NestedCourses>
                            <NestedCourse left={{
                                title: "Level 1: Leadership for First-time Leaders: Navigating the Transition from Team Member to Team Leader",
                                short: "This is a workshop for recently promoted leaders and others who have not managed people before or who have not had any formal training in managing people.",
                                full: <>This is a workshop for recently promoted leaders and others who have not managed people before or who have not had any formal training in managing people.</>
                            }} breakdown={<>
                                <span></span>
                            </>} duration={<>
                                <span>2 days</span>
                            </>} />
                            <NestedCourse left={{
                                title: "Level 2: Leadership Fundementals: Objective & Expectation Setting, Feedback, Delegation, Performance Monitoring",
                                short: "This class focuses on the principles of situational leadership. Through theory and practice, leaders have an opportunity to learn from each other as they learn the strategies to inspire team members who display any conceivable combination of willingness and ability.",
                                full: <>This class focuses on the principles of situational leadership. Through theory and practice, leaders have an opportunity to learn from each other as they learn the strategies to inspire team members who display any conceivable combination of willingness and ability.Like all classes in the leadership curriculum, these sessions focus on application and practice.</>
                            }} breakdown={<>
                                <span></span>
                            </>} duration={<>
                                <span>2 days</span>
                            </>} />
                            <NestedCourse left={{
                                title: "Level 3: Situational Leadership: Leading and Managing at All Stages of Development",
                                short: "This class focuses on the principles of situational leadership. Through theory and practice, leaders have an opportunity to learn from each other as they learn the strategies to inspire team members who display any conceivable combination of willingness and ability.",
                                full: <>This class focuses on the principles of situational leadership. Through theory and practice, leaders have an opportunity to learn from each other as they learn the strategies to inspire team members who display any conceivable combination of willingness and ability.</>
                            }} breakdown={<>
                                <span></span>
                            </>} duration={<>
                                <span>2 days</span>
                            </>} />
                            <NestedCourse left={{
                                title: "Leadership Overview for Senior Leaders",
                                short: "This workshop is designed as an experiential overview for senior leaders who manage other leaders who are going through the workshop to ensure everyone is using a common language.",
                                full: <>This workshop is designed as an experiential overview for senior leaders who manage other leaders who are going through the workshop to ensure everyone is using a common language.</>
                            }} breakdown={<>
                                <span></span>
                            </>} duration={<>
                                <span>1 - 2 days</span>
                            </>} />
                            <NestedCourse left={{
                                title: "Leadership Analysis as an add-on",
                                short: "Use a simple framework to assess the leadership style and cultural (formal and informal) climate in the organization. Some theory followed by interactive group work, to spot gaps and define what needs to stop, start or change.",
                                full: <>Use a simple framework to assess the leadership style and cultural (formal and informal) climate in the organization. Some theory followed by interactive group work, to spot gaps and define what needs to stop, start or change.</>
                            }} breakdown={<>
                                <span></span>
                            </>} duration={<>
                                <span>1/2 day</span>
                            </>} />
                            <NestedCourse left={{
                                title: "Personal Strategy and Professional Development Workshop, Series of 3, or as Standalones",
                                short: "These three workshops integrate elite performance principles, neuroscience, and psychology to enhance both individual and team capabilities.",
                                full: <>These three workshops integrate elite performance principles, neuroscience, and psychology to enhance both individual and team capabilities. Our program offers a highly interactive experience, emphasising rhythm and flow to drive profound engagement and understanding. Participants will blend theoretical insights with practical, hands-on activities, ensuring a holistic grasp of concepts. <br /><b>Expected Outcomes</b><br />
                                    <ul>
                                        <li>Enhanced Self-Awareness</li>
                                        <li>Increased Creativity and Innovation</li>
                                        <li>Aligned Personal and Professional Purpose</li>
                                        <li>Expanded Perspectives</li>
                                        <li>Practical Tools for Stress Management</li>
                                    </ul><br /><br /><b>1. Personal Development and Strategic Alignment</b><br /><strong>What's Driving You?</strong>
                                    <ul>
                                        <li>Conduct a comprehensive personal inventory to identify strengths and areas for growth.</li>
                                        <li>Clarify core values and align actions with these principles.</li>
                                        <li>Utilise frameworks to uncover personal uniqueness and purpose.</li>
                                        <li>Engage in targeted activities to modify habits and drive positive change.</li>
                                    </ul><strong>Building an Agenda for Change</strong><br /><ul>
                                        <li>Develop reflective practice and sense-making skills.</li>
                                        <li>Create a strategic perspective for change and actionable planning.</li>
                                        <li>Apply structured frameworks to guide thoughtful strategic adjustments.</li>
                                        <li>Participate in activities designed to identify change areas and implement actionable plans.</li>
                                    </ul><strong>Full-day program</strong><br /><br />
                                    <b>2. Enhancing Performance, Creativity and Mindset</b><br /><strong>Strategic Resonance</strong><br />
                                    <ul>
                                        <li>Explore the interplay of time, energy, and purpose to optimise performance.</li>
                                        <li>Achieve alignment with self, team, and environment.</li>
                                        <li>Apply frameworks to demystify and build creativity and innovation.</li>
                                        <li>Examine personal chronobiology through interactive, experiential activities.</li>
                                    </ul><strong>You're As Good As Your Last Gig</strong><br />
                                    <ul>
                                        <li>Build a growth mindset and evolve personal narratives.</li>
                                        <li>Learn and apply best practices from top performers.</li>
                                        <li>Utilise frameworks to refine the art of practice and execution.</li>
                                        <li>Implement practical activities to translate insights into tangible outcomes.</li>
                                    </ul><strong>Full-day program</strong>
                                    <br /><br /><b>3. Advanced Communication and Resilience</b><br />
                                    <strong>Communication Beyond Words</strong>
                                    <ul>
                                        <li>Leverage insights into non-verbal communication and its impact.</li>
                                        <li>Address and navigate challenging conversations and conflicts.</li>
                                        <li>Apply advanced coaching frameworks.</li>
                                        <li>Engage in listening exercises to enhance empathy and open-mindedness.</li>
                                    </ul>
                                    <strong>Resilience and Sustainable Performance</strong>
                                    <ul>
                                        <li>Focus on holistic wellness and well-being strategies.</li>
                                        <li>Utilise tools to manage and mitigate burnout and overwhelm.</li>
                                        <li>Apply frameworks for achieving a balanced and sustainable performance.</li>
                                        <li>Participate in activities designed to overcome personal and professional obstacles.</li>
                                    </ul>
                                    <strong>Full-day program</strong>
                                </>
                            }} breakdown={<>
                                <span></span>
                            </>} duration={<>
                                <span></span>
                            </>} />
                        </NestedCourses>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary indicator={<img src={arrow} height={arrowHeight} />}>
                        <h2 style={{ fontFamily: 'Inter' }}>Communication / Soft Skills</h2>
                    </AccordionSummary>
                    <AccordionDetails sx={{ textAlign: 'left' }}>
                        <i>Under ideal circumstances, the team will be introduced to the importance of understanding and developing the Non-Negotiable Proficiencies as they are what we at Free-Force Global see as the most important differentiators in professional development. We divide the NNPs into three broad, often overlapping categories: Power, Pulse and Perspective.</i>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary indicator={<img src={arrow} height={arrowHeight} />}>
                        <h2 style={{ fontFamily: 'Inter' }}>Power / Pulse / Perspective</h2>
                    </AccordionSummary>
                    <AccordionDetails sx={{ textAlign: 'left' }}>
                        <NestedCourses>
                            <NestedCourse left={{
                                title: "The Non-Negotiable Proficiencies (NNP)",
                                short: "This program covers the Non-negotiable Proﬁciencies required for success. These skills are the foundation upon which the curriculum is based.",
                                full: <>This program covers the Non-negotiable Proﬁciencies required for success. These skills are the foundation upon which the curriculum is based. The Non-negotiable Proﬁciencies form the heart of the three master categories on which we focus: Power, Pulse & Perspective. When these proﬁciencies are nurtured and developed, the eﬀect is exponential rather than arithmetic. These core concepts will be brieﬂy reviewed in subsequent sessions to show how they relate to the topic at hand. The conﬁdence, comfort, and credibility behind professional presence remains the same, but the ways we unintentionally sabotage our eﬀorts in this area are diﬀerent as leaders, as customer-facing advisors, and in public speaking. This class also covers the Inhibitor Behaviors that are blind spots for many people.</>
                            }} breakdown={<>
                                <span></span>
                            </>} duration={<>
                                <span></span>
                            </>} />
                            <NestedCourse left={{
                                title: "Putting It All Together",
                                short: "This session dovetails with the positioning and storytelling skills required for identifying problems/opportunities, action plans, and persuasively and clearly presenting ideas.",
                                full: <>This session dovetails with the positioning and storytelling skills required for identifying problems/opportunities, action plans, and persuasively and clearly presenting ideas. It also draws upon the lessons and skills covered in the business improv module. Employing divergent [non-judgmental] and convergent [hyper-analytical] processes. Using micro and macro lenses to identify controllable and uncontrollable forces. Analyzing and synthesizing the multi-level cycles and factors that impact the perspective of industries, companies, and individuals. Viewing opportunities and challenges through these lenses maximizes our strategic abilities to position ourselves in the most powerful manner.</>
                            }} breakdown={<>
                                <span>Open <br /><br />&lt;20</span>
                            </>} duration={<>
                                <span>1 day</span>
                            </>} />
                        </NestedCourses>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary indicator={<img src={arrow} height={arrowHeight} />}>
                        <h2 style={{ fontFamily: 'Inter' }}>Power / Perspective</h2>
                    </AccordionSummary>
                    <AccordionDetails>
                        <NestedCourses>
                            <NestedCourse left={{
                                title: "",
                                short: "",
                                full: <></>
                            }} breakdown={<>
                                <span></span>
                            </>} duration={<>
                                <span></span>
                            </>} />
                            <NestedCourse left={{
                                title: "",
                                short: "",
                                full: <></>
                            }} breakdown={<>
                                <span></span>
                            </>} duration={<>
                                <span></span>
                            </>} />
                            <NestedCourse left={{
                                title: "",
                                short: "",
                                full: <></>
                            }} breakdown={<>
                                <span></span>
                            </>} duration={<>
                                <span></span>
                            </>} />
                            <NestedCourse left={{
                                title: "",
                                short: "",
                                full: <></>
                            }} breakdown={<>
                                <span></span>
                            </>} duration={<>
                                <span></span>
                            </>} />
                            <NestedCourse left={{
                                title: "",
                                short: "",
                                full: <></>
                            }} breakdown={<>
                                <span></span>
                            </>} duration={<>
                                <span></span>
                            </>} />
                            <NestedCourse left={{
                                title: "",
                                short: "",
                                full: <></>
                            }} breakdown={<>
                                <span></span>
                            </>} duration={<>
                                <span></span>
                            </>} />
                            <NestedCourse left={{
                                title: "",
                                short: "",
                                full: <></>
                            }} breakdown={<>
                                <span></span>
                            </>} duration={<>
                                <span></span>
                            </>} />
                        </NestedCourses>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary indicator={<img src={arrow} height={arrowHeight} />}>
                        <h2 style={{ fontFamily: 'Inter' }}>Power</h2>
                    </AccordionSummary>
                    <AccordionDetails>
                        <NestedCourses>
                            <NestedCourse left={{
                                title: "",
                                short: "",
                                full: <></>
                            }} breakdown={<>
                                <span></span>
                            </>} duration={<>
                                <span></span>
                            </>} />
                            <NestedCourse left={{
                                title: "",
                                short: "",
                                full: <></>
                            }} breakdown={<>
                                <span></span>
                            </>} duration={<>
                                <span></span>
                            </>} />
                            <NestedCourse left={{
                                title: "",
                                short: "",
                                full: <></>
                            }} breakdown={<>
                                <span></span>
                            </>} duration={<>
                                <span></span>
                            </>} />
                            <NestedCourse left={{
                                title: "",
                                short: "",
                                full: <></>
                            }} breakdown={<>
                                <span></span>
                            </>} duration={<>
                                <span></span>
                            </>} />
                            <NestedCourse left={{
                                title: "",
                                short: "",
                                full: <></>
                            }} breakdown={<>
                                <span></span>
                            </>} duration={<>
                                <span></span>
                            </>} />
                        </NestedCourses>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary indicator={<img src={arrow} height={arrowHeight} />}>
                        <h2 style={{ fontFamily: 'Inter' }}>Pulse</h2>
                    </AccordionSummary>
                    <AccordionDetails>
                        <NestedCourses>
                            <NestedCourse left={{
                                title: "",
                                short: "",
                                full: <></>
                            }} breakdown={<>
                                <span></span>
                            </>} duration={<>
                                <span></span>
                            </>} />
                            <NestedCourse left={{
                                title: "",
                                short: "",
                                full: <></>
                            }} breakdown={<>
                                <span></span>
                            </>} duration={<>
                                <span></span>
                            </>} />
                            <NestedCourse left={{
                                title: "",
                                short: "",
                                full: <></>
                            }} breakdown={<>
                                <span></span>
                            </>} duration={<>
                                <span></span>
                            </>} />
                        </NestedCourses>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary indicator={<img src={arrow} height={arrowHeight} />}>
                        <h2 style={{ fontFamily: 'Inter' }}>Perspective</h2>
                    </AccordionSummary>
                    <AccordionDetails>
                        <NestedCourses>
                            <NestedCourse left={{
                                title: "",
                                short: "",
                                full: <></>
                            }} breakdown={<>
                                <span></span>
                            </>} duration={<>
                                <span></span>
                            </>} />
                            <NestedCourse left={{
                                title: "",
                                short: "",
                                full: <></>
                            }} breakdown={<>
                                <span></span>
                            </>} duration={<>
                                <span></span>
                            </>} />
                            <NestedCourse left={{
                                title: "",
                                short: "",
                                full: <></>
                            }} breakdown={<>
                                <span></span>
                            </>} duration={<>
                                <span></span>
                            </>} />
                        </NestedCourses>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary indicator={<img src={arrow} height={arrowHeight} />}>
                        <h2 style={{ fontFamily: 'Inter' }}>Recruiting & Team Development</h2>
                    </AccordionSummary>
                    <AccordionDetails>
                        <NestedCourses>
                            <NestedCourse left={{
                                title: "",
                                short: "",
                                full: <></>
                            }} breakdown={<>
                                <span></span>
                            </>} duration={<>
                                <span></span>
                            </>} />
                            <NestedCourse left={{
                                title: "",
                                short: "",
                                full: <></>
                            }} breakdown={<>
                                <span></span>
                            </>} duration={<>
                                <span></span>
                            </>} />
                        </NestedCourses>
                    </AccordionDetails>
                </Accordion>
            </AccordionGroup>
        </>
    )
}