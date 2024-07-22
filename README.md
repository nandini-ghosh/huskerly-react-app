# Huskerly React App
Front-end repo for the Huskerly chat application. This repository contains the source code for the AWS Amplify web app. This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). The Huskerly app is a real-time chat application that helps organizations maintain teams with their own unique communication channels.

## User Groups

### Regular Members
These members are invited to an existing organization by organization administrators. They are a part of one or many teams.

**Features:**
- Joining a group (through an invite link) and signing up for an account on Huskerly
- Viewing the group, teams and channels (view only for public channels in other teams, no access to private channels in other teams)
- Viewing the team(s) / channels they are a part of
- Viewing and editing their user profile
- Adding a new team and team members to that team
- Adding a channel

> Denoted by 'R'

### Organization Administrators
This member registers organizations on Huskerly and invites members to them. They can moderate the organization and assign assistant admins to help them.

**Features:**
- Signing up for an account on Huskerly and registering a new group
- Adding new members to a group (post registration approval from a System Administrator)
- Viewing and editing the group, teams and streams
- Viewing and editing their user profile
- Adding a new team and team members to that team
- Adding a channel
- Suspending and reinstating access for the members in the organization
- Editing the organization details
- Appointing assistant admins and switching organization admin roles to an assistant

> Denoted by 'OA'

### Assistant Administrators
These members are assigned by the Organization Administrator to moderate the organization.

**Features:**
- Signing up for an account on Huskerly and registering a new group
- Adding new members to a group (post registration approval from a System Administrator)
- Viewing and editing the group, teams and streams
- Viewing and editing their user profile
- Adding a new team and team members to that team
- Adding a channel
- Suspending and reinstating access for the members in the organization

> Denoted by 'AA'

### System Administrators
These members approve the registration of organizations on Huskerly and manages the organizations if needed.

**Features:**
- Approving new organizations and editing them
- Appointing organization admins and editing them
- Can moderate any message in any stream in any organization
- Viewing and editing their user profile
- Suspending and reinstating access for the members in any organization

> Denoted by 'S'


## Flows and Features

**Flow** - A sequence of related screens in the wireframes for this project which can be found on this [Figma Board](https://www.figma.com/design/RWtpxoFoTCkRRjtVjMO8iN/Huskerly?node-id=0-1&t=SpAgBPqd4KntDM0w-1)
**Feature** - A task that can be completed on Huskerly

Flows are designed with specific user groups in mind (marked with their respective denotations).

### Flow 1 : Login and User Roles
`Status: IN PROGRESS`

**Feature List**
- Log in / Sign up with AWS Cognito
- Joining an existing organization
- Registering a new organization
- Authenticate user invites and emails with AWS Cognito
- View username and email
- View user's organization

