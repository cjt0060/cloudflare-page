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
  category: string;
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
    category: "Kubernetes",
  },
];
