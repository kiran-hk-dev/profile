"use client";

import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/FadeIn";
import { JenkinsDiagram } from "@/components/learn/JenkinsDiagram";
import { jenkinsPipeline, jenkinsArchitecture, jenkinsSetupSteps } from "@/data/learn/jenkins";
import { ArrowLeft } from "lucide-react";

export default function JenkinsLearnPage() {
  return (
    <div className="py-32 sm:py-40">
      <Container>
        <Link
          href="/learn"
          className="inline-flex items-center gap-1.5 text-sm text-text-muted transition-colors hover:text-text"
        >
          <ArrowLeft size={14} />
          Back to Learn
        </Link>

        <FadeIn className="mt-6">
          <SectionHeading
            index="Jenkins"
            title="Jenkins CI/CD Implementation Guide"
            description="Complete guide to implementing Jenkins CI/CD pipelines - from installation to production deployment with real commands and architecture diagrams."
          />
        </FadeIn>

        {/* Architecture Overview */}
        <FadeIn className="mb-12">
          <h2 className="font-display text-2xl font-semibold text-text mb-6">Architecture Overview</h2>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            <div className="rounded-xl border border-border bg-bg-elevated p-6">
              <h3 className="font-display text-base font-semibold text-accent mb-3">{jenkinsArchitecture.controller.name}</h3>
              <p className="text-sm text-text-muted mb-4">{jenkinsArchitecture.controller.purpose}</p>
              <ul className="space-y-2">
                {jenkinsArchitecture.controller.responsibilities.map((r) => (
                  <li key={r} className="flex items-start gap-2 text-xs text-text-muted">
                    <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {r}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-border bg-bg-elevated p-6">
              <h3 className="font-display text-base font-semibold text-accent-2 mb-3">{jenkinsArchitecture.agents.name}</h3>
              <p className="text-sm text-text-muted mb-4">{jenkinsArchitecture.agents.purpose}</p>
              <ul className="space-y-2">
                {jenkinsArchitecture.agents.responsibilities.map((r) => (
                  <li key={r} className="flex items-start gap-2 text-xs text-text-muted">
                    <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-accent-2" />
                    {r}
                  </li>
                ))}
              </ul>
              <div className="mt-4">
                <span className="text-xs font-semibold text-text-faint font-mono-tag uppercase">Agent Types</span>
                <ul className="mt-2 space-y-1">
                  {jenkinsArchitecture.agents.types.map((t) => (
                    <li key={t} className="text-xs text-text-muted">&bull; {t}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="rounded-xl border border-border bg-bg-elevated p-6">
              <h3 className="font-display text-base font-semibold text-violet-400 mb-3">Integrations</h3>
              <ul className="space-y-3">
                {jenkinsArchitecture.integrations.map((int) => (
                  <li key={int.service}>
                    <span className="text-sm font-medium text-text">{int.service}</span>
                    <p className="text-xs text-text-muted">{int.purpose}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </FadeIn>

        {/* CI/CD Flow Diagram */}
        <FadeIn className="mb-12">
          <h2 className="font-display text-2xl font-semibold text-text mb-6">CI/CD Pipeline Flow</h2>
          <div className="rounded-xl border border-border bg-bg-elevated p-6 overflow-x-auto">
            <pre className="font-mono text-xs text-text-muted whitespace-pre">
{`Developer pushes code to GitHub
        |
        v
GitHub Webhook triggers Jenkins
        |
        v
Jenkins Controller receives trigger
        |
        v
Pipeline starts on Agent
        |
        +----> Stage 1: Checkout (git clone)
        |
        +----> Stage 2: Build (npm install && npm run build)
        |
        +----> Stage 3: Test (npm test)
        |
        +----> Stage 4: Security Scan (trivy fs .)
        |
        +----> Stage 5: Docker Build (docker build -t myapp:$BUILD_NUMBER .)
        |
        +----> Stage 6: ECR Login (aws ecr get-login-password | docker login)
        |
        +----> Stage 7: ECR Push (docker push myapp:$BUILD_NUMBER)
        |
        +----> Stage 8: Deploy to EKS (kubectl set image deployment/web web=myapp:$BUILD_NUMBER)
        |
        +----> Stage 9: Verify (kubectl rollout status deployment/web)
        |
        v
Production Running`}
            </pre>
          </div>
        </FadeIn>

        {/* Interactive Pipeline Stages */}
        <FadeIn className="mb-12">
          <h2 className="font-display text-2xl font-semibold text-text mb-6">Pipeline Stages (Click to Explore)</h2>
          <p className="text-sm text-text-muted mb-6">Click each stage to see what happens, commands used, common errors, and troubleshooting steps.</p>
          <JenkinsDiagram stages={jenkinsPipeline} />
        </FadeIn>

        {/* Setup Steps */}
        <FadeIn className="mb-12">
          <h2 className="font-display text-2xl font-semibold text-text mb-6">Step-by-Step Jenkins Setup</h2>
          <div className="space-y-6">
            {jenkinsSetupSteps.map((step) => (
              <div key={step.step} className="rounded-xl border border-border bg-bg-elevated p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-sm font-bold text-[#0b0f14]">
                    {step.step}
                  </span>
                  <h3 className="font-display text-lg font-semibold text-text">{step.title}</h3>
                </div>
                <p className="text-sm text-text-muted mb-4">{step.explanation}</p>
                {step.commands.length > 0 && (
                  <div className="space-y-1">
                    {step.commands.map((cmd) => (
                      <code key={cmd} className="block rounded-md bg-bg-elevated-2 px-3 py-2 font-mono text-xs text-accent-2">
                        {cmd}
                      </code>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Jenkinsfile Template */}
        <FadeIn className="mb-12">
          <h2 className="font-display text-2xl font-semibold text-text mb-6">Complete Jenkinsfile Template</h2>
          <div className="rounded-xl border border-border bg-bg-elevated p-6 overflow-x-auto">
            <pre className="font-mono text-xs text-accent-2 whitespace-pre">
{`pipeline {
    agent any

    environment {
        AWS_REGION = 'us-east-1'
        ECR_REPO = '123456789.dkr.ecr.us-east-1.amazonaws.com/myapp'
        EKS_CLUSTER = 'my-eks-cluster'
        EKS_NAMESPACE = 'production'
    }

    stages {
        stage('Checkout') {
            steps {
                git url: 'https://github.com/user/repo.git', branch: 'main'
            }
        }

        stage('Build') {
            steps {
                sh 'npm install'
                sh 'npm run build'
            }
        }

        stage('Test') {
            steps {
                sh 'npm test'
            }
        }

        stage('Security Scan') {
            steps {
                sh 'trivy fs --severity HIGH,CRITICAL .'
            }
        }

        stage('Docker Build') {
            steps {
                sh "docker build -t \${ECR_REPO}:\${BUILD_NUMBER} ."
                sh "docker tag \${ECR_REPO}:\${BUILD_NUMBER} \${ECR_REPO}:latest"
            }
        }

        stage('ECR Push') {
            steps {
                sh "aws ecr get-login-password --region \${AWS_REGION} | docker login --username AWS --password-stdin \${ECR_REPO}"
                sh "docker push \${ECR_REPO}:\${BUILD_NUMBER}"
                sh "docker push \${ECR_REPO}:latest"
            }
        }

        stage('Deploy to EKS') {
            steps {
                sh "aws eks update-kubeconfig --name \${EKS_CLUSTER} --region \${AWS_REGION}"
                sh "kubectl set image deployment/web web=\${ECR_REPO}:\${BUILD_NUMBER} -n \${EKS_NAMESPACE}"
            }
        }

        stage('Verify') {
            steps {
                sh "kubectl rollout status deployment/web -n \${EKS_NAMESPACE} --timeout=300s"
            }
        }
    }

    post {
        success {
            slackSend channel: '#deployments', message: "SUCCESS: \${env.JOB_NAME} #\${env.BUILD_NUMBER}"
        }
        failure {
            slackSend channel: '#deployments', message: "FAILED: \${env.JOB_NAME} #\${env.BUILD_NUMBER}"
            sh "kubectl rollout undo deployment/web -n \${EKS_NAMESPACE}"
        }
    }
}`}
            </pre>
          </div>
        </FadeIn>

        {/* Troubleshooting */}
        <FadeIn>
          <h2 className="font-display text-2xl font-semibold text-text mb-6">Common Jenkins Issues & Fixes</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {[
              { issue: "Pipeline fails at ECR Push", cause: "AWS credentials not configured or expired", fix: "Check Jenkins credentials, verify IAM permissions, rotate access keys" },
              { issue: "Docker build fails on agent", cause: "Docker not installed or Jenkins user not in docker group", fix: "sudo apt install docker.io && sudo usermod -aG docker jenkins && sudo systemctl restart jenkins" },
              { issue: "Webhook not triggering", cause: "GitHub webhook URL incorrect or firewall blocking", fix: "Verify URL is http://JENKINS_IP:8080/github-webhook/, check security group allows port 8080" },
              { issue: "Deploy to EKS fails", cause: "kubectl not configured or image not found", fix: "Run aws eks update-kubeconfig, verify image exists in ECR, check node IAM role" },
              { issue: "Tests fail intermittently", cause: "Flaky tests or missing test infrastructure", fix: "Add retry logic, mock external services, ensure test DB is available" },
              { issue: "Build is slow", cause: "No layer caching or large dependencies", fix: "Use Docker layer caching, cache node_modules, use --mount=type=cache in Dockerfile" },
            ].map((item) => (
              <div key={item.issue} className="rounded-lg border border-border bg-bg-elevated p-4">
                <h4 className="font-mono text-xs text-red-400 mb-2">{item.issue}</h4>
                <p className="text-xs text-text-muted mb-2"><strong className="text-text">Cause:</strong> {item.cause}</p>
                <p className="text-xs text-text-muted"><strong className="text-accent-2">Fix:</strong> {item.fix}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </Container>
    </div>
  );
}