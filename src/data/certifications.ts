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
    title: "AWS Solutions Architect – Professional",
    issuer: "Amazon Web Services",
    date: "2024",
    credentialUrl: "https://aws.amazon.com/verification",
    description:
      "Advanced architectural design patterns, multi-account strategies, and complex hybrid architectures on AWS.",
    category: "AWS",
  },
  {
    title: "AWS DevOps Engineer – Professional",
    issuer: "Amazon Web Services",
    date: "2024",
    credentialUrl: "https://aws.amazon.com/verification",
    description:
      "CI/CD pipelines, infrastructure as code, monitoring, logging, and operational excellence on AWS.",
    category: "AWS",
  },
  {
    title: "Certified Kubernetes Administrator (CKA)",
    issuer: "Cloud Native Computing Foundation",
    date: "2024",
    credentialUrl: "https://www.credly.com/verify",
    description:
      "Kubernetes cluster administration, networking, storage, security, and troubleshooting.",
    category: "Kubernetes",
  },
  {
    title: "Certified Kubernetes Security Specialist (CKS)",
    issuer: "Cloud Native Computing Foundation",
    date: "2024",
    credentialUrl: "https://www.credly.com/verify",
    description:
      "Kubernetes security best practices, supply chain security, runtime security, and network policies.",
    category: "Kubernetes",
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
    title: "Google Cloud Professional Cloud Architect",
    issuer: "Google Cloud",
    date: "2023",
    credentialUrl: "https://www.credential.net/verify",
    description:
      "Designing and planning cloud solution architecture, managing infrastructure, and ensuring security on GCP.",
    category: "GCP",
  },
  {
    title: "Microsoft Azure Solutions Architect Expert",
    issuer: "Microsoft",
    date: "2023",
    credentialUrl: "https://learn.microsoft.com/verify",
    description:
      "Design identity, governance, monitoring, compute, networking, storage, and data integration solutions on Azure.",
    category: "Azure",
  },
  {
    title: "HashiCorp Vault Associate",
    issuer: "HashiCorp",
    date: "2023",
    credentialUrl: "https://www.credly.com/verify",
    description:
      "Secrets management, encryption as a service, dynamic credentials, and identity-based access.",
    category: "HashiCorp",
  },
];
