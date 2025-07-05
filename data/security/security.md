---
title: Security & Compliance
---

# Security & Compliance

**Effective Date:** April 2, 2025  

Protecting customer data is mission-critical at **DossX**. This document outlines the technical and organizational safeguards we employ to keep your information safe and to comply with relevant regulations.

---

## 1. Security Framework

| Layer          | Controls Implemented                                                  |
|--------------- |---------------------------------------------------------------------- |
| **Infrastructure** | Hosted on AWS & GCP with ISO 27001 and SOC 2 certified data centers. |
| **Network**        | VPC segmentation, firewalls, and DDoS protection via AWS Shield. |
| **Application**    | OWASP-guided coding standards, static code analysis, and automated dependency scanning. |
| **Identity & Access** | SSO via Clerk, role-based access, MFA enforced for all internal accounts. |
| **Encryption**     | TLS 1.2+ in transit; AES-256 at rest for databases, backups, and object storage. |

---

## 2. Compliance Roadmap

- **SOC 2 Type II:** External audit in progress; target completion Q4 2025.  
- **GDPR:** Data processing agreements and EU-model clauses available.  
- **CCPA / CPRA:** Opt-out mechanisms and consumer rights processes in place.  
- **HIPAA (optional):** Business Associate Agreement (BAA) available on Scale plan.

---

## 3. Data Isolation & Residency

- Customer data logically separated by tenant ID.  
- EU customers may request EU-only data residency (beta).  
- Backups encrypted and stored cross-region for redundancy.

---

## 4. Vulnerability Management

- **Continuous Scanning:** Snyk + GitHub Dependabot for dependency alerts.  
- **Pen Tests:** Annual external penetration test; summary available under NDA.  
- **Bug Bounty:** Public program via HackerOne (launching mid-2025).

---

## 5. Incident Response

1. **Detection:** 24/7 monitoring via AWS CloudWatch, Datadog, and SIEM alerts.  
2. **Containment:** Access revoked or traffic blocked within minutes of confirmation.  
3. **Communication:** Affected customers notified within 24 hours, per GDPR Art. 33 & 34.  
4. **Post-mortem:** Root-cause analysis and action items shared within five business days.

---

## 6. Customer Responsibilities

- Enable MFA for user accounts.  
- Review access logs periodically via the DossX dashboard.  
- Promptly install updates or patches for any on-prem connectors.

---

## 7. Third-Party Sub-Processors

| Provider  | Purpose              | Compliance Certifications |
|-----------|--------------------- |---------------------------|
| **Stripe** | Payment processing   | PCI-DSS, SOC 2, ISO 27001 |
| **Clerk**  | Authentication       | SOC 2                     |
| **OpenAI** | Large-language model | SOC 2, ISO 27001          |
| **AWS/GCP**| Cloud hosting        | SOC 2, ISO 27001, PCI-DSS |

Full sub-processor list: <https://dossx.com/compliance/sub-processors>.

---

## 8. Policy Updates

We periodically update this policy to reflect new controls, certifications, or regulatory changes. Revisions are effective upon posting with a new effective date.

---

## 9. Contact & Reporting

- **Security inquiries:** security@dossx.com  
- **Responsible disclosure / bug bounty:** disclosure@dossx.com  

**DossX LLC — Security & Compliance**  
1919 McKinney Ave, Suite 1000, Dallas, TX 75201