pipeline {
    agent any

    environment {
        GIT_CREDENTIALS = credentials('sunil-bombe')
    }

    stages {
        stage('Checkout') {
            steps {
                checkout([$class: 'GitSCM', branches: [[name: 'cypress-cucumber']], userRemoteConfigs: [[url: 'https://github.com/sunil-bombe/cypressautomation.git', credentialsId: GIT_CREDENTIALS]]])
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Run Tests') {
            steps {
                sh './node_modules/.bin/cypress run'
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