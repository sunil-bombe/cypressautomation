pipeline {
    agent any

    environment {
        PATH = "$PATH:/usr/local/bin/node/npm"
    }

    stages {
        stage('Checkout') {
            steps {
                sh 'git checkout cypress-cucumber'
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Run Tests') {
            steps {
                sh 'npx cypress run'
            }
        }
    }

    post {
        always {
            // Clean up workspace
            cleanWs()
        }
    }
}