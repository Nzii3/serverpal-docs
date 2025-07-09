---
title: 💬 Commands
sidebar_position: 2
unlisted: true
---

import Link from '@docusaurus/Link';
import classnames from 'classnames';

# Commands List

:::tip
An argument surrounded in paranthesis: `(@member)` means the argument is **optional**

An argument surrounded in angle branckets: `<@member>` means the argument is **required** for a command to function
:::

:::info
If you are on mobile, you can scroll horizontally to view the entire table.
:::

## General Commands

Usage   | Description 
--- | --- |
<mention>/help</mention> | Shows ServerPal's help menu 
<mention>/settings</mention> | Setup the bot and manage server-specific settings 
<mention>/stats</mention> | Gets statistics for the bot 
<mention>/shards</mention> | Bot shards and there respective info 
<mention>/premium</mention> | See information about ServerPal+ (premium)


## Moderation Commands

Usage | Description |
--- | --- |
<mention>/warn</mention> | Warn a member in the server<br/><span class="badge badge--primary">Severities: low, medium, high</span><br/><span class="badge badge--primary">Required Flags: reason (r)</span>
<mention>/kick</mention> | Kick a member from the server<br/><span class="badge badge--primary">Required Flags: reason (r)</span><br/><span class="badge badge--primary">Optional Flags: proof (p)</span>
<mention>/mute</mention> | Mutes (times out) a member in the server for some time<br/><span class="badge badge--primary">Required Flags: reason (r), time (t)</span><br/><span class="badge badge--primary">Optional Flags: proof (p)</span> | `silence`, `timeout` 
<mention>/unmute</mention> | Unmutes a member in the server<br/><span class="badge badge--primary">There are no flags for this command.</span> | `untimeout` 
<mention>/ban</mention>| Bans a user from the server, optional force ban<br/>[!badge variant="info" text="Required Flags: reason (r)"]<br/>
<mention>/cases</mention> | Get cases for the entire server or a specific user if `@user` is provided
<mention>/case <case_id> </mention>| Get a specific moderation case via ID 
<mention>/mod-stats view</mention> | View moderator statistics for the entire server 
<mention>/mod-stats reset</mention> | Reset the moderator statitics for the entire server


## Applications Commands
Usage   | Description
--- | --- |
<mention>/applications create</mention> | Create an application for the server, shows the application editor. 
<mention>/applications edit</mention>| Edit an existing application in the server, shows the application editor. If a name isn't provided, a menu will popup with names of all existing applications.
<mention>/applications delete</mention> | Delete an existing application in the server. If a name isn't provided, a menu will popup with names of all existing applications. 
<mention>/apply <name> </mention> | Submit (apply for) an application in the server. If a name isn't provided, a menu will popup with names of all enabled applications.