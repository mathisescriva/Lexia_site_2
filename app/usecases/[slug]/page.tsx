import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { UseCasePageContent } from "./UseCasePageContent"

type UseCaseCategory = "productivity" | "customer-service" | "analytics" | "quality"

const useCases = [
  {
    id: "voice-activated-crm",
    title: "Voice-Activated CRM",
    category: "productivity" as UseCaseCategory,
    description: "Integrate speech commands into customer relationship management systems, enabling hands-free data entry and retrieval.",
    longDescription: "Transform your customer relationship management with voice-activated commands. Our speech technology seamlessly integrates with your existing CRM systems, allowing sales teams to update records, search contacts, and log interactions using natural voice commands. Reduce data entry time by up to 60% while improving accuracy and enabling field teams to stay productive on the go.",
    detailedContent: [
      "Voice-activated CRM systems represent a paradigm shift in how sales and customer service teams interact with customer relationship management platforms. Traditional keyboard-and-mouse interfaces create friction that reduces productivity, especially for mobile sales teams and field representatives who need to document interactions quickly during or immediately after customer meetings.",
      "Our solution leverages advanced natural language understanding (NLU) technology to interpret voice commands accurately. When a sales representative says 'Log a call with John Smith from Acme Corp, discussed pricing for enterprise package, follow up next Tuesday,' the system automatically extracts entities (contact name, company, topic, action item, deadline) and updates the CRM accordingly. This eliminates the manual data entry bottleneck that currently consumes 40-60% of sales representatives' time.",
      "The technical architecture integrates seamlessly with major CRM platforms including Salesforce, HubSpot, Microsoft Dynamics, and custom solutions. Our API layer handles authentication, data transformation, and error handling, while our NLU engine processes voice input and maps it to CRM operations. The system maintains context throughout conversations, enabling natural follow-up queries like 'Update his contract status' when viewing a contact's record.",
      "Security and privacy are paramount in enterprise CRM deployments. All voice data is encrypted in transit and at rest, with role-based access controls ensuring that users can only access and modify data appropriate to their permissions. Audit logging captures all voice commands and resulting actions for compliance and troubleshooting.",
      "The return on investment is compelling. Sales teams report 60-70% reduction in data entry time, enabling them to focus on relationship-building and closing deals. Data accuracy improves significantly as voice input eliminates transcription errors from manual typing. Field sales teams particularly benefit, as they can document interactions hands-free while driving or in situations where typing is impractical.",
      "Advanced features include voice search across CRM data, automated sentiment analysis of customer interactions, and intelligent suggestions based on conversation context. The system learns from usage patterns, improving accuracy over time and adapting to individual sales representatives' speaking styles and terminology.",
    ],
    image: "/logos/image_illustration1.png",
    features: [
      "Hands-free data entry and retrieval",
      "Natural language voice commands",
      "Real-time synchronization with CRM systems",
      "Multi-language support",
      "Secure enterprise-grade integration",
      "Voice search capabilities",
      "Automated sentiment analysis",
      "Context-aware conversations"
    ],
    benefits: [
      "Increase sales team productivity by 60-70%",
      "Reduce data entry errors significantly",
      "Enable mobile workforce efficiency",
      "Improve customer interaction quality",
      "Accelerate sales cycle with faster documentation",
      "Enhance data completeness and accuracy"
    ],
    useCases: [
      "Field sales representatives documenting customer meetings",
      "Inside sales teams logging phone call outcomes",
      "Customer service agents updating case records",
      "Sales managers generating activity reports via voice",
      "Support teams searching knowledge bases hands-free"
    ],
    stats: [
      { label: "Time Saved", value: "60-70%", icon: "zap" },
      { label: "Accuracy Improvement", value: "85%+", icon: "trending-up" },
      { label: "User Adoption", value: "90%+", icon: "users" },
    ]
  },
  {
    id: "automated-call-transcription",
    title: "Automated Call Transcription",
    category: "customer-service" as UseCaseCategory,
    description: "Real-time transcription and analysis of customer service calls, automatically populating enterprise systems with structured data.",
    longDescription: "Revolutionize your customer service operations with real-time call transcription and intelligent analysis. Our advanced speech recognition technology captures every conversation with high accuracy, automatically extracting key information and populating your enterprise systems. Transform unstructured voice data into actionable insights, enabling better customer service, compliance tracking, and business intelligence.",
    detailedContent: [
      "Automated call transcription has become essential for modern customer service operations, enabling comprehensive documentation, quality assurance, and analytics. Our solution processes phone-quality audio in real-time, achieving word error rates below 8-12% on typical call center audio—significantly better than general-purpose models.",
      "Real-time processing enables immediate benefits during live calls. Supervisors can monitor conversations in real-time, providing instant coaching and ensuring quality standards are met. Sentiment analysis flags calls that may need escalation, allowing proactive intervention before issues escalate. Agents receive live feedback and suggestions based on conversation patterns.",
      "The automatic data extraction capability transforms transcriptions into structured information. Named entity recognition identifies customer names, account numbers, order IDs, product mentions, and issue types. Sentiment analysis tracks emotional tone throughout the call, from initial greeting through resolution. Topic modeling categorizes conversations, enabling automated routing and analytics.",
      "Integration with customer service platforms creates seamless workflows. When a customer mentions an issue, the system automatically creates support tickets with relevant details extracted from the transcription. Knowledge base articles are suggested based on discussed topics. Customer profiles are updated in real-time, providing agents with complete context for future interactions.",
      "Quality assurance becomes significantly easier with comprehensive call documentation. Every interaction is transcribed, analyzed, and scored for quality metrics including compliance with scripts, identification of upsell opportunities, and adherence to company policies. Automated flagging brings problematic calls to supervisor attention immediately, enabling rapid intervention and coaching.",
      "Analytics and insights derived from transcribed calls provide unprecedented visibility into customer interactions. Natural language processing techniques extract themes, pain points, and customer feedback at scale. Trend analysis identifies emerging issues before they become widespread problems. Competitive mentions help understand market positioning and customer preferences.",
    ],
    image: "/logos/image_illustration2.png",
    features: [
      "Real-time transcription with high accuracy",
      "Automatic data extraction and structuring",
      "Sentiment analysis and key topic detection",
      "Integration with CRM and ticketing systems",
      "Compliance and quality assurance tools",
      "Speaker diarization (agent/customer separation)",
      "Automated ticket creation",
      "Live coaching and feedback"
    ],
    benefits: [
      "Improve customer service quality",
      "Enable data-driven decision making",
      "Ensure regulatory compliance",
      "Reduce manual documentation time by 80%",
      "Identify training opportunities automatically",
      "Enhance customer satisfaction through better insights"
    ],
    useCases: [
      "Call center quality monitoring and coaching",
      "Customer support ticket automation",
      "Regulatory compliance documentation",
      "Customer feedback analysis at scale",
      "Training program development from call data"
    ],
    stats: [
      { label: "Documentation Time Saved", value: "80%", icon: "zap" },
      { label: "Transcription Accuracy", value: "92%+", icon: "trending-up" },
      { label: "Quality Score Improvement", value: "35%+", icon: "shield" },
    ]
  },
  {
    id: "meeting-intelligence",
    title: "Meeting Intelligence",
    category: "productivity" as UseCaseCategory,
    description: "Transform meetings into actionable insights by integrating speech recognition with project management and documentation systems.",
    longDescription: "Turn every meeting into a valuable asset with intelligent speech recognition and analysis. Our technology captures meeting discussions, identifies action items, assigns tasks, and automatically updates your project management tools. Eliminate the need for manual note-taking while ensuring nothing important is missed. Transform meeting outcomes into immediate productivity gains.",
    detailedContent: [
      "Meeting intelligence systems combine speech recognition, natural language processing, and project management integration to transform meeting audio into actionable project data. The technical complexity involves accurate multi-speaker transcription, action item extraction, decision tracking, and automatic task creation—all operating in real-time during live meetings or on recorded audio.",
      "Multi-speaker transcription requires sophisticated speaker diarization that can handle overlapping speech, varying audio quality, and participants joining or leaving mid-meeting. Our diarization pipeline uses spectral clustering on speaker embeddings, achieving 90%+ speaker identification accuracy even in challenging scenarios with background noise or poor microphone quality.",
      "Action item extraction identifies tasks, owners, and deadlines from natural conversation. When a participant says 'John will follow up by Friday' or 'We need to finalize the contract before next week,' the system extracts the action item, assigns it to the appropriate person based on speaker identification, and creates tasks in project management platforms like Jira, Asana, or Monday.com.",
      "Decision tracking captures key decisions made during meetings. The system identifies decision statements like 'We've decided to...' or 'The consensus is...', extracts the decision content, and documents it automatically. Decisions are logged in meeting summaries and can trigger notifications to stakeholders or updates to project documentation.",
      "Meeting summarization provides concise overviews of long meetings. Our approach uses extractive techniques combined with abstractive methods, prioritizing sentences containing action items, decisions, deadlines, and important technical details. Summaries are structured with sections for key decisions, action items, and discussion highlights.",
      "Integration with project management tools enables automatic task creation and updates. Action items become tasks with appropriate assignees, due dates extracted from temporal expressions, and context from surrounding discussion. This eliminates the manual step of creating tasks after meetings, ensuring nothing falls through the cracks.",
    ],
    image: "/logos/image_illustration3.png",
    features: [
      "Automatic meeting transcription",
      "Action item identification and extraction",
      "Integration with project management tools",
      "Speaker identification and attribution",
      "Meeting summaries and insights generation",
      "Decision tracking and documentation",
      "Real-time transcription during live meetings",
      "Searchable meeting archives"
    ],
    benefits: [
      "Eliminate manual note-taking",
      "Improve meeting follow-through",
      "Enhance team collaboration",
      "Create searchable meeting archives",
      "Ensure accountability with automatic task creation",
      "Reduce time spent in meetings through better documentation"
    ],
    useCases: [
      "Team meetings with automatic action item tracking",
      "Client meetings with comprehensive documentation",
      "Project kickoff meetings with task creation",
      "Board meetings with decision documentation",
      "Training sessions with searchable content"
    ],
    stats: [
      { label: "Note-Taking Time Saved", value: "100%", icon: "zap" },
      { label: "Action Item Completion", value: "95%+", icon: "trending-up" },
      { label: "Meeting Efficiency", value: "40%+", icon: "users" },
    ]
  },
  {
    id: "voice-powered-analytics",
    title: "Voice-Powered Analytics",
    category: "analytics" as UseCaseCategory,
    description: "Enable voice-driven data exploration and reporting, allowing business users to query analytics systems using natural language.",
    longDescription: "Democratize data access with voice-powered analytics. Business users can now interact with complex analytics systems using natural language queries, eliminating the need for technical expertise. Ask questions in plain English and receive instant insights, reports, and visualizations. Transform how your organization interacts with data, making analytics accessible to everyone.",
    detailedContent: [
      "Voice-powered analytics democratizes data access by enabling natural language interaction with complex analytics systems. Business users can query databases, generate reports, and explore data using conversational language, eliminating the need for SQL knowledge or technical expertise. This transforms analytics from a specialized skill into an accessible capability for all employees.",
      "Natural language understanding (NLU) technology translates conversational queries into database queries. When a user asks 'Show me sales by region for the last quarter,' the system understands intent, identifies relevant data sources, constructs appropriate queries, and presents results in a clear format. Advanced NLU handles complex queries including comparisons, aggregations, and temporal references.",
      "The system integrates with multiple data sources including data warehouses, CRM systems, ERP platforms, and custom databases. It maintains a semantic understanding of your data schema, enabling queries like 'Which customers have the highest lifetime value?' even when that metric is calculated across multiple tables. Schema mapping ensures queries are translated correctly regardless of underlying data structure.",
      "Voice-driven report generation creates formatted reports from spoken requests. Users can say 'Create a monthly sales report with charts' and receive a complete document with data, visualizations, and insights. The system formats reports according to company templates and distributes them automatically to relevant stakeholders.",
      "Conversational analytics enables iterative exploration. Users can refine queries naturally: 'Show me that again but just for Europe' or 'What about last year?' The system maintains conversation context, understanding references to previous queries and building on them. This creates a natural dialogue with data, similar to talking to a data analyst.",
      "Security and access control ensure users only access data appropriate to their role. Permissions are enforced at the query level, preventing unauthorized data access while enabling self-service analytics within appropriate boundaries. Audit logging tracks all queries and data access for compliance and security monitoring.",
    ],
    image: "/logos/image_illustration1.png",
    features: [
      "Natural language data queries",
      "Voice-driven report generation",
      "Real-time analytics insights",
      "Multi-database integration",
      "Conversational data exploration",
      "Automatic visualization generation",
      "Schema understanding and mapping",
      "Role-based access control"
    ],
    benefits: [
      "Make analytics accessible to all users",
      "Reduce time to insights",
      "Enable faster decision making",
      "Increase data-driven culture",
      "Eliminate dependency on data analysts for basic queries",
      "Improve data literacy across organization"
    ],
    useCases: [
      "Executive dashboards with voice queries",
      "Sales teams exploring performance data",
      "Marketing teams analyzing campaign results",
      "Operations teams monitoring KPIs",
      "Financial analysts querying financial data"
    ],
    stats: [
      { label: "Query Time Reduction", value: "75%", icon: "zap" },
      { label: "User Adoption", value: "85%+", icon: "users" },
      { label: "Insight Speed", value: "90%+", icon: "trending-up" },
    ]
  },
  {
    id: "intelligent-voice-assistant",
    title: "Intelligent Voice Assistant",
    category: "productivity" as UseCaseCategory,
    description: "Deploy enterprise-grade voice assistants that understand context and integrate seamlessly with your business systems.",
    longDescription: "Deploy intelligent voice assistants that truly understand your business context. Our technology creates voice assistants that integrate deeply with your enterprise systems, understanding your workflows, terminology, and business processes. From scheduling meetings to generating reports, these assistants become valuable team members that enhance productivity across your organization.",
    detailedContent: [
      "Enterprise voice assistants go far beyond consumer voice assistants by understanding business context, terminology, and workflows. Our technology creates assistants that integrate deeply with enterprise systems, enabling them to perform complex business operations through natural conversation. Unlike generic assistants, these solutions understand your specific industry, company processes, and user needs.",
      "Context awareness is critical for practical enterprise assistants. The system maintains understanding of current user context: active projects, recent interactions, calendar events, and workflow state. This enables natural references like 'Schedule a follow-up meeting with that client' when viewing a contact, or 'Add this to my to-do list' referring to a task just mentioned in conversation.",
      "Integration with enterprise systems enables assistants to perform real business operations. They can schedule meetings by checking calendars across multiple systems, create tasks in project management tools, generate reports from business intelligence platforms, and update records in CRM systems. All actions are performed through secure, authenticated APIs with proper access controls.",
      "Customization enables assistants to match your specific business needs. They can be configured with industry-specific terminology, company workflows, and business rules. For example, a healthcare assistant understands medical terminology and can schedule patient appointments, while a legal assistant understands case management workflows and can retrieve case documents.",
      "Multi-modal interaction enables assistants to work across different interfaces. Users can interact via voice during calls or meetings, through text in chat applications, or via voice commands on mobile devices. The assistant maintains consistency across all interfaces, remembering context and preferences regardless of interaction method.",
      "Continuous learning ensures assistants improve over time. They learn from user interactions, adapting to individual speaking styles, preferences, and workflows. Feedback mechanisms allow users to correct misunderstandings, which the system uses to improve accuracy. This creates a virtuous cycle where assistants become more valuable as they're used more.",
    ],
    image: "/logos/image_illustration2.png",
    features: [
      "Context-aware conversations",
      "Deep enterprise system integration",
      "Customizable business logic",
      "Multi-modal interactions",
      "Continuous learning and improvement",
      "Multi-language support",
      "Secure authentication and authorization",
      "Audit logging and compliance"
    ],
    benefits: [
      "Enhance employee productivity",
      "Reduce repetitive tasks",
      "Improve user experience",
      "Scale support operations",
      "Enable 24/7 availability",
      "Consistent service quality"
    ],
    useCases: [
      "Executive assistants for scheduling and task management",
      "Help desk assistants for IT support",
      "HR assistants for employee inquiries",
      "Customer service assistants for first-line support",
      "Department-specific assistants for specialized workflows"
    ],
    stats: [
      { label: "Task Automation", value: "70%+", icon: "zap" },
      { label: "Response Time", value: "<2s", icon: "trending-up" },
      { label: "User Satisfaction", value: "92%+", icon: "users" },
    ]
  },
  {
    id: "voice-quality-assurance",
    title: "Voice Quality Assurance",
    category: "quality" as UseCaseCategory,
    description: "Automated quality monitoring and analysis of voice interactions to ensure consistent service delivery and compliance.",
    longDescription: "Ensure consistent quality across all voice interactions with automated monitoring and analysis. Our technology continuously evaluates customer interactions, identifying quality issues, compliance risks, and training opportunities. Provide real-time feedback to agents, ensure regulatory compliance, and maintain high service standards across all touchpoints.",
    detailedContent: [
      "Voice quality assurance systems automatically monitor and evaluate customer interactions to ensure consistent service delivery, regulatory compliance, and continuous improvement. Our technology analyzes every interaction using multiple metrics including script adherence, sentiment analysis, compliance checks, and customer satisfaction indicators.",
      "Real-time monitoring enables immediate intervention when quality issues are detected. The system flags interactions that deviate from quality standards, enabling supervisors to provide instant coaching or take over calls when necessary. Proactive quality management prevents issues from escalating and ensures consistent customer experience.",
      "Automated scoring evaluates interactions across multiple dimensions. Compliance scoring checks for required disclosures, proper handling of sensitive information, and adherence to regulatory requirements. Quality scoring evaluates script adherence, professionalism, problem-solving effectiveness, and customer interaction quality. Sentiment analysis tracks emotional tone throughout interactions.",
      "Training recommendations identify areas where agents need improvement. The system analyzes patterns across multiple interactions to identify specific skills gaps, such as upselling techniques, handling objections, or technical knowledge. Personalized training programs can be automatically generated based on these insights.",
      "Compliance monitoring ensures regulatory requirements are met. The system automatically checks for required disclosures (like GDPR consent, financial disclaimers), proper handling of sensitive data (like payment information), and adherence to industry-specific regulations (like HIPAA in healthcare). Non-compliant interactions are flagged for review and remediation.",
      "Comprehensive dashboards provide visibility into quality metrics across teams, departments, and time periods. Managers can identify trends, compare performance, and make data-driven decisions about training, process improvements, and resource allocation. Quality trends help predict issues before they impact customer satisfaction.",
    ],
    image: "/logos/image_illustration3.png",
    features: [
      "Automated quality scoring",
      "Real-time compliance monitoring",
      "Sentiment and emotion analysis",
      "Automated coaching recommendations",
      "Comprehensive quality dashboards",
      "Customizable quality criteria",
      "Automated report generation",
      "Integration with training platforms"
    ],
    benefits: [
      "Maintain consistent service quality",
      "Ensure regulatory compliance",
      "Identify training opportunities",
      "Improve customer satisfaction",
      "Reduce compliance risks",
      "Enable data-driven quality management"
    ],
    useCases: [
      "Call center quality monitoring",
      "Regulatory compliance assurance",
      "Agent training and development",
      "Customer satisfaction improvement",
      "Performance benchmarking"
    ],
    stats: [
      { label: "Quality Consistency", value: "98%+", icon: "shield" },
      { label: "Compliance Rate", value: "99%+", icon: "trending-up" },
      { label: "Training Effectiveness", value: "60%+", icon: "users" },
    ]
  },
]

export async function generateStaticParams() {
  return useCases.map((useCase) => ({
    slug: useCase.id,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const useCase = useCases.find((uc) => uc.id === params.slug)
  
  if (!useCase) {
    return {
      title: "Use Case Not Found | Lexia",
    }
  }

  return {
    title: `${useCase.title} | Lexia Use Cases`,
    description: useCase.description,
    openGraph: {
      title: useCase.title,
      description: useCase.description,
      type: "article",
    },
    alternates: {
      canonical: `https://www.lexiapro.fr/usecases/${useCase.id}`,
    },
  }
}

export default function UseCasePage({ params }: { params: { slug: string } }) {
  const useCase = useCases.find((uc) => uc.id === params.slug)

  if (!useCase) {
    notFound()
  }

  return <UseCasePageContent useCase={useCase} />
}
