To deploy:
- see non_app_specific_manifests for volumes, configMap, databases, namespace, secrests manifests

apis run at run at:
http://localhost:8081/pingapi
http://localhost:8081/todoapi
http://localhost:8081/logapi
check ingress and services to get more details

Namespace for the whole project is 'todo-namespace' as applied in manifests

Consists of logoutput-app, pingpong-app, todo app(front,back and a writer app that that stamps time to file). Each of these apps contain their manifests for applying to the cluster namespace.