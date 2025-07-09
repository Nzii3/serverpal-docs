---
title: 🔑 Permits
---

import { DiscordTime, DiscordBold, DiscordItalic, DiscordUnderlined, DiscordInlineCode, DiscordSpoiler, DiscordQuote, DiscordActionRow, DiscordAttachment, DiscordAttachments, DiscordButton, DiscordCommand, DiscordEmbed, DiscordEmbedField, DiscordEmbedFields, DiscordEmbedDescription, DiscordEmbedFooter, DiscordInvite, DiscordMention, DiscordMessage, DiscordMessages, DiscordReaction, DiscordReactions, DiscordReply, DiscordSystemMessage, DiscordTenorVideo, DiscordThread, DiscordThreadMessage, DiscordCustomEmoji } from "@skyra/discord-components-react";

:::warning
ServerPal uses a strict permits only system for use of it's commands. Therefore, if a user has Discord permissions for a command (such as kick members), they will still need to have a role with a permit that has the kick members permission.

> **Server administrators are the only users that bypass any permission.**
:::


### Configuring {#configuring-permits}
1. Use the <mention>/settings</mention> command and navigate to the <span class="badge badge--primary">Permits</span> tab using the dropdown. 

2. On the permits page, you will see all pre-defined levels of permits, their (customizable) assigned permissions, and their (customizable) assigned roles. Any role listed attached to a permit can use any command that requires the attached permisisons. The permissions should be pretty straight forward to what commands they relate to. 

<details className="customdetails" open>
<summary>🔑 Permissions Key</summary>

**Manage Cases** <span style={{'color': '#5865f2'}}>→</span> <mention>/case</mention> and <mention>/cases</mention>. Can edit/delete cases.

**Manage Application Responses** <span style={{'color': '#5865f2'}}>→</span> *Can accept and deny application responses.*

**Warn Members** <span style={{'color': '#5865f2'}}>→</span> <mention>/warn</mention>, can use any severity

**Mute Members** <span style={{'color': '#5865f2'}}>→</span> <mention>/mute</mention> and <mention>/unmute</mention>.

**Kick Members** <span style={{'color': '#5865f2'}}>→</span> <mention>/kick</mention>

**Ban Members** <span style={{'color': '#5865f2'}}>→</span> <mention>/ban</mention> and <mention>/unban</mention>

**Manage Lockdown** <span style={{'color': '#5865f2'}}>→</span> <mention>/lockdown</mention> **(coming soon)**

**Full Control** <span style={{'color': '#5865f2'}}>→</span> *Gives full control over settings and all commands.*

</details>