import type { DevOpsCommand } from "@/types/learn";

export const commands: DevOpsCommand[] = [
  { command: "pwd", category: "Linux", description: "Print working directory", expectedOutput: "/home/ec2-user" },
  { command: "ls -la", category: "Linux", description: "List all files with details and hidden files", expectedOutput: "drwxr-xr-x  ec2-user ec2-user 4096 Jun 10 10:00 .\n-rw-r--r--  ec2-user ec2-user  220 Jun 10 09:00 .bashrc" },
  { command: "mkdir -p /app/logs", category: "Linux", description: "Create nested directories", expectedOutput: "" },
  { command: "cat /etc/hosts", category: "Linux", description: "Display file contents", expectedOutput: "127.0.0.1   localhost\n::1         localhost" },
  { command: "tail -f /var/log/app.log", category: "Linux", description: "Follow file changes in real-time", expectedOutput: "2024-01-15 10:30:00 INFO Application started" },
  { command: "grep -r 'error' /var/log/", category: "Linux", description: "Search text recursively in files", expectedOutput: "/var/log/app.log:2024-01-15 ERROR: Connection refused" },
  { command: "ps aux | grep nginx", category: "Linux", description: "List running processes filtered", expectedOutput: "root  1234  0.0  0.1  nginx: master process" },
  { command: "free -h", category: "Linux", description: "Check memory usage", expectedOutput: "              total    used    free   shared  buff/cache  available\nMem:          7.7G    2.1G    3.2G    256M       2.4G       5.2G" },
  { command: "df -h", category: "Linux", description: "Check disk space", expectedOutput: "Filesystem      Size  Used Avail Use% Mounted on\n/dev/xvda1       30G   15G   14G  52% /" },
  { command: "ssh -i key.pem ec2-user@54.210.1.100", category: "Linux", description: "SSH remote connection", expectedOutput: "Last login: Mon Jan 15 10:00:00 2024\n[ec2-user@ip-10-0-1-50 ~]$" },
  { command: "curl -I https://example.com", category: "Linux", description: "Test HTTP endpoint", expectedOutput: "HTTP/2 200\ncontent-type: text/html" },

  { command: "git clone https://github.com/user/repo.git", category: "Git", description: "Clone a remote repository", expectedOutput: "Cloning into 'repo'...\nremote: Enumerating objects: 100, done." },
  { command: "git add .", category: "Git", description: "Stage all changes for commit", expectedOutput: "" },
  { command: "git commit -m 'Add login feature'", category: "Git", description: "Record staged changes with message", expectedOutput: "[main abc1234] Add login feature\n 1 file changed, 50 insertions(+)" },
  { command: "git push origin main", category: "Git", description: "Push commits to remote", expectedOutput: "Enumerating objects: 5, done.\nTo https://github.com/user/repo.git\n   abc1234..def5678  main -> main" },
  { command: "git pull origin main", category: "Git", description: "Fetch and merge remote changes", expectedOutput: "Already up to date." },
  { command: "git rebase -i HEAD~3", category: "Git", description: "Interactively rebase last 3 commits", expectedOutput: "pick abc1234 First commit\npick def5678 Second commit\npick ghi9012 Third commit" },

  { command: "docker build -t myapp:1.0 .", category: "Docker", description: "Build image from Dockerfile", expectedOutput: "Step 1/5 : FROM node:18-alpine\nSuccessfully built abc123\nSuccessfully tagged myapp:1.0" },
  { command: "docker run -d -p 80:80 --name web nginx", category: "Docker", description: "Create and start a container", expectedOutput: "abc123def456789" },
  { command: "docker ps", category: "Docker", description: "List running containers", expectedOutput: "CONTAINER ID  IMAGE   STATUS        NAMES\nabc123def456  nginx   Up 10 minutes web-server" },
  { command: "docker logs web-server --tail 100", category: "Docker", description: "View container logs", expectedOutput: "2024-01-15 10:30:00 [notice] start worker process" },
  { command: "docker exec -it web-server /bin/bash", category: "Docker", description: "Execute command inside container", expectedOutput: "root@abc123:/#" },
  { command: "docker push 123456789.dkr.ecr.us-east-1.amazonaws.com/myapp:1.0", category: "Docker", description: "Push image to ECR", expectedOutput: "The push refers to repository [...]\nabc123: digest: sha256:... size: 1362" },

  { command: "kubectl get pods -n production", category: "Kubernetes", description: "List pods in namespace", expectedOutput: "NAME                    READY   STATUS    RESTARTS\nweb-abc123-def456       1/1     Running   0" },
  { command: "kubectl get nodes", category: "Kubernetes", description: "List cluster nodes", expectedOutput: "NAME         STATUS   ROLES    AGE    VERSION\nnode-1       Ready    worker   30d    v1.28.3" },
  { command: "kubectl describe pod web-abc123", category: "Kubernetes", description: "Get detailed pod info", expectedOutput: "Name: web-abc123\nNamespace: production\nStatus: Running\nEvents:\n  Normal  Started  10m  kubelet  Started container" },
  { command: "kubectl logs web-abc123 -n production", category: "Kubernetes", description: "View pod logs", expectedOutput: "2024-01-15 10:30:00 INFO Server started on port 8080" },
  { command: "kubectl apply -f deployment.yaml", category: "Kubernetes", description: "Apply YAML configuration", expectedOutput: "deployment.apps/web created" },
  { command: "kubectl rollout status deployment/web", category: "Kubernetes", description: "Check deployment rollout status", expectedOutput: "deployment successfully rolled out" },
  { command: "kubectl scale deployment web --replicas=5", category: "Kubernetes", description: "Scale a deployment", expectedOutput: "deployment.apps/web scaled" },

  { command: "aws ec2 describe-instances", category: "AWS CLI", description: "List EC2 instances", expectedOutput: "[\n  { \"ID\": \"i-abc123\", \"State\": \"running\", \"IP\": \"54.210.1.100\" }\n]" },
  { command: "aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin 123456789.dkr.ecr.us-east-1.amazonaws.com", category: "AWS CLI", description: "Authenticate Docker to ECR", expectedOutput: "Login Succeeded" },

  { command: "terraform init", category: "Terraform", description: "Initialize Terraform project", expectedOutput: "Terraform has been successfully initialized!" },
  { command: "terraform plan", category: "Terraform", description: "Preview infrastructure changes", expectedOutput: "Plan: 3 to add, 1 to change, 0 to destroy." },
  { command: "terraform apply -auto-approve", category: "Terraform", description: "Apply infrastructure changes", expectedOutput: "Apply complete! Resources: 3 added, 1 changed, 0 destroyed." },
];
