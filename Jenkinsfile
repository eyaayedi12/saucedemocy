pipeline{
    agent {
        docker{
            image "cypress/browsers:latest"
            args '--entrypoint=' 
        }
    }
    parameters{
        choice(name: 'BROWSER',choices:['edge','chrome'])
        choice(name: "TEST_TYPE",choices:['@smoke','@regression','@checkout','@regression','@login','@addcart'],description: 'Choisir le type de test à exécuter')
    }

    stages{
             stage('installer npm'){
            steps{
                echo 'installer '
                
                sh 'npm ci'
            }

        }
        
        stage('lancer les tests '){
            steps{
                echo "Exécution des tests Cypress avec tag ${params.TEST_TYPE} sur ${params.BROWSER}"
                    
                    sh """
                        npx cypress run \
                          --browser ${params.BROWSER} \
                          --env grepTags=${params.TEST_TYPE}
                    """
            }

        }
    }
      post{
        always{
            archiveArtifacts artifacts: 'cypress/reports/**/*.*', followSymlinks: false
        }
    }
}