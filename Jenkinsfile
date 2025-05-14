currentBuild.displayName = env.env+"-#"+currentBuild.number
properties([parameters([choice(choices: ['dev', 'test'], description: 'Please select environment', name: 'env')])])
pipeline {
    agent any
        environment {
            HOME = '$WORKSPACE'
            DEFAULT_JVM_OPTS='-Xmx1G'
            STAND = "${params.env}"
            }
    stages {
        stage('Delete old data') {
            agent {label 'master'}
            steps {
                sh 'rm -rf $WORKSPACE/allure-results'
                }
        }

        stage('Run tests') {
            agent { dockerfile true }   
            steps {
                script {
                    if (env.env == 'dev'){
                        withCredentials([
                        string(credentialsId: 'epicdev_service_config_autotests_env_auth_secret', variable: 'auth_secret'),
                        string(credentialsId: 'epicdev_service_config_autotests_env_password_db_host', variable: 'db_host')
                        ]) {
                            configFileProvider([
                                configFile(fileId: 'epicdev_service_config_autotests_env', variable: 'env')
                                ]) {
                                    sh "cp ${env.env} ./.env"
                                    sh '''sed -i "s|^AUTH_SECRET=JENKINS_WILL_ADD|AUTH_SECRET=${auth_secret}|g" ./.env'''
                                    sh '''sed -i "s|^PASSWORD_DB_HOST=JENKINS_WILL_ADD|PASSWORD_DB_HOST=${db_host}|g" ./.env'''
                                }
                            }
                    }
                    else {
                        withCredentials([
                        string(credentialsId: 'epictest_service_config_autotests_env_auth_secret', variable: 'auth_secret'),
                        string(credentialsId: 'epictest_service_config_autotests_env_password_db_host', variable: 'db_host')
                        ]) {
                            configFileProvider([
                                configFile(fileId: 'epictest_service_config_autotests_env', variable: 'env')
                                ]) {
                                    sh "cp ${env.env} ./.env"
                                    sh '''sed -i "s|^AUTH_SECRET=JENKINS_WILL_ADD|AUTH_SECRET=${auth_secret}|g" ./.env'''
                                    sh '''sed -i "s|^PASSWORD_DB_HOST=JENKINS_WILL_ADD|PASSWORD_DB_HOST=${db_host}|g" ./.env'''
                                }
                            }

                    }
                    catchError(buildResult: 'SUCCESS', stageResult: 'FAILURE') {
                        sh 'npm install'
                        sh 'rm -rf allure-results/*'


                        script{try {sh "npm run test"
                        } catch (error) {
                            throw error
                        } finally {
                        stash name: 'allure-results', includes: 'allure-results/*'
                        }
                        }
                    }
                }
            }
        }

         stage('Build report') {
             agent {label 'master'}
            steps {
                unstash 'allure-results'
              script {
                allure([
                includeProperties: false,
                jdk: '',
                properties: [],
                reportBuildPolicy: 'ALWAYS',
                results: [[path: 'allure-results']]
                ])
                }
            }
        }
    }
    post{
            always{
                cleanWs()
            }
        }
}
