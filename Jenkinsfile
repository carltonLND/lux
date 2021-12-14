
pipeline {
    agent any

    stages {
        stage("checkout scm"){
            checkout scm
        }
        stage('Docker Build and Push') {
            steps {
                sh "docker-compose -f ./docker-compose.prod.yml build"
                sh "docker images"
                // sh "docker-compose -f  ./docker-compose.prod.yml push"
            }
        }

    }
}
