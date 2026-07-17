export interface Project {
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  image: string;
  architecture?: string;
  github: string;
  demo?: string;
  lessons: string[];
  slug: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    title: "Multi-Cloud Kubernetes Platform",
    description:
      "Production-grade Kubernetes platform spanning AWS EKS and GCP GKE with unified GitOps deployment pipeline.",
    longDescription:
      "Designed and implemented a multi-cloud Kubernetes platform that provides a unified abstraction layer across AWS EKS and GCP GKE. The platform uses Flux CD for GitOps-based deployments, Crossplane for infrastructure provisioning, and custom operators for workload management. Achieved 99.99% uptime SLA with automated failover between cloud providers.",
    technologies: ["Kubernetes", "AWS EKS", "GCP GKE", "Terraform", "Flux CD", "Crossplane", "Go", "Prometheus"],
    image: "/images/projects/k8s-platform.svg",
    github: "https://github.com/yourusername/multi-cloud-k8s",
    demo: "https://platform-demo.example.com",
    lessons: [
      "Multi-cloud networking requires careful CIDR planning to avoid conflicts",
      "GitOps reconciliation loops need proper health checks to prevent cascading failures",
      "Custom operators significantly reduce operational toil for platform teams",
    ],
    slug: "multi-cloud-kubernetes-platform",
    featured: true,
  },
  {
    title: "Serverless Data Pipeline",
    description:
      "Event-driven data processing pipeline handling 10M+ events/day using AWS Lambda, Kinesis, and DynamoDB.",
    longDescription:
      "Built a fully serverless data pipeline that ingests, transforms, and stores telemetry data from IoT devices. The architecture uses Kinesis Data Streams for event ingestion, Lambda for processing, DynamoDB for hot storage, and S3 with Athena for analytical queries. Implemented dead-letter queues and automatic retry mechanisms for fault tolerance.",
    technologies: ["AWS Lambda", "Kinesis", "DynamoDB", "S3", "Athena", "Terraform", "Python", "CloudWatch"],
    image: "/images/projects/data-pipeline.svg",
    github: "https://github.com/yourusername/serverless-data-pipeline",
    lessons: [
      "Lambda cold starts can be mitigated with provisioned concurrency for latency-sensitive paths",
      "DynamoDB partition key design is critical for avoiding hot partitions at scale",
      "Dead-letter queues with exponential backoff prevent data loss during downstream failures",
    ],
    slug: "serverless-data-pipeline",
    featured: true,
  },
  {
    title: "Infrastructure as Code Framework",
    description:
      "Custom Terraform module framework with automated testing, compliance checks, and self-service provisioning.",
    longDescription:
      "Developed a comprehensive Terraform module framework that standardizes infrastructure provisioning across the organization. Includes a module registry, automated testing with Terratest, OPA-based policy enforcement, and a self-service portal for developers. Reduced infrastructure provisioning time from days to minutes.",
    technologies: ["Terraform", "Go", "OPA", "Terratest", "GitHub Actions", "AWS", "Python", "React"],
    image: "/images/projects/iac-framework.svg",
    github: "https://github.com/yourusername/terraform-framework",
    demo: "https://infra-portal.example.com",
    lessons: [
      "Module composition patterns are more maintainable than monolithic configurations",
      "Policy-as-code should be implemented early to prevent drift in governance",
      "Self-service portals dramatically improve developer velocity when backed by guardrails",
    ],
    slug: "infrastructure-as-code-framework",
    featured: true,
  },
  {
    title: "Cloud Cost Optimization Engine",
    description:
      "ML-powered cost optimization platform that reduced cloud spend by 40% through automated rightsizing and scheduling.",
    longDescription:
      "Created an intelligent cost optimization engine that analyzes resource utilization patterns using machine learning to provide rightsizing recommendations. Implements automated scheduling for non-production workloads, spot instance management, and reserved instance planning. Integrates with Slack for notifications and approval workflows.",
    technologies: ["Python", "AWS", "GCP", "Kubernetes", "scikit-learn", "Grafana", "PostgreSQL", "Slack API"],
    image: "/images/projects/cost-optimization.svg",
    github: "https://github.com/yourusername/cloud-cost-engine",
    lessons: [
      "Historical utilization data needs at least 30 days for reliable ML predictions",
      "Automated actions require robust rollback mechanisms and approval gates",
      "Cost allocation tags must be enforced at provisioning time, not retroactively",
    ],
    slug: "cloud-cost-optimization-engine",
    featured: false,
  },
  {
    title: "Zero-Trust Network Architecture",
    description:
      "Implemented zero-trust networking with service mesh, mutual TLS, and identity-aware proxy for microservices.",
    longDescription:
      "Designed and deployed a zero-trust network architecture using Istio service mesh with mutual TLS, SPIFFE-based workload identity, and BeyondCorp-style identity-aware proxy. The architecture eliminates implicit trust between services and enforces fine-grained authorization policies based on workload identity rather than network location.",
    technologies: ["Istio", "Envoy", "SPIFFE", "Kubernetes", "Terraform", "Cilium", "OPA", "Cert-Manager"],
    image: "/images/projects/zero-trust.svg",
    github: "https://github.com/yourusername/zero-trust-mesh",
    lessons: [
      "mTLS certificate rotation must be automated to prevent outages",
      "Service mesh observability is essential for debugging authorization failures",
      "Gradual rollout with permissive mode prevents disruption during migration",
    ],
    slug: "zero-trust-network-architecture",
    featured: true,
  },
  {
    title: "AI/ML Platform on Kubernetes",
    description:
      "GPU-accelerated ML platform with automated model training, serving, and monitoring on Kubernetes.",
    longDescription:
      "Built a comprehensive ML platform on Kubernetes that provides GPU scheduling, distributed training with Horovod, model serving with KServe, and experiment tracking with MLflow. The platform supports multi-tenancy with resource quotas and priority-based scheduling for different ML teams.",
    technologies: ["Kubernetes", "NVIDIA GPU Operator", "KServe", "MLflow", "Ray", "Python", "Terraform", "ArgoCD"],
    image: "/images/projects/ml-platform.svg",
    github: "https://github.com/yourusername/ml-platform-k8s",
    demo: "https://ml-platform.example.com",
    lessons: [
      "GPU scheduling requires topology-aware allocation for multi-GPU training",
      "Model serving autoscaling needs custom metrics beyond CPU/memory",
      "Experiment reproducibility requires versioning data, code, and environment together",
    ],
    slug: "ai-ml-platform-kubernetes",
    featured: true,
  },
];
