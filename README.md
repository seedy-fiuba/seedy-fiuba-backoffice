# Backoffice Seedy Fiuba

## Run locally
```
    npm install
    npm start
```

## Deploy heroku
1. Configure github repo with heroku
    ```shell
   heroku git:remote -a seedy-fiuba-backoffice-fe
   ```
   
2. Push to heroku based on branch
   ```shell
   git push heroku $BRANCH_NAME:master
   ```