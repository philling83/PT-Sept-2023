# Step by step process on how to start a git work flow when pair programming.

# Steps for the Driver:
## Step: 1 Find the project repo
  - Navigate to A/a repo page for problem set / project

![image](https://github.com/AlanDeleon88/gitHubCheatSheet/assets/92609467/23d4b31e-d5d0-4eef-938e-8ed26392b2e4)


## Step: 2 Clone the repo to your machine
   - Copy and paste the npx tiged command into your terminal to clone the repo.
      ![image](https://github.com/AlanDeleon88/gitHubCheatSheet/assets/92609467/a082ba5e-c236-42fe-9f29-e5c3b23e2b50)


   - Navigate to the directory where the repo was cloned.
     ![image](https://github.com/AlanDeleon88/gitHubCheatSheet/assets/92609467/754504f1-8166-4ad7-8790-f85d96bbf9d7)


## Step 3: Create your own repo for the project.
   - Click on the plus in the top right of the github page.
   ![image](https://github.com/AlanDeleon88/gitHubCheatSheet/assets/92609467/862e5d5d-8db5-45aa-98cc-a5248cbb1bd4)

   - Name repo and select owner as yourself, then set repo to private.
    ![image](https://github.com/AlanDeleon88/gitHubCheatSheet/assets/92609467/8e78a888-91c1-4337-8e0a-ba4d80e1b9dc)


## Step 4: Redirect cloned repo to your newly created repo
   - On your new repo page, copy the repo url.
        ![image](https://github.com/AlanDeleon88/gitHubCheatSheet/assets/92609467/71bb2b6e-cd93-4636-95d4-eb52a8e43496)
    - Back in the terminal, make sure you are in the folder you cloned the app academy repo in.
      Run the git commands : 

       ```
       git init
       git add .
       git commit -m "first commit"
       git branch -M main
       git remote add origin <YOUR REPO URL HERE>
       git push -u origin main
           
       ```
   - Check to make sure the repo is now connected to your newly created repo by running the git command: 
      ```
        git remote -v
      ```
      ![image](https://github.com/AlanDeleon88/gitHubCheatSheet/assets/92609467/4328bbee-d3a4-491c-b943-f35ce50745d2)

   - NOTE: Depending on how you set up git-hub-credentials you may or may not need to have to put your github account info.
   - Your new Repo should now be populated with the project files.
    ![image](https://github.com/AlanDeleon88/gitHubCheatSheet/assets/92609467/1f995d6a-5c93-4e9c-8723-b8620a647467)


## Step 5: Invite pair programming partner as a collaborator.
   - Navigate to settings for the git hub repo.
        ![image](https://github.com/AlanDeleon88/gitHubCheatSheet/assets/92609467/1688aa15-54c8-498d-b2a3-621337351c20)
   - Navigate to collaborators then click on 'Add People'
        ![image](https://github.com/AlanDeleon88/gitHubCheatSheet/assets/92609467/63a7799c-44ec-4c39-b79d-cf51ca3c685e)
   - Add partner's github username to collaborators.


# Steps for Navigator
## Step 1: Accept email invitation to the repo.
  - You will be sent an email from your driver's github account for a collaboration invite.
  - Clicking on the link will lead to a page that looks like this:
  ![image](https://github.com/AlanDeleon88/gitHubCheatSheet/assets/92609467/3f719f53-17d2-4ed0-b5a8-19355dccce1b)

## Step 2: Clone partner's repo.
  - Copy the URL from your partner's repo page.
   ![image](https://github.com/AlanDeleon88/gitHubCheatSheet/assets/92609467/2ea36e39-f4be-451a-b8b1-966100e2c12e)
## Step 3: Change into folder where you want to clone the repo.
   - Run the git command  ```git clone <PARTNER'S REPO URL HERE>```

  ![image](https://github.com/AlanDeleon88/gitHubCheatSheet/assets/92609467/24782c37-1a23-4927-9769-ed20a23de8ce)
  - Change into the cloned repo's directory

![image](https://github.com/AlanDeleon88/gitHubCheatSheet/assets/92609467/4fdb7741-3cb2-4d8a-b3f0-383db5d43189)


# Work flow
## When it is time to switch roles the driver will push their code up to the shared repo.
   - Run ```git add .```
   - Run ```git commit -m "Commit message here">``` its good practice to add a commit message that explains what changes were made to the code.
   - Run ```git push```
- Then the navigator will now run ```git pull``` and become the driver.
