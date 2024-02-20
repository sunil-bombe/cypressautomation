pipeline {
    agent any

    environment {
        PATH = "$PATH:/usr/local/bin"
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
                sh 'node runner.js'
            }
        }
    }

    post {
        always {
            cleanWs()
        }
        success{
            echo 'succesfull'
        }
        failure{
            echo 'failed'
        }
    }
}