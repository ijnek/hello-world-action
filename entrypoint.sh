#!/bin/bash

# Install dependencies
sudo apt install git gh

# Create new distro branch
git checkout rolling
git branch jazzy

# Push new branch to GitHub
git push -u origin jazzy

# Update entry in rosdistro
