# PHILLIP

**Staff Software Engineer | Backend Engineering | System Architecture**

Ho Chi Minh City, Vietnam  
Email: `[Your email]` · Phone: `[Your phone]` · LinkedIn: `[Your LinkedIn]` · GitHub: `[Your GitHub]`

---

## PROFESSIONAL SUMMARY

Staff-level software engineer with **16 years of software engineering experience**, including approximately 13 years with the same organization, specializing in backend development, system architecture, distributed systems, and enterprise application modernization.

Experienced in leading technical projects from architecture and implementation through production deployment and operational support. Strong expertise in the .NET ecosystem, SQL Server, RabbitMQ, and scalable service architectures, with hands-on experience in Docker, load balancing, and Kubernetes.

An individual contributor with technical leadership responsibilities, focused on solving complex business problems, improving system reliability and maintainability, and enabling scalable product integrations.

## CORE COMPETENCIES

- **Technical Leadership:** Project technical leadership, architecture design, code reviews, technical decision-making, mentoring through code reviews, and cross-team collaboration.
- **System Architecture:** Distributed systems, service scalability, high availability, fault tolerance, asynchronous processing, and system modernization.
- **Backend Engineering:** C#, .NET, ASP.NET Core, .NET Minimal API, RESTful APIs, and enterprise application development.
- **Database Engineering:** Microsoft SQL Server, stored procedures, database design, query optimization, and large-scale data processing.
- **Messaging & Caching:** RabbitMQ, EasyNetQ, Memcached, and asynchronous messaging.
- **Frontend Development:** ReactJS, Next.js, JavaScript, and jQuery.
- **Infrastructure & DevOps:** Docker, HAProxy, Kubernetes, Rancher, GitLab CI/CD, and deployment automation.
- **Engineering Quality:** SOLID principles, reusable and testable code, code review standards, production troubleshooting, and performance optimization.

## PROFESSIONAL EXPERIENCE

### Staff Software Engineer — Pioneers / Pionex

**[Company Name] | [Start Year] – Present**

- Lead technical implementation across multiple business-critical projects, translating complex business requirements into maintainable and scalable software solutions.
- Drive architecture and implementation decisions, evaluate technical trade-offs, review code, and coordinate production deployments.
- Develop and modernize backend services using C#, .NET, ASP.NET Core, Minimal API, SQL Server, and distributed messaging technologies.
- Improve application maintainability by reducing duplicated code, consolidating fragmented business logic, and building reusable integration platforms.
- Participate in production incident response, troubleshooting, hotfixes, deployments, and operational support for critical business systems.
- Collaborate with multiple development teams and external integration partners to deliver cross-system features and resolve technical dependencies.
- Support production services through standby and incident handling for Customer Setting, External Admin, and NAP, including related Cash Service integrations.

### Selected Contributions

**Architecture & Platform Modernization**
- Modernized legacy customer configuration workflows into a centralized, configuration-driven platform, reducing the need to clone and modify code for individual product integrations.
- Designed and implemented backend APIs and integration logic using modern .NET technologies and SQL Server.
- Improved maintainability and reduced the cost of introducing new product integrations.

**Reliability & Production Operations**
- Investigate production issues, assess business impact, implement corrective actions, and coordinate with dependent teams to restore service.
- Make time-sensitive technical decisions during incidents, balancing recovery speed, operational risk, and business impact.
- Promote practices that reduce integration conflicts, deployment risks, and recurring production issues.

## SELECTED PROJECTS

### 1. Customer Setting Modernization Platform

**Role:** Technical Project Lead · **Team Size:** 5

**Technology:** .NET 9, ASP.NET Core Minimal API, ReactJS, Next.js, Microsoft SQL Server, Docker

Modernized a fragmented legacy customer configuration system into a centralized platform that supports multiple products through configuration rather than duplicated product-specific code.

**Key contributions**
- Led technical implementation across backend APIs, frontend workflows, and database integration.
- Replaced a code-cloning approach used across more than 20 product integrations with a configuration-driven architecture.
- Implemented customer configuration features supporting Simplified Downline Creation, Super/Master Direct Member, and Cash Service.
- Improved User Maintenance (UM) workflows by narrowing locks to relevant functions and configuration areas rather than blocking operations across the entire system.
- Designed automatic initialization of customer setting data, reducing dependency on manual SQL scripts.
- Supported the migration of RNG Casino settings from a dedicated casino database into the shared DCS/customer database architecture.

**Impact:** Improved extensibility, reduced duplicated implementation, simplified onboarding of new product integrations, and reduced operational overhead for customer configuration changes.

