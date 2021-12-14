
pipeline {
    agent any

    stages {
        stage('Docker Build and Push') {
            steps {
                // sh "docker-compose -f ./docker-compose.prod.yml build"
                sh "docker-compose -f  ./docker-compose.prod.yml push"
            }
        }

    }
}
