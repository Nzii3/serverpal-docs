---
title: 🚧 Advertisement Moderation
---
# Advertisement Moderation

You may be asking, **what is advertisement modertaion**? Well, Sentry's advertisement moderation system — an extension of warning severities — gives advertising servers a way to neatly moderate mis-placed advertisements in their server. With that said, if you have an advertising category you'd like to moderate, this is the system for you!

## Setup
1. Go to the **Advertisement Moderation** section in the <mention>/settings</mention> command.

2. Click the <mention>Channel</mention> button and set a channel where a message will be sent containing all the informatiom about the advertisement warning. Information includes channel (from the `channel` argument), reason, total ad warnings issued against them, and more. This message is customizable via the <mention>Edit Message Template</mention> button.

3. Click <mention>Edit Status</mention> then select the option to enable it, then click <mention>Save</mention>. 

## Issuing Ad. Warnings {#issuing-ad-warnings}
To issue an advertisement warning, simply use the `adwarn` severity in the <mention>/warn</mention> command with the severity as <mention>Adwarn</mention>. 

## FAQ
<details className="customdetails">
<summary>Why do custom buttons not show on the message template?</summary>

At this time, we **do not support custom buttons on the advertisement warning message template** due to possible interference with the appeal button and appeals system.

</details>

<details className="customdetails">
<summary>How do I track how many ad warnings a moderator has issued?</summary>

You can use <mention>/mod-stats view</mention> to view the amount of what moderation action a moderator has issued.

</details>

<details className="customdetails">
<summary>How do I remove an advertisement warning?</summary>

An advertisement warning can be deleted just like any other moderation action. Simply use the <mention>/case</mention> command and click the <mention>Delete</mention> button then <mention>Confirm</mention> to delete the case. The user is not notified of the case being deleted.

</details>