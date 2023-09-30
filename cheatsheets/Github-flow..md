# Connecting Existing Repo to Github

## Step 1: Clone the project
  - Make sure to read the project README for detailed instructions on how to clone using tiged
  - Make sure to choose the Part-Time option

## Step 2: Create a repo on Github
  - Go to github.com
  - On the top right, click the + sign dropdown
  - Select `New repository`
  - Choose an owner
  - Give a Repository name
  - Make it private
  - Can ignore the other options
  - Hit Create repository button at the bottom
  - Copy the link that gets generated
    - Should look something like this: `https://github.com/<your-username>/<name-of-repo>.git`

## Step 3: Setup local repo
  - Go back to your terminal
  - `cd` into the project folder you just downloaded
  - Run `git init`
    - You can make sure it was successful by running `git status`
    - Untracked files should show up in red
  - Run `git add .` to move files to staging area
    - To check, run `git status` again and now files should show up as green
  - Run `git commit -m <your-message-here>` to commit changes
    - To check, run `git status` again and it should show `nothing to commit`

## Step 4: Connect local repo to Github repo
  - Make sure you have the copied link of your Github repo from Step 2
  - Run `git remote add origin` and paste in your link
  - Run `git push -u origin main`
  - Should see it pushing up some refs
  - Double check by refreshing your Github page and should see the code there

## Step 5: Profit