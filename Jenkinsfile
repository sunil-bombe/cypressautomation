pipeline {
    agent any

    environment {
        PATH = "$PATH:/usr/local/bin"
    }

     parameters {
        string(name: 'BUILD_ENV', defaultValue: 'development', description: 'Environment to build for (e.g., development, production)')
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
            echo 'clean workspace'
        }
        success{
            echo 'succesfull'
        }
        failure{
            echo 'failed'
        }
    }
}