### 2. Mail Station — Centralized Email Processing

**Role:** Key Developer / Technical Contributor

**Technology:** .NET, RabbitMQ, EasyNetQ, SQL Server, Stored Procedures, Memcached

Built and maintained a centralized email processing system using asynchronous messaging.

**Key contributions**
- Implemented backend services and message-driven processing workflows.
- Set up RabbitMQ clusters across local, SIT, and production environments.
- Integrated RabbitMQ into NG2 services using EasyNetQ.
- Used database-backed processing and caching to support application workflows.

**Impact:** Centralized email processing and enabled asynchronous communication between application components.

### 3. Task Station — Centralized Job Scheduling

**Role:** Project Contributor · **Team Size:** 5

**Technology:** ASP.NET MVC 4, jQuery, MySQL, RabbitMQ, EasyNetQ, Cron Expressions

Contributed to a centralized internal task scheduling system for managing background jobs across applications.

**Key capabilities**
- Schedule and execute jobs using cron expressions.
- Start, stop, cancel, retry, and monitor task execution.
- Send email notifications to responsible personnel.
- Support asynchronous job processing and operational control.

**Impact:** Provided a common mechanism for managing scheduled tasks and reducing the need for separate scheduling implementations.

### 4. Large-Scale Report Extraction Platform

**Role:** Backend Developer / Technical Contributor

**Technology:** .NET MVC, Web API, SQL Server, SQL-based Task Queue, EPPlus

Developed a reporting and export workflow designed to handle large datasets without blocking interactive web requests.

**Key contributions**
- Supported report extraction of up to approximately 5 million records across periods of up to three years.
- Used a task queue to separate report processing from normal web requests.
- Supported concurrent report requests and user-controlled task cancellation.
- Enabled administrators to terminate long-running tasks.
- Designed the workflow with scalability, availability, and database workload isolation in mind.

**Impact:** Improved the handling of resource-intensive reports and reduced the risk of long-running extraction jobs affecting interactive application performance.

### 5. Cash Service & Product Integrations

**Role:** Key Developer / Technical Contributor

**Technology:** .NET, SQL Server, RabbitMQ, Docker, HAProxy

Contributed to Cash Service and integration initiatives across multiple products and services.

**Key contributions**
- Implemented Cash Service features, including customer credit initialization and customer configuration workflows.
- Delivered integrations for NAP and External Admin.
- Supported database scale-out, view logging, and remaining Cash Service integration work.
- Contributed to migrating Saba Club to Saba Play and integrating products with the Vertex Play vendor.
- Supported the third Games integration initiative.
- Participated in code reviews, production deployments, standby, and hotfixes for business-critical services.

**Impact:** Expanded integration capabilities and supported reliable delivery and operation of critical business services.

## TECHNICAL SKILLS

| Category | Technologies |
|---|---|
| Languages | C#, JavaScript, SQL |
| Backend | .NET, ASP.NET Core, .NET 9, Minimal API, MVC, Web API |
| Frontend | ReactJS, Next.js, jQuery |
| Database | Microsoft SQL Server, MySQL, Stored Procedures |
| Messaging | RabbitMQ, EasyNetQ |
| Caching | Memcached |
| Resilience & Logging | Polly, Serilog |
| ORM & Mapping | Entity Framework Core, AutoMapper |
| Containers & Infrastructure | Docker, HAProxy, Kubernetes, Rancher |
| CI/CD | GitLab CI/CD |
| Architecture | RESTful APIs, distributed systems, asynchronous processing, scalability, high availability |

## ENGINEERING PRINCIPLES

- Apply SOLID principles and design reusable, maintainable, and testable components.
- Prioritize production impact, reliability, and operational simplicity in technical decisions.
- Evaluate trade-offs between delivery speed, system complexity, performance, and maintainability.
- Use code reviews to improve implementation quality and identify potential production risks.
- Prefer configuration-driven and reusable architectures over duplicated product-specific implementations.
- Investigate root causes and implement corrective actions to prevent recurring incidents.

## EDUCATION

**[Degree / Major]**  
[University Name] · [Graduation Year]

## ADDITIONAL INFORMATION

- **Experience:** 16 years in software engineering.
- **Technical leadership:** Leads technical projects and coordinates implementation across teams without a formal people-management role.
- **Production ownership:** Experienced in production deployments, incident response, troubleshooting, and operational support.
- **Career focus:** Staff / Senior Staff Software Engineer, Backend Engineering, System Architecture, and Technical Leadership.
