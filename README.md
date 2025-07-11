# Echomate Lite 🌍  
A Cloud-Based Social Media Platform for Sharing and Reminiscing Memories

## 🧠 Executive Summary

Echomate Lite is a full-stack social media platform designed to help users capture, organize, and share life’s precious moments through photos, videos, text notes, and location tagging. Built with the MERN stack (MongoDB, Express.js, React.js, Node.js) and deployed on AWS, it offers scalability, reliability, and performance.

This project was developed as part of a university capstone and demonstrates hands-on experience in cloud deployment, DevOps, frontend/backend integration, and AWS architecture.

---

## 🎯 Key Features

- 📸 Memory Capture & Organization – Chronological, thematic, and user-tag based sorting.
- 🔐 Selective Sharing & Collaboration – Share memories with friends/family; allow others to add their perspectives.
- 👥 User Profiles – With bio, profile picture, and personal wall.
- ❤️ Social Interactions – Like, comment, and engage with others' posts.
- 🔄 CI/CD Pipeline – Automated deployment using AWS CodePipeline.
- 🛡️ Security Best Practices – IAM, Security Groups, VPC, and secure MongoDB Atlas integration.

---

## ⚙️ Tech Stack & Architecture

### Frontend
- React.js, HTML5, CSS3
- Hosted on Amazon S3
- Distributed via Amazon CloudFront

### Backend
- Node.js, Express.js
- Deployed on Amazon EC2

### Database & Storage
- MongoDB Atlas (Managed NoSQL DB)
- Amazon S3 for media storage

### DevOps & Security
- AWS CodePipeline, CodeDeploy for CI/CD
- Amazon CloudWatch for monitoring
- Amazon VPC, IAM, and Security Groups for secure networking

---

## 🖼️ Architecture Diagram

See full deployment architecture and data flow in the final project report.

---

## 📝 Project Documentation

📘 Final Project Report with Screenshots & Architecture:  
[View Report (PDF)](./docs/Final_project_report_github.pdf)


## Implementation: 
Screenshots of the deployment: 

<img width="762" height="333" alt="image" src="https://github.com/user-attachments/assets/f02d84e6-e5e5-495d-bc51-cea6896b62e7" />

<img width="771" height="340" alt="image" src="https://github.com/user-attachments/assets/ce6881c4-beb4-4cdf-9bb7-554b500ea9d1" />

<img width="771" height="335" alt="image" src="https://github.com/user-attachments/assets/8b031520-3709-459b-83d2-9896bfa7d8a1" />
<img width="800" height="355" alt="image" src="https://github.com/user-attachments/assets/056418ad-e746-49a0-ab1c-83ee39bd472a" />

<img width="781" height="353" alt="image" src="https://github.com/user-attachments/assets/61f1865c-cd73-4c48-a04d-77670956cf44" />

<img width="770" height="343" alt="image" src="https://github.com/user-attachments/assets/2da72664-dc18-46eb-a0db-e5d17702288a" />

<img width="787" height="297" alt="image" src="https://github.com/user-attachments/assets/92ee3611-e5a3-4443-a1bb-fb684250bfc1" />

<img width="801" height="347" alt="image" src="https://github.com/user-attachments/assets/a64a86bb-81dc-4431-85f1-92b5afdd69ef" />












---

## 💻 How to Run Locally

1. Clone the repositories:
   ```bash
   git clone https://github.com/maheshnfunde2000/echomate-frontend.git
   git clone https://github.com/maheshnfunde2000/echomate-backend.git
2, backend setup 
cd echomate-backend
npm install
npm start

3, frontend setup
cd ..echomate-frontend\client
npm install
npm start

4, Add environment variables as required (Mongo URI, JWT secret, AWS keys if applicable).

## AWS Cost Estimation
Monthly Estimate: ~$103.88
Yearly Estimate: ~$1,246.56
Full breakdown available in the project report.

📚 Learning Outcomes
Designed and deployed a secure, scalable MERN-based app on AWS.

Implemented CI/CD pipelines and frontend CDN optimization.

Gained hands-on experience with core AWS services including EC2, S3, VPC, and CloudWatch.

Applied system design thinking for a modular, cloud-optimized application.

📎 Repository Links
Frontend: https://github.com/maheshnfunde2000/echomate-frontend

Backend: https://github.com/maheshnfunde2000/echomate-backend

Main Project: https://github.com/maheshnfunde2000/echomate

🙋‍♂️ Author
Mahesh Funde
Email: maheshnfunde2000@gmail.com
LinkedIn: https://www.linkedin.com/in/mahesh-cloud



