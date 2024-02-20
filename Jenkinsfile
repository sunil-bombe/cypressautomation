pipeline {
    agent any

    environment {
        PATH = "$PATH:/usr/local/bin"
    }

     parameters {
        string(name: 'BRANCH', defaultValue: 'cypress-cucumber', description: 'Environment to build for (e.g., development, production)')
        string(name: 'TAGS', defaultValue: '@Regression', description: 'Environment to build for (e.g., development, production)')
        string(name: 'BROWSER', defaultValue: 'chrome', description: 'Environment to build for (e.g., development, production)')
    }

    stages {
        stage('Checkout') {
            steps {
                sh `git checkout ${params.BRANCH}`
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