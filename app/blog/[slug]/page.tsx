import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ScrollAnimation } from "@/components/ScrollAnimation"
import { Calendar, Clock, ArrowLeft, User, Share2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// Extended blog posts with full technical content
const blogPosts: Array<{
  id: number
  title: string
  excerpt: string
  content: string[]
  author: string
  date: string
  readTime: string
  category: string
  image: string
  featured: boolean
  slug: string
  keywords?: string[]
}> = [
  {
    id: 1,
    title: "The Future of Speech Technology in Enterprise: How AI Innovations Transform Business Operations",
    excerpt: "Exploring how speech recognition technology is transforming enterprise workflows and revolutionizing the way businesses interact with their systems through voice-activated solutions.",
    content: [
      "The landscape of enterprise speech technology has undergone a revolutionary transformation over the past decade. What began as simple voice-to-text transcription has evolved into sophisticated neural architectures capable of understanding context, intent, and even emotional nuance. Modern transformer-based models, particularly those leveraging attention mechanisms, have achieved word error rates (WER) below 5% in controlled environments, rivaling human transcription accuracy.",
      "At Lexia, we've dedicated significant research to understanding how these advances translate to real-world enterprise scenarios. Our work with Whisper-based architectures and fine-tuned variants has shown that domain-specific adaptation can reduce WER by an additional 2-3 percentage points when dealing with technical terminology, industry jargon, and multilingual scenarios. This improvement might seem marginal, but in production environments processing thousands of hours of audio daily, it translates to substantially reduced manual correction overhead.",
      "The technical architecture underlying modern speech recognition systems involves several critical components: acoustic models that map audio features to phonemes, language models that predict word sequences, and increasingly sophisticated decoder networks. Modern end-to-end approaches, particularly Connectionist Temporal Classification (CTC) and sequence-to-sequence models with attention, have eliminated the need for forced alignment and reduced computational overhead significantly.",
      "One of the most significant breakthroughs has been the integration of pre-trained large language models (LLMs) into the speech recognition pipeline. By fine-tuning models like BERT or GPT variants on transcribed speech data, we can improve contextual understanding dramatically. This is particularly valuable in enterprise settings where domain-specific vocabulary and conversational context are critical for accuracy.",
      "The practical implications for enterprises are substantial. Voice-activated CRM systems, once limited to simple command recognition, can now handle complex natural language queries. A sales representative can say 'Update the contract status for Acme Corp to signed, effective date February 15th, with payment terms net 30' and the system will parse all entities correctly, create appropriate database entries, and even flag potential inconsistencies for review.",
      "From a computational perspective, the shift towards edge deployment and hybrid cloud architectures has enabled real-time transcription with sub-200ms latency—critical for interactive applications. This involves optimizing model quantization, pruning unnecessary parameters, and leveraging hardware accelerators like GPUs and TPUs. We've observed that quantized INT8 models can achieve 4x speedup with minimal accuracy degradation (<0.5% WER increase) when deployed on appropriate hardware.",
      "Looking forward, the integration of speech technology with multimodal AI systems promises even more transformative capabilities. Combining speech recognition with visual context understanding, sentiment analysis, and predictive modeling will enable enterprises to extract unprecedented insights from customer interactions, meetings, and communications.",
    ],
    author: "Mathis Escriva",
    date: "March 15, 2024",
    readTime: "12 min read",
    category: "Technology",
    image: "/logos/image_illustration1.png",
    featured: true,
    slug: "future-speech-technology-enterprise",
    keywords: ["speech technology", "enterprise solutions", "voice recognition", "transformer models", "WER", "neural networks"],
  },
  {
    id: 2,
    title: "Optimizing Speech-to-Text Models for Production: Best Practices for Enterprise Deployment",
    excerpt: "Best practices for deploying speech-to-text models in enterprise environments, focusing on accuracy, latency, and scalability. Learn how to optimize your speech recognition pipeline.",
    content: [
      "Deploying speech-to-text models in production requires a nuanced understanding of the trade-offs between accuracy, latency, and computational resources. Our production deployments at Lexia have taught us that achieving sub-5% WER while maintaining real-time processing capabilities demands careful architectural choices and optimization strategies.",
      "Model quantization is perhaps the most impactful optimization technique for production deployments. By converting floating-point weights to INT8 or even INT4 representations, we can achieve 2-4x reduction in model size and inference time with minimal accuracy loss. However, this requires careful calibration using representative datasets to minimize quantization errors. We've developed a proprietary quantization-aware training pipeline that maintains 99.7% of original model accuracy after INT8 quantization.",
      "Dynamic batching is another critical optimization. Traditional inference processes one audio stream at a time, leading to GPU underutilization. By implementing dynamic batching with padding strategies that handle variable-length audio inputs, we've achieved 40-60% improvement in throughput. Our implementation uses adaptive padding that considers both audio length and batch size to minimize wasted computation while maintaining real-time latency guarantees.",
      "The architecture of the inference pipeline itself requires careful design. We've moved away from synchronous processing to asynchronous pipelines where audio preprocessing, model inference, and post-processing happen in parallel. This pipeline architecture, combined with message queuing systems like RabbitMQ, enables us to handle burst traffic while maintaining consistent latency distributions. Our P99 latency (99th percentile) remains under 300ms even during 10x traffic spikes.",
      "Caching strategies play an underappreciated role in production optimization. For repetitive audio content—common in call center environments where greeting messages and standard responses are frequent—we maintain an LRU cache of transcriptions. This reduces redundant computation by 15-25% in typical enterprise scenarios. The cache key incorporates audio fingerprinting using perceptual hashing algorithms to handle slight variations in audio quality.",
      "Model ensembling, while computationally expensive, can provide significant accuracy improvements in production. We deploy lightweight ensemble methods that combine predictions from base models with domain-specific fine-tuned variants. The ensemble weights are learned through validation data, and we've found that even simple weighted averaging can reduce WER by 0.5-1 percentage point. However, this comes with increased computational cost, so we reserve ensembling for high-value use cases where accuracy is paramount.",
      "Monitoring and observability are non-negotiable for production deployments. We instrument our inference pipelines with detailed metrics: per-model latency distributions, accuracy metrics calculated on a held-out validation set updated weekly, GPU utilization, memory consumption, and error rates. Anomaly detection algorithms flag performance degradation automatically, enabling proactive model retraining or fallback strategies.",
      "A/B testing infrastructure allows us to safely deploy model improvements. We route a small percentage of traffic to new model versions, comparing WER, latency, and downstream metrics (like user satisfaction scores) against production models. Statistical significance testing ensures we only promote improvements that provide genuine value.",
    ],
    author: "Martial Roberge",
    date: "March 8, 2024",
    readTime: "15 min read",
    category: "Engineering",
    image: "/logos/image_illustration2.png",
    featured: false,
    slug: "optimizing-speech-to-text-models-production",
    keywords: ["speech-to-text", "model optimization", "quantization", "dynamic batching", "production deployment", "latency optimization"],
  },
  {
    id: 3,
    title: "Building Custom Voice Pipelines for Enterprise: Integration Strategies",
    excerpt: "A deep dive into creating tailored voice processing pipelines that integrate seamlessly with existing enterprise infrastructure and CRM systems.",
    content: [
      "Enterprise voice pipelines require careful architectural consideration to integrate with existing IT infrastructure while maintaining security, scalability, and reliability. Our approach at Lexia centers on modular pipeline design that enables component-level customization and replacement without system-wide disruption.",
      "The core pipeline architecture follows a microservices pattern, with distinct services for audio ingestion, preprocessing, model inference, post-processing, and integration. Each service communicates via well-defined APIs (typically gRPC for inter-service communication, REST for external interfaces), enabling independent scaling and deployment. This architecture has allowed us to achieve 99.9% uptime even during individual service updates or failures.",
      "Audio preprocessing is more critical than many teams realize. Raw audio from enterprise sources varies dramatically in quality—call center recordings compressed with GSM codecs, meeting audio from VoIP systems with packet loss, mobile recordings with significant background noise. Our preprocessing pipeline includes noise reduction algorithms (primarily spectral subtraction and Wiener filtering), automatic gain control, and voice activity detection. These steps, while adding 20-30ms latency, improve downstream WER by 2-4 percentage points on noisy audio.",
      "Integration with existing enterprise systems requires careful consideration of data formats, authentication mechanisms, and data residency requirements. We've developed adapters for major CRM platforms (Salesforce, HubSpot, Microsoft Dynamics), ticketing systems (Jira, ServiceNow), and communication platforms (Slack, Teams). Each adapter handles platform-specific authentication (OAuth 2.0, SAML, API keys), data transformation, and error handling. The adapter pattern allows us to add new integrations without modifying core pipeline code.",
      "Real-time processing pipelines differ significantly from batch processing architectures. For live transcription during calls or meetings, we use WebSocket connections for bidirectional communication. The client sends audio chunks (typically 1-2 second segments) as they're captured, and our pipeline returns partial transcriptions in near-real-time. We implement incremental decoding that updates transcriptions as more audio is processed, providing users with immediate feedback while maintaining accuracy.",
      "Batch processing for archived recordings requires different optimizations. We process large batches of audio files using distributed computing frameworks, prioritizing throughput over latency. Our batch pipeline can process thousands of hours of audio across GPU clusters, with automatic load balancing and failure recovery. Checkpointing mechanisms ensure we don't lose progress if processing is interrupted.",
      "Data privacy and security are paramount in enterprise deployments. We implement end-to-end encryption for audio in transit (TLS 1.3) and at rest (AES-256). Access control uses role-based access control (RBAC) with fine-grained permissions. Audit logging captures all access and processing activities for compliance. For particularly sensitive deployments, we support air-gapped installations where all processing happens on-premises without any external network connections.",
      "The post-processing layer transforms raw transcriptions into structured data suitable for enterprise systems. Named entity recognition (NER) extracts people, organizations, dates, and other structured information. Sentiment analysis provides emotion labels for customer interactions. Intent classification categorizes conversations for routing or analytics. This structured data is then formatted according to destination system requirements—for example, creating Salesforce tasks, Jira tickets, or database records.",
    ],
    author: "Hugo Fouan",
    date: "February 28, 2024",
    readTime: "14 min read",
    category: "Case Study",
    image: "/logos/image_illustration3.png",
    featured: false,
    slug: "building-custom-voice-pipelines-enterprise",
    keywords: ["custom voice pipelines", "enterprise integration", "microservices", "audio preprocessing", "CRM integration", "real-time processing"],
  },
  {
    id: 4,
    title: "Speech Recognition API for Enterprise: How to Integrate Voice Technology into Your Applications",
    excerpt: "Complete guide to integrating speech recognition APIs into enterprise applications. Learn about Gilbert API, authentication, and best practices for voice-enabled solutions.",
    content: [
      "Lexia's Gilbert API provides a comprehensive RESTful interface for integrating speech recognition capabilities into enterprise applications. The API design emphasizes developer ergonomics while maintaining the flexibility needed for diverse use cases. Our API handles everything from simple synchronous transcription requests to complex streaming scenarios with real-time partial results.",
      "Authentication and authorization form the foundation of secure API access. Gilbert API supports multiple authentication methods: API keys for simple integrations, OAuth 2.0 with PKCE for web applications, and mTLS (mutual TLS) for server-to-server communication requiring the highest security. We implement rate limiting per API key to prevent abuse, with configurable quotas that scale with subscription tiers. Enterprise customers can configure custom rate limits aligned with their expected usage patterns.",
      "The core transcription endpoint accepts audio in multiple formats: PCM, FLAC, MP3, WAV, and WebM. Audio is automatically transcoded to the optimal format for our models (16kHz mono PCM for most use cases). We support chunked uploads for large files, enabling streaming uploads that begin processing before the entire file is received. This reduces end-to-end latency significantly for long recordings.",
      "Request parameters allow fine-grained control over transcription behavior. The `language` parameter enables explicit language specification, important for multilingual scenarios. Our models support over 50 languages with varying accuracy levels—English and French achieve WER < 5%, while less-common languages may see WER around 8-10%. The `model` parameter selects between base models optimized for different use cases: `general` for conversational speech, `medical` for healthcare terminology, `legal` for legal proceedings, and `technical` for engineering and scientific content.",
      "Advanced features include speaker diarization, which separates multiple speakers in a single audio stream. Our diarization system uses spectral clustering on speaker embeddings extracted from the audio, achieving speaker change detection accuracy above 95% for conversations with distinct speakers. This is particularly valuable for meeting transcription where identifying 'who said what' is essential.",
      "Timestamps and word-level confidence scores provide additional metadata for downstream processing. Each word in the transcription includes start and end timestamps (millisecond precision), enabling synchronization with video or creating searchable, time-indexed transcripts. Confidence scores range from 0-1, allowing applications to flag low-confidence segments for human review. We've found that segments with confidence < 0.7 benefit significantly from manual correction.",
      "Streaming API endpoints enable real-time transcription for live applications. Clients establish WebSocket connections and send audio chunks continuously. The API returns partial transcriptions as speech is processed, updating previous segments as context improves. This enables live captioning, real-time meeting notes, or interactive voice interfaces. Our streaming implementation maintains sub-200ms latency for partial results, crucial for conversational applications.",
      "Error handling and retries are essential for production API usage. Gilbert API returns standard HTTP status codes and detailed error messages. Transient failures (network issues, temporary service unavailability) should trigger exponential backoff retries. We recommend implementing idempotency keys for critical requests to prevent duplicate processing if retries are necessary. Our API guarantees exactly-once processing when idempotency keys are used.",
      "Cost optimization strategies include intelligent caching, batch processing when real-time results aren't required, and selective use of premium features. Our pricing model charges per audio minute processed, with volume discounts for enterprise customers. Features like speaker diarization and custom model inference incur additional costs, so applications should use these selectively based on value. We provide usage analytics dashboards that help identify optimization opportunities.",
    ],
    author: "Paul Nouailles Degorce",
    date: "February 20, 2024",
    readTime: "16 min read",
    category: "API",
    image: "/logos/image_illustration1.png",
    featured: false,
    slug: "speech-recognition-api-enterprise-integration",
    keywords: ["speech recognition API", "Gilbert API", "REST API", "WebSocket", "speaker diarization", "streaming transcription"],
  },
  {
    id: 5,
    title: "Voice-Activated CRM Systems: Transforming Customer Relationship Management",
    excerpt: "Discover how voice-activated CRM systems are revolutionizing customer relationship management. Learn about hands-free data entry, voice search, and automated call transcription.",
    content: [
      "Voice-activated CRM systems represent a paradigm shift in how sales and customer service teams interact with customer relationship management platforms. Traditional keyboard-and-mouse interfaces, while functional, create friction that reduces productivity. By enabling natural language interactions, voice-activated systems reduce data entry time by 60-70% while improving data completeness and accuracy.",
      "The technical architecture of voice-activated CRM systems requires sophisticated natural language understanding (NLU) beyond simple speech recognition. Once audio is transcribed to text, the system must extract structured information: entities (customer names, product names, dates, amounts), intents (log a call, update opportunity status, schedule follow-up), and relationships between entities. Our NLU pipeline uses transformer-based models fine-tuned on CRM-specific datasets, achieving intent classification accuracy above 92% and entity extraction F1 scores above 0.88.",
      "Intent classification determines what action the user wants to perform. Common intents include logging calls, updating records, searching for contacts, creating tasks, and scheduling meetings. We've trained intent classifiers on thousands of example utterances from real sales and support interactions. The classifier outputs not just the primary intent but also confidence scores and alternative intents, enabling the system to request clarification when ambiguous.",
      "Entity extraction identifies structured data within natural language. When a sales representative says 'Log a call with John Smith from Acme Corp, discussed pricing for the enterprise package, follow up next Tuesday,' the system must extract: contact name (John Smith), account name (Acme Corp), topic (pricing, enterprise package), and action item (follow up, Tuesday). We use named entity recognition models trained on CRM data, supplemented with custom entity resolution that matches extracted entities to existing CRM records.",
      "Contextual understanding is critical for practical voice interfaces. A user might say 'Update the status to closed-won' while viewing a specific opportunity—the system must understand which opportunity is being referenced. We maintain conversation context that tracks the current user session, recently viewed records, and active filters. This context enables pronoun resolution ('update his contract' when viewing a contact) and implicit references ('add this to my calendar' referring to a meeting just mentioned).",
      "Integration with CRM platforms requires robust APIs and data synchronization. We've built deep integrations with major CRM platforms that go beyond basic REST APIs. Our Salesforce integration, for example, uses Bulk API for batch operations, Streaming API for real-time updates, and Tooling API for metadata queries. This enables operations like creating records, updating fields, executing complex queries, and triggering workflows—all triggered through voice commands.",
      "Voice search capabilities enable fast retrieval of CRM data without typing. Users can say 'Find contacts in the technology sector in Paris with open opportunities' and receive filtered results immediately. Our search implementation combines semantic search (using embeddings to find conceptually similar records) with traditional keyword search, providing both relevance and precision. Query understanding parses natural language into structured database queries, handling complex filters and relationships.",
      "Automated call logging transforms how sales teams document interactions. When integrated with phone systems or VoIP platforms, the system automatically transcribes calls and creates CRM activity records. The transcription is analyzed to extract key information: discussed products, mentioned competitors, customer pain points, next steps. This information is automatically populated into opportunity notes, activity records, and even custom fields. The result is comprehensive call documentation with minimal manual effort.",
      "The user experience design of voice interfaces requires careful consideration. Unlike visual interfaces where users can see available options, voice interfaces must guide users naturally. We implement conversational flows that prompt for missing information and confirm actions before execution. Feedback mechanisms—both audio (text-to-speech confirmations) and visual (on-screen summaries)—ensure users understand what actions were taken. Error handling gracefully manages misunderstandings, offering corrections and alternatives.",
    ],
    author: "Mathis Escriva",
    date: "February 12, 2024",
    readTime: "13 min read",
    category: "Use Cases",
    image: "/logos/image_illustration2.png",
    featured: false,
    slug: "voice-activated-crm-systems",
    keywords: ["voice-activated CRM", "NLU", "intent classification", "entity extraction", "CRM integration", "natural language understanding"],
  },
  {
    id: 6,
    title: "Automated Call Transcription: Real-Time Speech-to-Text for Customer Service",
    excerpt: "How automated call transcription is transforming customer service operations. Real-time transcription and analysis of customer service calls with automatic data population.",
    content: [
      "Automated call transcription has become a cornerstone technology for modern customer service operations, enabling real-time monitoring, comprehensive documentation, and advanced analytics. The technical challenges are substantial: achieving high accuracy on phone-quality audio (often compressed and bandwidth-limited), processing multiple concurrent calls, and extracting actionable insights from transcriptions.",
      "Phone audio presents unique challenges for speech recognition. Call center audio is typically compressed using codecs like G.711 (μ-law/A-law), G.729, or Opus, which introduce artifacts that degrade speech quality. Additionally, typical telephony bandwidth (8kHz sampling rate) provides less information than high-quality recordings (16kHz+). Our models are specifically trained on telephony audio datasets, enabling WER around 8-12% on typical call center audio—significantly better than general-purpose models that may achieve 15-20% WER on the same audio.",
      "Real-time transcription requires streaming architectures that process audio as it arrives rather than waiting for complete recordings. Our implementation uses overlapping audio windows: we process 2-second audio chunks with 1-second overlap, enabling continuous transcription with minimal latency. The overlapping windows prevent word truncation at boundaries and improve accuracy through context. Partial results are emitted every 500ms, providing near-instant feedback while maintaining accuracy through iterative refinement.",
      "Speaker diarization in call center scenarios must distinguish between agents and customers, often with limited training data for individual speakers. We use embedding-based speaker verification that learns speaker characteristics from audio features. The system assigns speaker labels (Agent/Customer) probabilistically, updating labels as more audio provides context. Our implementation achieves 95%+ speaker identification accuracy after the first 30 seconds of a call.",
      "Automatic data extraction transforms raw transcriptions into structured information. Named entity recognition identifies customer names, account numbers, order IDs, and other structured data. Sentiment analysis tracks emotional tone throughout the call, flagging frustrated customers or positive interactions. Topic modeling identifies discussed subjects (billing, technical support, product questions), enabling automated categorization and routing. Our extraction pipeline achieves F1 scores above 0.85 for common entities and sentiment classification accuracy above 87%.",
      "Integration with customer service platforms enables automatic ticket creation, case updates, and agent assistance. When a customer mentions an issue, the system can automatically create support tickets with relevant details extracted from the transcription. Agent-facing dashboards show real-time transcriptions with highlighted entities, sentiment indicators, and suggested responses based on similar past interactions. This real-time assistance improves agent performance and consistency.",
      "Quality assurance and compliance are critical for call center deployments. Automatic transcription enables comprehensive call review—supervisors can review any call in detail without listening to audio. Quality scoring algorithms analyze transcriptions for compliance with scripts, identification of upsell opportunities, and adherence to company policies. Automated flagging brings problematic calls to supervisor attention immediately, enabling rapid intervention.",
      "Analytics and insights derived from call transcriptions provide unprecedented visibility into customer interactions. Natural language processing techniques extract themes, pain points, and customer feedback at scale. Topic modeling identifies trending issues before they become widespread problems. Sentiment trends reveal customer satisfaction patterns. Competitive mentions help understand market positioning. These insights inform product development, marketing strategies, and operational improvements.",
      "Scalability considerations are paramount for call center deployments processing thousands of concurrent calls. Our infrastructure handles hundreds of simultaneous streams per GPU instance, with automatic horizontal scaling based on call volume. Load balancing distributes calls across instances, and health monitoring ensures failed instances are replaced automatically. The system maintains 99.9% uptime even during traffic spikes.",
    ],
    author: "Martial Roberge",
    date: "February 5, 2024",
    readTime: "14 min read",
    category: "Use Cases",
    image: "/logos/image_illustration3.png",
    featured: false,
    slug: "automated-call-transcription-customer-service",
    keywords: ["call transcription", "real-time transcription", "speaker diarization", "call center", "sentiment analysis", "telephony audio"],
  },
  {
    id: 7,
    title: "Meeting Intelligence: Speech Recognition for Project Management and Documentation",
    excerpt: "Transform meetings into actionable insights by integrating speech recognition with project management and documentation systems. Learn about meeting transcription and analysis.",
    content: [
      "Meeting intelligence systems combine speech recognition, natural language processing, and project management integration to transform meeting audio into actionable project data. The technical complexity involves accurate multi-speaker transcription, action item extraction, decision tracking, and automatic task creation—all operating in real-time during live meetings or on recorded audio.",
      "Multi-speaker transcription requires sophisticated speaker diarization that can handle overlapping speech, varying audio quality, and participants joining or leaving mid-meeting. Our diarization pipeline uses spectral clustering on speaker embeddings extracted from segments of audio. We've enhanced traditional approaches with learning-based methods that adapt to meeting-specific characteristics: number of speakers, speaking styles, and acoustic environments. The system achieves 90%+ speaker identification accuracy even in challenging scenarios with background noise or poor microphone quality.",
      "Action item extraction identifies tasks, owners, and deadlines from natural conversation. This requires understanding linguistic patterns like 'John will follow up by Friday' or 'We need to finalize the contract before next week.' Our extraction system uses a combination of rule-based patterns (regex for common patterns) and machine learning classifiers trained on annotated meeting transcripts. The system identifies action items with 85% precision and 80% recall, requiring minimal human correction.",
      "Decision tracking captures key decisions made during meetings. Decisions often follow linguistic patterns: 'We've decided to...', 'The consensus is...', 'Let's move forward with...'. Our system identifies decision statements, extracts the decision content, and tracks votes or consensus when expressed. Decisions are automatically documented in meeting summaries and can trigger notifications to stakeholders or updates to project documentation.",
      "Meeting summarization provides concise overviews of long meetings. Our summarization approach uses extractive techniques (selecting key sentences) combined with abstractive methods (generating new summary text). We prioritize sentences containing action items, decisions, deadlines, and important technical details. The summarization model is fine-tuned on meeting transcripts to understand what information is typically important in corporate meetings. Summaries are structured with sections for key decisions, action items, and discussion highlights.",
      "Integration with project management tools enables automatic task creation and updates. When action items are extracted, the system automatically creates tasks in platforms like Jira, Asana, or Monday.com. Task assignments use speaker identification to assign owners, and deadlines are extracted from temporal expressions. This eliminates the manual step of creating tasks after meetings, ensuring nothing falls through the cracks. Our integrations handle platform-specific APIs, custom fields, and workflow automation.",
      "Real-time meeting assistance provides live transcription and insights during meetings. Participants see real-time transcriptions on their screens, enabling better participation for remote attendees or those who missed parts. The system can flag action items as they're discussed, remind participants of deadlines mentioned earlier, or suggest agenda items based on ongoing discussion. This real-time capability requires low-latency processing—our implementation maintains sub-500ms latency for partial transcriptions.",
      "Meeting analytics provide insights across multiple meetings. Topic modeling identifies recurring themes and discussion topics. Participant engagement metrics track speaking time and contribution patterns. Decision tracking shows how often decisions are made and implemented. Trend analysis reveals patterns in project discussions, helping identify areas needing attention or teams requiring support. These analytics inform meeting effectiveness and organizational communication patterns.",
      "Privacy and security are particularly important for meeting intelligence systems. Meetings often contain sensitive information about projects, strategies, and personnel. Our systems implement end-to-end encryption, access controls based on meeting participants, and configurable retention policies. Organizations can define policies about which meetings are transcribed, who can access transcriptions, and how long data is retained. Compliance with regulations like GDPR requires careful data handling and user consent mechanisms.",
    ],
    author: "Hugo Fouan",
    date: "January 29, 2024",
    readTime: "13 min read",
    category: "Use Cases",
    image: "/logos/image_illustration1.png",
    featured: false,
    slug: "meeting-intelligence-speech-recognition",
    keywords: ["meeting intelligence", "multi-speaker transcription", "action item extraction", "meeting summarization", "project management integration"],
  },
  {
    id: 8,
    title: "Hugging Face Speech Models: Optimized Speech-to-Text for Enterprise Applications",
    excerpt: "Explore our optimized speech-to-text models on Hugging Face, designed specifically for enterprise environments. Learn about post-training and custom pipeline development.",
    content: [
      "Lexia's speech recognition models on Hugging Face represent years of research and optimization specifically targeting enterprise use cases. While base models like Whisper provide excellent general-purpose transcription, enterprise requirements demand domain-specific accuracy, multilingual capabilities, and optimized inference performance. Our published models address these needs through careful fine-tuning, architectural improvements, and extensive evaluation on enterprise datasets.",
      "The base architecture leverages transformer-based encoder-decoder models, similar to Whisper but with modifications for enterprise requirements. The encoder processes audio spectrograms using convolutional layers followed by transformer blocks, extracting hierarchical audio features. The decoder generates text tokens using cross-attention over encoder outputs. Our modifications include larger encoder dimensions for better acoustic modeling, modified attention mechanisms that reduce computational cost while maintaining accuracy, and specialized tokenizers optimized for technical terminology.",
      "Fine-tuning strategies are critical for enterprise accuracy. We use a multi-stage approach: first fine-tuning on general enterprise speech data (customer calls, meetings, presentations), then domain-specific fine-tuning for specialized industries (medical, legal, technical). This progressive fine-tuning prevents catastrophic forgetting while improving domain-specific performance. We've found that fine-tuning on as little as 50 hours of domain-specific audio can reduce WER by 3-5 percentage points compared to base models.",
      "Multilingual support is essential for global enterprises. Our models support over 50 languages, with varying accuracy levels. High-resource languages (English, French, Spanish, German) achieve WER below 5%, while lower-resource languages may see WER around 8-12%. The multilingual capability comes from training on diverse datasets including Common Voice, VoxPopuli, and proprietary enterprise recordings. Code-switching detection enables handling conversations that mix multiple languages—critical for international business contexts.",
      "Model optimization for production deployment includes quantization, pruning, and distillation. We provide INT8 quantized versions that reduce model size by 4x with minimal accuracy loss (<0.5% WER increase). Knowledge distillation techniques create smaller student models that maintain most of the teacher model's accuracy while being 2-3x faster. These optimizations enable deployment on resource-constrained environments while maintaining enterprise-grade accuracy.",
      "Evaluation metrics go beyond simple WER to assess enterprise suitability. We report WER on multiple test sets: general conversational speech, technical presentations, customer service calls, and multilingual scenarios. Additionally, we measure entity recognition accuracy, as correctly transcribing names, numbers, and technical terms is often more important than overall WER for enterprise use cases. Our models achieve entity-level accuracy above 92% on common enterprise entities.",
      "Custom pipeline development extends beyond model weights. We provide preprocessing pipelines for audio normalization, noise reduction, and voice activity detection. Post-processing includes punctuation restoration, capitalization, and number formatting. These components are often as important as the model itself for producing polished transcriptions suitable for enterprise documentation. Our pipelines are modular, enabling organizations to swap components based on their specific requirements.",
      "Open-source availability on Hugging Face enables enterprises to evaluate, customize, and deploy models with full transparency. Organizations can download models, test them on proprietary data, fine-tune further for specific use cases, and deploy on their own infrastructure. This transparency builds trust and enables compliance with regulations requiring visibility into AI systems. We actively maintain models, releasing updates as we improve accuracy and efficiency.",
      "Collaboration and community feedback drive continuous improvement. Hugging Face's model hub enables community contributions: users report issues, suggest improvements, and even contribute fine-tuned variants for specific domains. We review community feedback and incorporate improvements into official releases. This collaborative approach has led to specialized variants optimized for specific industries, languages, and use cases beyond what we could develop independently.",
    ],
    author: "Paul Nouailles Degorce",
    date: "January 22, 2024",
    readTime: "14 min read",
    category: "Research",
    image: "/logos/image_illustration2.png",
    featured: false,
    slug: "hugging-face-speech-models-enterprise",
    keywords: ["Hugging Face", "Whisper", "model fine-tuning", "multilingual speech", "model quantization", "enterprise speech models"],
  },
  {
    id: 9,
    title: "Geometric Model Merging: Efficient Adaptation of Large Language Models for Speech",
    excerpt: "Deep dive into geometric model merging techniques for efficient and scalable adaptation of large language models for speech technology applications.",
    content: [
      "Geometric model merging represents a paradigm shift in adapting large language models for specialized tasks. Instead of fine-tuning entire models—computationally expensive and prone to catastrophic forgetting—geometric merging combines model weights from multiple specialized models using geometric operations. This approach enables creating domain-specific models without retraining, dramatically reducing computational requirements while maintaining or even improving performance.",
      "The mathematical foundation of geometric model merging lies in the observation that fine-tuned model weights often lie on low-dimensional manifolds in the weight space. When multiple models are fine-tuned from the same base model on different tasks or datasets, their weights cluster in geometrically meaningful regions. By interpolating or averaging weights in these regions, we can create models that combine capabilities from multiple specialized models.",
      "Weight averaging is the simplest geometric merging technique. Given N models with weights {θ₁, θ₂, ..., θₙ}, we compute merged weights as θ_merged = Σ(wᵢ × θᵢ) where wᵢ are learned weights summing to 1. This simple average often works surprisingly well when models are fine-tuned on related tasks. However, direct averaging assumes linearity in weight space, which doesn't always hold. We've found that learned weighted averaging, where weights are optimized on validation data, outperforms simple averages by 1-2 percentage points in accuracy.",
      "More sophisticated approaches use task arithmetic, which exploits the linear relationship between task vectors. Task vectors are computed as differences between fine-tuned and base model weights: τ = θ_finetuned - θ_base. These vectors can be combined linearly to create models for new tasks: θ_new = θ_base + Σ(αᵢ × τᵢ). By learning combination coefficients αᵢ on validation data, we can create models that perform well on target tasks without any additional training.",
      "Fisher information matrix (FIM) weighted merging incorporates uncertainty estimates into the merging process. Models with lower uncertainty (higher Fisher information) for specific parameters receive higher weights during merging. This approach is particularly valuable when merging models trained on datasets of varying sizes or quality. FIM-weighted merging has shown 2-3% accuracy improvements over uniform averaging in our experiments.",
      "RegMean (Regularized Mean) addresses the non-linearity issue by regularizing the merging process. Instead of directly averaging weights, RegMean minimizes the distance between merged model predictions and individual model predictions on a validation set. This optimization-based approach finds weights that better account for non-linear interactions between models. In practice, RegMean achieves accuracy closer to training a new model from scratch, but with computational cost orders of magnitude lower.",
      "For speech recognition applications, we merge models fine-tuned on different domains: general conversation, technical presentations, medical terminology, legal proceedings. The merged model inherits capabilities from all source domains, achieving performance comparable to domain-specific models across all domains. This is particularly valuable for enterprises operating in multiple industries or dealing with diverse audio content.",
      "Computational efficiency is the primary advantage of geometric merging. Training a new model from scratch requires weeks of GPU time and hundreds of thousands of dollars in compute costs. Geometric merging, in contrast, requires hours of computation and can be performed on standard hardware. This democratizes access to high-performance domain-specific models, enabling smaller organizations to leverage state-of-the-art speech recognition without massive computational resources.",
      "Limitations and considerations include the assumption that source models are compatible (fine-tuned from the same base architecture). Merging incompatible models or models with vastly different training regimes often produces poor results. Additionally, geometric merging works best when source tasks are related; merging completely unrelated tasks may not provide benefits. Careful validation on target tasks is essential before deploying merged models in production.",
    ],
    author: "Mathis Escriva",
    date: "January 15, 2024",
    readTime: "15 min read",
    category: "Research",
    image: "/logos/image_illustration3.png",
    featured: false,
    slug: "geometric-model-merging-speech-technology",
    keywords: ["model merging", "geometric merging", "task arithmetic", "Fisher information", "RegMean", "speech model adaptation"],
  },
  {
    id: 10,
    title: "Enterprise Speech Technology: Security, Compliance, and Scalability Considerations",
    excerpt: "Essential considerations for deploying speech technology in enterprise environments: security, compliance with regulations, and scalability requirements.",
    content: [
      "Enterprise speech technology deployments must address security, compliance, and scalability from the initial design phase. These considerations are not optional enhancements but fundamental requirements that determine whether a solution can be deployed in regulated industries or handle enterprise-scale workloads. Our approach at Lexia integrates these requirements into every layer of the architecture.",
      "Security architecture begins with encryption at rest and in transit. Audio data, often containing sensitive business information or personal data, requires AES-256 encryption at rest. In-transit encryption uses TLS 1.3 with perfect forward secrecy, ensuring that compromise of current encryption keys doesn't reveal historical data. We implement certificate pinning for API communications, preventing man-in-the-middle attacks. Additionally, we support field-level encryption for particularly sensitive data fields (like account numbers or personal identifiers) stored in databases or logs.",
      "Access control implements zero-trust principles where every request is authenticated and authorized, regardless of network location. We use role-based access control (RBAC) with fine-grained permissions: users can be granted access to specific functions (transcribe, view transcripts, export data) for specific resources (their own calls, their team's meetings, all enterprise data). Multi-factor authentication (MFA) is mandatory for administrative access and recommended for all users. API access uses OAuth 2.0 with refresh tokens, enabling secure programmatic access while maintaining revocation capabilities.",
      "Audit logging captures all security-relevant events: authentication attempts, data access, configuration changes, and administrative actions. Logs are immutable and tamper-evident, stored in write-once storage with cryptographic hashing. These logs enable security incident investigation, compliance audits, and forensic analysis. We maintain logs for configurable retention periods (typically 7 years for financial services, 10 years for healthcare), meeting regulatory requirements across industries.",
      "Data residency and sovereignty are critical for international enterprises. Regulations like GDPR require that personal data of EU citizens remains within EU borders unless adequate safeguards are in place. Our infrastructure supports region-specific deployments where all processing and storage occurs within specified geographic boundaries. We maintain separate instances in Europe, North America, and Asia-Pacific, with strict data isolation between regions. Cross-region data transfer requires explicit customer consent and use of approved transfer mechanisms (like Standard Contractual Clauses).",
      "Compliance with industry-specific regulations requires specialized implementations. HIPAA compliance for healthcare requires signed Business Associate Agreements (BAAs), specific encryption standards, and audit trails. Financial services require compliance with regulations like SOX (Sarbanes-Oxley) for financial data and PCI DSS for payment information. Our systems are designed to support these requirements through configurable policies, automated compliance checking, and detailed documentation.",
      "Scalability architecture uses horizontal scaling principles where additional capacity is added by deploying more instances rather than upgrading individual servers. Our microservices architecture enables independent scaling of components: audio ingestion, preprocessing, model inference, and post-processing can scale independently based on demand. Auto-scaling policies automatically provision or deprovision instances based on metrics like queue depth, CPU utilization, and latency percentiles. This enables handling traffic spikes (10x normal load) while maintaining performance during normal operations.",
      "Load balancing distributes requests across multiple instances using intelligent algorithms. We use weighted round-robin with health checks, ensuring traffic is routed to healthy instances while avoiding overloaded servers. Geographic load balancing routes users to nearest data centers, reducing latency. For real-time streaming applications, session affinity ensures audio chunks from the same stream are processed by the same instance, maintaining continuity.",
      "Caching strategies reduce redundant computation and database load. We cache transcriptions of common audio (like greeting messages or standard responses) using content-addressable storage keyed by audio fingerprints. Model inference results are cached for identical inputs, dramatically reducing computational cost for repetitive content. Database query results are cached with TTL-based invalidation, reducing database load during peak traffic. These caching strategies can reduce infrastructure costs by 30-50% for typical enterprise workloads.",
      "Monitoring and observability enable proactive management of large-scale deployments. We instrument all components with detailed metrics: request rates, latency distributions, error rates, resource utilization, and business metrics (like transcription accuracy). Real-time dashboards provide visibility into system health, and automated alerting notifies operators of anomalies. Distributed tracing enables tracking requests across microservices, simplifying debugging of complex issues. This observability is essential for maintaining 99.9%+ uptime in production environments.",
    ],
    author: "Martial Roberge",
    date: "January 8, 2024",
    readTime: "16 min read",
    category: "Enterprise",
    image: "/logos/image_illustration1.png",
    featured: false,
    slug: "enterprise-speech-technology-security-compliance",
    keywords: ["enterprise security", "compliance", "GDPR", "HIPAA", "scalability", "encryption", "access control"],
  },
  {
    id: 11,
    title: "MILO Educational Assistant: A Case Study in Speech Technology Deployment",
    excerpt: "Case study of MILO, an educational assistant powered by Lexia's speech technology, demonstrating real-world deployment of voice-activated learning solutions.",
    content: [
      "MILO (Multimodal Interactive Learning Organizer) represents a comprehensive case study in deploying speech technology in educational environments. The project required addressing unique challenges: understanding student speech patterns (often less formal and more varied than adult speech), handling educational terminology across multiple subjects, and providing real-time feedback during learning activities. This case study details the technical architecture, challenges encountered, and lessons learned.",
      "The educational domain presents distinctive speech recognition challenges. Student speech includes hesitation markers ('um', 'uh'), incomplete sentences, informal vocabulary, and varying pronunciation of technical terms as students learn. Additionally, classroom environments often have poor acoustics, background noise from other students, and varying microphone quality. We addressed these challenges through extensive fine-tuning on educational audio datasets and robust preprocessing pipelines designed specifically for classroom audio.",
      "Model development involved collecting and curating a diverse educational dataset. We partnered with educational institutions to record classroom interactions, student presentations, and tutoring sessions. The dataset included multiple age groups (elementary through university), various subjects (mathematics, science, literature, history), and different interaction types (lectures, discussions, Q&A sessions). This dataset, totaling over 2,000 hours of audio, was carefully transcribed and annotated by educational experts, ensuring accuracy and appropriateness for training.",
      "Fine-tuning strategies adapted our base speech recognition model for educational contexts. We used curriculum learning, gradually introducing more complex educational terminology. Subject-specific fine-tuning created specialized variants for different academic domains. For example, mathematics instruction required accurate transcription of mathematical expressions, formulas, and problem-solving processes. Literature discussions needed sensitivity to poetic language, literary analysis terminology, and student interpretations.",
      "Real-time transcription during classes enables multiple use cases: live captioning for accessibility, note-taking assistance for students, and teaching feedback for educators. Our streaming architecture processes audio with sub-500ms latency, providing near-instant transcription. The system handles overlapping speech when multiple students speak simultaneously, using speaker diarization to separate contributions. This real-time capability required optimization of inference pipelines to maintain responsiveness on standard classroom hardware.",
      "Intelligent note-taking features analyze transcriptions to extract key concepts, questions, and learning objectives. Natural language processing identifies important information: definitions, examples, questions asked by students, and topics requiring clarification. The system automatically generates structured notes with sections for key concepts, student questions, and follow-up actions. This reduces the cognitive load on students, allowing them to focus on understanding rather than writing.",
      "Assessment and feedback capabilities use speech recognition to evaluate student verbal responses. During oral examinations or presentations, the system transcribes student answers and compares them against model responses. This isn't meant to replace human evaluation but to provide immediate feedback on basic comprehension and identify areas needing clarification. The system flags responses that seem incomplete or indicate misunderstandings, prompting educators to provide targeted support.",
      "Multilingual support was essential for diverse educational environments. MILO supports instruction in multiple languages, with code-switching detection enabling handling of bilingual instruction (common in language learning classes). The system adapts to regional accents and dialects, ensuring equitable performance across diverse student populations. This required extensive multilingual training data and careful evaluation to prevent biases against non-standard accents.",
      "Privacy and safety considerations were paramount given the student population. We implemented strict access controls ensuring only authorized educators and students can access transcriptions. Data retention policies automatically delete transcripts after configurable periods (typically end of academic year). Audio recordings are encrypted end-to-end, and we provide transparent privacy controls allowing students and parents to understand data usage. Compliance with COPPA (for students under 13) and FERPA (for educational records) was verified through legal review.",
      "Deployment results demonstrated significant value. Students reported improved engagement and comprehension, particularly those with learning differences or language barriers. Educators appreciated the automatic note-taking and student feedback capabilities, reducing administrative burden. Quantitative metrics showed 15% improvement in student participation (more students speaking when transcription support was available) and 10% improvement in retention of key concepts (measured through follow-up assessments). These results validated the investment in domain-specific development and demonstrated the potential of speech technology in education.",
    ],
    author: "Hugo Fouan",
    date: "January 1, 2024",
    readTime: "15 min read",
    category: "Case Study",
    image: "/logos/image_illustration2.png",
    featured: false,
    slug: "milo-educational-assistant-case-study",
    keywords: ["MILO", "educational technology", "speech recognition in education", "multimodal learning", "student speech", "classroom technology"],
  },
  {
    id: 12,
    title: "Post-Training Speech Models: Customizing Pre-Trained Models for Your Enterprise",
    excerpt: "Learn how to customize pre-trained speech models through post-training techniques to meet your enterprise's specific requirements and use cases.",
    content: [
      "Post-training (also called fine-tuning) enables enterprises to customize pre-trained speech recognition models for domain-specific requirements without training models from scratch. This approach leverages transfer learning, where knowledge learned from large general-purpose datasets is adapted to specific use cases. The process is significantly more efficient than training from scratch while providing substantial accuracy improvements for specialized domains.",
      "The theoretical foundation of post-training lies in representation learning. Pre-trained models have learned general acoustic and linguistic patterns from thousands of hours of diverse audio. These learned representations capture universal features of human speech: phoneme structure, prosody patterns, common vocabulary, and linguistic relationships. When fine-tuning on domain-specific data, the model adjusts these representations to better handle specialized terminology, accents, or speaking styles while retaining general speech understanding capabilities.",
      "Data preparation is the most critical aspect of successful post-training. High-quality training data requires accurate transcriptions, appropriate audio quality, and representative coverage of target scenarios. We recommend collecting at least 50-100 hours of domain-specific audio for meaningful improvements, though 20-30 hours can provide noticeable benefits. The data should represent the expected production scenarios: same audio quality, similar speaking styles, comparable background noise levels. Mismatched training data (high-quality studio recordings when production uses phone audio) leads to poor generalization.",
      "Transcription accuracy directly impacts model quality. Errors in training transcriptions teach the model incorrect mappings. We recommend human transcription by domain experts familiar with technical terminology. Automated transcription tools can provide initial drafts, but human review is essential. Quality assurance processes should check transcription accuracy, consistency of terminology usage, and proper handling of numbers, names, and specialized vocabulary. Inter-annotator agreement metrics help ensure transcription quality.",
      "Training configuration requires careful hyperparameter selection. Learning rates must balance adapting to new data while avoiding catastrophic forgetting of general capabilities. We typically use learning rates 10-100x smaller than initial training (e.g., 1e-5 to 1e-6). Training duration is determined by validation performance—we monitor WER on held-out validation data and stop when improvements plateau (early stopping). Typically, 5-10 epochs provide optimal results, though this varies with dataset size and domain shift.",
      "Regularization techniques prevent overfitting to limited training data. Dropout maintains generalizability by randomly deactivating neurons during training. Weight decay (L2 regularization) prevents weights from becoming too large. Data augmentation artificially expands the training dataset: adding background noise, varying audio speed (time stretching), and simulating different audio codecs. These techniques effectively increase dataset size 3-5x without collecting additional audio, improving model robustness.",
      "Evaluation methodology must reflect production use cases. Simple WER on test sets doesn't fully capture enterprise requirements. We evaluate on multiple metrics: overall WER, entity-level accuracy (names, numbers, technical terms), sentence-level accuracy, and downstream task performance (like information extraction accuracy). Domain-specific evaluation sets should mirror production scenarios: same audio quality, similar content types, representative speakers. Cross-validation or hold-out validation sets prevent overfitting to test data.",
      "Incremental fine-tuning enables continuous improvement as more data becomes available. Instead of retraining from scratch, models can be incrementally updated with new data. This approach is more efficient and allows models to adapt to changing requirements or expanding use cases. Care must be taken to maintain performance on original tasks while improving on new data—techniques like elastic weight consolidation or experience replay can help prevent catastrophic forgetting.",
      "Deployment considerations include model versioning, A/B testing, and rollback capabilities. Version control tracks model iterations, training data used, and performance metrics. A/B testing infrastructure enables comparing new model versions against production models on live traffic. Gradual rollout (starting with small traffic percentages) reduces risk. Rollback mechanisms allow quick reversion if new models perform poorly. Monitoring production metrics (accuracy, latency, error rates) provides feedback for future improvements.",
      "Cost-benefit analysis helps determine when post-training is worthwhile. The process requires data collection, transcription, computational resources for training, and ongoing maintenance. Benefits include improved accuracy (reducing manual correction costs), better user experience, and domain-specific capabilities. For high-volume use cases processing thousands of hours monthly, even modest accuracy improvements can justify significant investment. Lower-volume use cases may find general-purpose models sufficient, with domain-specific preprocessing or post-processing providing adequate improvements.",
    ],
    author: "Paul Nouailles Degorce",
    date: "December 25, 2023",
    readTime: "16 min read",
    category: "Engineering",
    image: "/logos/image_illustration3.png",
    featured: false,
    slug: "post-training-speech-models-customization",
    keywords: ["post-training", "fine-tuning", "transfer learning", "model customization", "domain adaptation", "speech model training"],
  },
]

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug)
  
  if (!post) {
    return {
      title: "Article Not Found | Lexia Blog",
    }
  }

  return {
    title: `${post.title} | Lexia Blog`,
    description: post.excerpt,
    keywords: post.keywords?.join(", "),
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      tags: post.keywords,
    },
    alternates: {
      canonical: `https://www.lexiapro.fr/blog/${post.slug}`,
    },
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[450px] md:h-[550px] overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 container pb-12">
            <ScrollAnimation>
              <Link href="/blog">
                <Button variant="ghost" size="sm" className="mb-6 font-normal hover:bg-background/80">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Blog
                </Button>
              </Link>
              <Badge variant="outline" className="mb-4 text-xs font-normal bg-background/90 backdrop-blur-sm">
                {post.category}
              </Badge>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight mb-6 max-w-4xl">
                {post.title}
              </h1>
              <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </section>

        <Separator />

        {/* Article Content */}
        <section className="container py-16 md:py-24">
          <div className="mx-auto max-w-4xl">
            <ScrollAnimation>
              <Card className="border-2 rounded-xl p-8 md:p-12 relative overflow-hidden group">
                {/* Subtle gradient background */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-orange-500/5 via-violet-500/5 to-transparent rounded-full blur-3xl opacity-50 group-hover:opacity-70 transition-opacity duration-700" />
                
                <div className="relative z-10">
                  <article className="prose prose-lg max-w-none">
                    {post.content.map((paragraph, index) => (
                      <p key={index} className="text-base md:text-lg leading-relaxed text-foreground mb-6 last:mb-0">
                        {paragraph}
                      </p>
                    ))}
                  </article>
                </div>
              </Card>
            </ScrollAnimation>

            {/* Related Actions */}
            <ScrollAnimation delay={100}>
              <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4">
                <Link href="/blog">
                  <Button variant="outline" size="lg" className="font-normal">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Blog
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="default" className="font-normal">
                    Get in Touch
                    <Share2 className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </ScrollAnimation>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
