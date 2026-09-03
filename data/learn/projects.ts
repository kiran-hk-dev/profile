import type { ProjectWalkthrough } from "@/types/learn";

export const projectWalkthroughs: ProjectWalkthrough[] = [
  {
    id: "jenkins-cicd-pipeline",
    title: "Build a Production Jenkins CI/CD Pipeline",
    difficulty: "Advanced",
    description: "Set up Jenkins from scratch, create a complete CI/CD pipeline, and deploy to EKS with zero-downtime.",
    technologies: ["Jenkins", "Docker", "ECR", "EKS", "GitHub", "Kubernetes"],
    architecture: [
      "GitHub",
      "Webhook",
      "Jenkins",
      "Checkout",
      "Build",
      "Test",
      "Docker Build",
      "ECR Push",
      "EKS Deploy",
      "Verify",
      "Production",
    ],
    steps: [
      {
        title: "Launch EC2 Instance for Jenkins",
        explanation: "Create an Ubuntu EC2 instance (t3.medium) that will run the Jenkins controller. Open ports 8080 (Jenkins UI) and 22 (SSH) in the security group.",
        commands: [
          "aws ec2 run-instances --image-id ami-0c55b159cbfafe1f0 --instance-type t3.medium --key-name jenkins-key --security-group-ids sg-abc123 --tag-specifications 'ResourceType=instance,Tags=[{Key=Name,Value=Jenkins-Server}]'",
          "ssh -i jenkins-key.pem ubuntu@PUBLIC_IP",
        ],
        expectedOutput: "InstanceId: i-abc123, State: running, PublicIpAddress: 54.210.1.100",
      },
      {
        title: "Install Jenkins on Ubuntu",
        explanation: "Install Java (required by Jenkins), add the Jenkins apt repository, install Jenkins, and start the service.",
        commands: [
          "sudo apt update && sudo apt upgrade -y",
          "sudo apt install -y openjdk-17-jdk",
          "curl -fsSL https://pkg.jenkins.io/debian-stable/jenkins.io-2023.key | sudo tee /usr/share/keyrings/jenkins-keyring.asc > /dev/null",
          "echo 'deb [signed-by=/usr/share/keyrings/jenkins-keyring.asc] https://pkg.jenkins.io/debian-stable binary/' | sudo tee /etc/apt/sources.list.d/jenkins.list > /dev/null",
          "sudo apt update",
          "sudo apt install -y jenkins",
          "sudo systemctl start jenkins",
          "sudo systemctl enable jenkins",
          "sudo cat /var/lib/jenkins/secrets/initialAdminPassword",
        ],
        expectedOutput: "a1b2c3d4e5f6g7h8 (initial admin password)",
      },
      {
        title: "Install Docker on Jenkins",
        explanation: "Docker is needed to build container images. Add the Jenkins user to the docker group so it can run Docker commands.",
        commands: [
          "sudo apt install -y docker.io",
          "sudo usermod -aG docker jenkins",
          "sudo systemctl restart jenkins",
          "docker --version",
        ],
        expectedOutput: "Docker version 24.0.7, build afdd53b",
      },
      {
        title: "Install AWS CLI and kubectl",
        explanation: "AWS CLI for ECR authentication, kubectl for Kubernetes deployment. Configure AWS credentials.",
        commands: [
          "curl 'https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip' -o 'awscliv2.zip'",
          "unzip awscliv2.zip && sudo ./aws/install",
          "aws configure",
          "curl -LO 'https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl'",
          "sudo install -o root -g root -m 0755 kubectl /usr/local/bin/kubectl",
        ],
        expectedOutput: "AWS CLI configured. kubectl installed.",
      },
      {
        title: "Access Jenkins UI and Install Plugins",
        explanation: "Open http://JENKINS_IP:8080 in browser. Enter initial admin password. Install suggested plugins. Create admin user.",
        commands: [
          "Open browser: http://54.210.1.100:8080",
          "Enter admin password from step 2",
          "Install suggested plugins",
          "Create admin user",
        ],
        expectedOutput: "Jenkins dashboard is accessible",
      },
      {
        title: "Create Jenkins Pipeline (Jenkinsfile)",
        explanation: "Create a Jenkinsfile in your repository root that defines the complete CI/CD pipeline.",
        commands: [
          "Create Jenkinsfile in repository root",
          "Commit and push to GitHub",
        ],
        expectedOutput: "Jenkinsfile pushed to repository",
        diagram: `pipeline {
  agent any
  stages {
    stage('Checkout') {
      steps { git url: 'https://github.com/user/repo', branch: 'main' }
    }
    stage('Build') {
      steps { sh 'npm install && npm run build' }
    }
    stage('Test') {
      steps { sh 'npm test' }
    }
    stage('Security Scan') {
      steps { sh 'trivy fs .' }
    }
    stage('Docker Build') {
      steps { sh "docker build -t myapp:\${BUILD_NUMBER} ." }
    }
    stage('ECR Login') {
      steps {
        sh "aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin 123456789.dkr.ecr.us-east-1.amazonaws.com"
      }
    }
    stage('ECR Push') {
      steps {
        sh "docker tag myapp:\${BUILD_NUMBER} 123456789.dkr.ecr.us-east-1.amazonaws.com/myapp:\${BUILD_NUMBER}"
        sh "docker push 123456789.dkr.ecr.us-east-1.amazonaws.com/myapp:\${BUILD_NUMBER}"
      }
    }
    stage('Deploy to EKS') {
      steps {
        sh "kubectl set image deployment/web web=123456789.dkr.ecr.us-east-1.amazonaws.com/myapp:\${BUILD_NUMBER} -n production"
      }
    }
    stage('Verify') {
      steps { sh 'kubectl rollout status deployment/web -n production' }
    }
  }
  post {
    success { slackSend message: 'Deployment successful!' }
    failure { slackSend message: 'Deployment failed!' }
  }
}`,
      },
      {
        title: "Create ECR Repository",
        explanation: "Create an ECR repository to store Docker images.",
        commands: [
          "aws ecr create-repository --repository-name myapp --region us-east-1",
        ],
        expectedOutput: "repositoryUri: 123456789.dkr.ecr.us-east-1.amazonaws.com/myapp",
      },
      {
        title: "Configure Webhook in GitHub",
        explanation: "Set up a webhook to trigger Jenkins pipeline on every push to the main branch.",
        commands: [
          "GitHub repo > Settings > Webhooks > Add webhook",
          "Payload URL: http://JENKINS_IP:8080/github-webhook/",
          "Content type: application/json",
          "Events: Just the push event",
        ],
        expectedOutput: "Webhook configured. Push to trigger pipeline.",
      },
      {
        title: "Run the Pipeline",
        explanation: "Push code to GitHub to trigger the pipeline. Monitor in Jenkins UI.",
        commands: [
          "git add .",
          "git commit -m 'Trigger CI/CD pipeline'",
          "git push origin main",
          "Open Jenkins UI to monitor build",
        ],
        expectedOutput: "Pipeline runs: Build -> Test -> Docker Build -> ECR Push -> EKS Deploy -> Verify",
      },
    ],
  },
  {
    id: "eks-production-cluster",
    title: "Create a Production EKS Cluster with Terraform",
    difficulty: "Senior",
    description: "Provision a production-grade EKS cluster with VPC, node groups, ALB, and monitoring using Terraform.",
    technologies: ["Terraform", "AWS", "EKS", "VPC", "IAM", "ALB"],
    architecture: [
      "Terraform",
      "VPC",
      "Public Subnets",
      "Private Subnets",
      "EKS Cluster",
      "Node Groups",
      "ALB",
      "Application",
    ],
    steps: [
      {
        title: "Create Terraform Configuration Directory",
        explanation: "Set up the project structure with separate files for providers, VPC, EKS, and variables.",
        commands: [
          "mkdir -p terraform-eks && cd terraform-eks",
          "touch main.tf variables.tf outputs.tf vpc.tf eks.tf",
        ],
        expectedOutput: "Project structure created",
      },
      {
        title: "Configure AWS Provider",
        explanation: "Define the AWS provider and Terraform backend for state management.",
        commands: [],
        expectedOutput: "",
        diagram: `terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
  backend "s3" {
    bucket = "my-terraform-state"
    key    = "eks/terraform.tfstate"
    region = "us-east-1"
    dynamodb_table = "terraform-lock"
    encrypt = true
  }
}

provider "aws" {
  region = var.aws_region
}`,
      },
      {
        title: "Create VPC with Terraform",
        explanation: "Define a VPC with public and private subnets across 2+ Availability Zones.",
        commands: [],
        expectedOutput: "",
        diagram: `resource "aws_vpc" "main" {
  cidr_block           = "10.0.0.0/16"
  enable_dns_support   = true
  enable_dns_hostnames = true
  tags = { Name = "eks-vpc" }
}

resource "aws_subnet" "public" {
  count             = 2
  vpc_id            = aws_vpc.main.id
  cidr_block        = "10.0.\${count.index}.0/24"
  availability_zone = data.aws_availability_zones.available.names[count.index]
  map_public_ip_on_launch = true
  tags = { Name = "public-subnet-\${count.index}" }
}

resource "aws_subnet" "private" {
  count             = 2
  vpc_id            = aws_vpc.main.id
  cidr_block        = "10.0.\${count.index + 10}.0/24"
  availability_zone = data.aws_availability_zones.available.names[count.index]
  tags = { Name = "private-subnet-\${count.index}" }
}`,
      },
      {
        title: "Create IAM Roles for EKS",
        explanation: "Create IAM roles for the EKS cluster and node group with required policies.",
        commands: [],
        expectedOutput: "",
        diagram: `resource "aws_iam_role" "eks_cluster" {
  name = "eks-cluster-role"
  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [{
      Action = "sts:AssumeRole"
      Effect = "Allow"
      Principal = { Service = "eks.amazonaws.com" }
    }]
  })
}

resource "aws_iam_role_policy_attachment" "eks_cluster_policy" {
  policy_arn = "arn:aws:iam::aws:policy/AmazonEKSClusterPolicy"
  role       = aws_iam_role.eks_cluster.name
}

resource "aws_iam_role" "eks_nodes" {
  name = "eks-node-role"
  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [{
      Action = "sts:AssumeRole"
      Effect = "Allow"
      Principal = { Service = "ec2.amazonaws.com" }
    }]
  })
}`,
      },
      {
        title: "Create EKS Cluster",
        explanation: "Define the EKS cluster resource.",
        commands: [],
        expectedOutput: "",
        diagram: `resource "aws_eks_cluster" "main" {
  name     = "my-eks-cluster"
  role_arn = aws_iam_role.eks_cluster.arn
  vpc_config {
    subnet_ids = concat(aws_subnet.public[*].id, aws_subnet.private[*].id)
  }
  depends_on = [aws_iam_role_policy_attachment.eks_cluster_policy]
}`,
      },
      {
        title: "Create Node Group",
        explanation: "Define the managed node group with EC2 instances.",
        commands: [],
        expectedOutput: "",
        diagram: `resource "aws_eks_node_group" "main" {
  cluster_name    = aws_eks_cluster.main.name
  node_group_name = "main-nodes"
  node_role_arn   = aws_iam_role.eks_nodes.arn
  subnet_ids      = aws_subnet.private[*].id
  instance_types  = ["t3.medium"]
  scaling_config {
    desired_size = 2
    min_size     = 1
    max_size     = 5
  }
}`,
      },
      {
        title: "Run Terraform Commands",
        explanation: "Initialize, plan, and apply the infrastructure.",
        commands: [
          "terraform init",
          "terraform fmt",
          "terraform validate",
          "terraform plan",
          "terraform apply -auto-approve",
        ],
        expectedOutput: "Apply complete! Resources: 15 added, 0 changed, 0 destroyed.",
      },
      {
        title: "Configure kubectl",
        explanation: "Update kubeconfig to connect to the new EKS cluster.",
        commands: [
          "aws eks update-kubeconfig --name my-eks-cluster --region us-east-1",
          "kubectl get nodes",
        ],
        expectedOutput: "NAME                           STATUS   ROLES    AGE    VERSION\nip-10-0-1-50.ec2.internal      Ready    <none>   10m    v1.28.3",
      },
    ],
  },
  {
    id: "full-devops-platform",
    title: "Build a Complete DevOps Platform from Scratch",
    difficulty: "Senior",
    description: "End-to-end DevOps platform: GitHub + Jenkins + Docker + ECR + Terraform + EKS + ALB + Route 53 + Monitoring.",
    technologies: ["GitHub", "Jenkins", "Docker", "ECR", "EKS", "Terraform", "ALB", "Route 53", "CloudWatch", "Prometheus", "Grafana"],
    architecture: [
      "Developer",
      "GitHub",
      "Jenkins",
      "Build/Test",
      "Docker",
      "ECR",
      "EKS",
      "ALB",
      "Route 53",
      "Users",
    ],
    steps: [
      {
        title: "1. Setup GitHub Repository",
        explanation: "Create the repository with application code, Dockerfile, Jenkinsfile, and Terraform configuration.",
        commands: [
          "git clone https://github.com/user/devops-platform.git",
          "Create: app/, terraform/, Jenkinsfile, Dockerfile, deployment.yaml",
          "git add . && git commit -m 'Initial project structure' && git push",
        ],
        expectedOutput: "Repository created with all files",
      },
      {
        title: "2. Create ECR Repository",
        explanation: "Create ECR repository for Docker images.",
        commands: [
          "aws ecr create-repository --repository-name myapp --region us-east-1",
          "aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin ACCOUNT.dkr.ecr.us-east-1.amazonaws.com",
        ],
        expectedOutput: "ECR repository created and Docker authenticated",
      },
      {
        title: "3. Provision Infrastructure with Terraform",
        explanation: "Use Terraform to create VPC, EKS, ALB, IAM roles, and Route 53.",
        commands: [
          "cd terraform/",
          "terraform init",
          "terraform plan -out=tfplan",
          "terraform apply tfplan",
        ],
        expectedOutput: "VPC, EKS cluster, node groups, ALB, IAM roles created",
      },
      {
        title: "4. Setup Jenkins Server",
        explanation: "Launch EC2, install Jenkins, Docker, AWS CLI, kubectl.",
        commands: [
          "ssh -i key.pem ubuntu@JENKINS_IP",
          "sudo apt update && sudo apt install -y openjdk-17-jdk jenkins docker.io awscli kubectl",
          "sudo systemctl enable jenkins docker",
        ],
        expectedOutput: "Jenkins running on port 8080",
      },
      {
        title: "5. Create Kubernetes Manifests",
        explanation: "Create deployment.yaml, service.yaml, and ingress.yaml for the application.",
        commands: [
          "kubectl create namespace production",
          "kubectl apply -f deployment.yaml -n production",
          "kubectl apply -f service.yaml -n production",
          "kubectl get pods -n production",
        ],
        expectedOutput: "Pods running in production namespace",
      },
      {
        title: "6. Create Jenkins Pipeline",
        explanation: "Write Jenkinsfile with all stages from checkout to deployment.",
        commands: [
          "Push Jenkinsfile to GitHub",
          "Create pipeline job in Jenkins",
          "Configure GitHub webhook",
        ],
        expectedOutput: "Pipeline created and webhook configured",
      },
      {
        title: "7. Configure ALB Ingress Controller",
        explanation: "Install AWS Load Balancer Controller on EKS for ALB integration.",
        commands: [
          "helm repo add eks https://aws.github.io/eks-charts",
          "helm install aws-load-balancer-controller eks/aws-load-balancer-controller -n kube-system --set clusterName=my-eks-cluster",
          "kubectl apply -f ingress.yaml -n production",
        ],
        expectedOutput: "ALB created and routing traffic to EKS",
      },
      {
        title: "8. Configure Route 53 DNS",
        explanation: "Point your domain to the ALB using Route 53.",
        commands: [
          "aws route53 list-hosted-zones",
          "Create A/Alias record pointing to ALB",
          "Test: curl https://yourdomain.com",
        ],
        expectedOutput: "Domain resolves to application via ALB",
      },
      {
        title: "9. Setup Monitoring",
        explanation: "Install Prometheus + Grafana on EKS for monitoring.",
        commands: [
          "helm repo add prometheus-community https://prometheus-community.github.io/helm-charts",
          "helm install kube-prometheus-stack prometheus-community/kube-prometheus-stack -n monitoring --create-namespace",
          "kubectl port-forward svc/kube-prometheus-stack-grafana 3000:80 -n monitoring",
        ],
        expectedOutput: "Grafana dashboard accessible on localhost:3000",
      },
      {
        title: "10. Test Complete Flow",
        explanation: "Push code to GitHub and verify the entire CI/CD pipeline works end-to-end.",
        commands: [
          "git add . && git commit -m 'Test complete flow' && git push",
          "Watch Jenkins pipeline run",
          "Verify ECR image updated",
          "Verify EKS deployment updated",
          "Access application via domain",
        ],
        expectedOutput: "Code -> Jenkins -> Docker -> ECR -> EKS -> ALB -> Route 53 -> Users",
      },
    ],
  },
];
