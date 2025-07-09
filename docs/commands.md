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

Usage   | Description | Aliases | Has slash command?
--- | --- | --- | --- |
`>help` | Shows ServerPal's help menu | - | ✅
`>prefix` | See the server's current prefix | - | ❌
`>settings` | Setup the bot and manage server-specific settings | `config`, `s` | ❌
`>stats` | Gets statistics for the bot | - | ❌
`>shards` | Bot shards and there respective info | - | ❌
`>premium` | See information about ServerPal+ (premium) | `upgrade` | ✅


## Moderation Commands

Usage | Description | Aliases | Has slash command?
--- | --- | --- | --- |
`>warn <member> ?r Reason here ?p example.com/image.png` x| Warn a member in the server<br/><span class="badge badge--primary">Severities: low, medium, high</span><br/><span class="badge badge--primary">Required Flags: reason (r)</span><br/><span class="badge badge--primary">Optional Flags: time (p), proof (p), severity (s)</span><br/><Link className={classnames("button button--outline button--primary button--small")} to="flags">Argument Flags Guide</Link> | - | ❌
`>kick <member> ?r Reason here ?p example.com/image.png` | Kick a member from the server<br/><span class="badge badge--primary">Required Flags: reason (r)</span><br/><span class="badge badge--primary">Optional Flags: proof (p)</span> | - | ❌
`>mute mute <member> ?r Reason here ?t 6h`| Mutes (times out) a member in the server for some time<br/><span class="badge badge--primary">Required Flags: reason (r), time (t)</span><br/><span class="badge badge--primary">Optional Flags: proof (p)</span> | `silence`, `timeout` | ❌
`>unmute <member>` | Unmutes a member in the server<br/><span class="badge badge--primary">There are no flags for this command.</span> | `untimeout` | ❌
`>ban <member> ?r Reason here ?p example.com/image.png` | Bans a user from the server, optional force ban<br/>[!badge variant="info" text="Required Flags: reason (r)"]<br/>[!badge variant="info" text="Optional Flags: proof (p), delete_days (ddays)"] | - | ❌
`>cases (@user)` | Get cases for the entire server or a specific user if `@user` is provided | - | ❌
`>case <case_id>` | Get a specific moderation case via ID | - | ❌
`>mod-stats` | View moderator statistics for the entire server | `modstats` | ❌


## Applications Commands
Usage   | Description | Aliases | Has slash command?
--- | --- | --- | --- |
`>applications create <name>` | Create an application for the server, shows the application editor. | `apps create` | ❌
`>applications edit [name]` | Edit an existing application in the server, shows the application editor. If a name isn't provided, a menu will popup with names of all existing applications. | `apps edit` | ❌
`>applications delete [name]` | Delete an existing application in the server. If a name isn't provided, a menu will popup with names of all existing applications. | `apps delete` | ❌
`>apply [name]` | Submit (apply for) an application in the server. If a name isn't provided, a menu will popup with names of all enabled applications. | - | ❌