export interface Certification {
  title: string;
  issuer: string;
  date: string;
  credentialUrl: string;
  description: string;
  category: string;
}

export const certifications: Certification[] = [
  {
    title: "Microsoft Certified: Azure Solutions Architect Expert",
    issuer: "Microsoft",
    date: "2026",
    credentialUrl: "https://aws.amazon.com/verification",
    description:
      "Advanced architectural design patterns, multi-account strategies, and complex hybrid architectures on AWS.",
    category: "Azure",
  },
  {
    title: "Google Cloud Certified Professional Cloud Architect",
    issuer: "Google",
    date: "2026",
    credentialUrl: "https://aws.amazon.com/verification",
    description:
      "CI/CD pipelines, infrastructure as code, monitoring, logging, and operational excellence on AWS.",
    category: "GCP",
  },
  {
    title: "HashiCorp Certified: Terraform Authoring and Operations Professional",
    issuer: "HashiCorp",
    date: "2026",
    credentialUrl: "https://www.credly.com/verify",
    description:
      "Kubernetes cluster administration, networking, storage, security, and troubleshooting.",
    category: "Terraform",
  },
  {
    title: "Microsoft Certified: Azure Network Engineer Associate",
    issuer: "Microsoft",
    date: "2026",
    credentialUrl: "https://www.credly.com/verify",
    description:
      "Kubernetes security best practices, supply chain security, runtime security, and network policies.",
    category: "Azure",
  },
  {
    title: "HashiCorp Terraform Associate",
    issuer: "HashiCorp",
    date: "2023",
    credentialUrl: "https://www.credly.com/verify",
    description:
      "Infrastructure as Code concepts, Terraform workflow, state management, and module development.",
    category: "Terraform",
  },
  {
    title: "Microsoft Certified: Azure Administrator Associate",
    issuer: "Microsoft",
    date: "2026",
    credentialUrl: "https://www.credential.net/verify",
    description:
      "Designing and planning cloud solution architecture, managing infrastructure, and ensuring security on GCP.",
    category: "Azure",
  },
  {
    title: "Microsoft Certified: Azure Developer Associate",
    issuer: "Microsoft",
    date: "2025",
    credentialUrl: "https://learn.microsoft.com/verify",
    description:
      "Design identity, governance, monitoring, compute, networking, storage, and data integration solutions on Azure.",
    category: "Azure",
  },
  {
    title: "HashiCorp Certified: Consul Associate",
    issuer: "HashiCorp",
    date: "2025",
    credentialUrl: "https://www.credly.com/verify",
    description:
      "Secrets management, encryption as a service, dynamic credentials, and identity-based access.",
    category: "HashiCorp",
  },
];