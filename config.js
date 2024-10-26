const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Nigeria";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349034610940";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",

  sessionName:process.env.SESSION_ID || "SUHAIL_22_03_10_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNjksXG4gICAgICAgIDE3LFxuICAgICAgICA3OCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNzEsXG4gICAgICAgIDUxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDYxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDQyLFxuICAgICAgICA4MCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNTUsXG4gICAgICAgIDY4LFxuICAgICAgICA2NSxcbiAgICAgICAgODUsXG4gICAgICAgIDY0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjA4LFxuICAgICAgICAzNSxcbiAgICAgICAgNzksXG4gICAgICAgIDEyNCxcbiAgICAgICAgNzZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjU1LFxuICAgICAgICAzNCxcbiAgICAgICAgNTQsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTA3LFxuICAgICAgICA4OCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTM0LFxuICAgICAgICAzOCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjIsXG4gICAgICAgIDYyLFxuICAgICAgICA3NCxcbiAgICAgICAgMTgwLFxuICAgICAgICA5NyxcbiAgICAgICAgMjEyLFxuICAgICAgICA5NSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMjksXG4gICAgICAgIDMyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTAyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDQxLFxuICAgICAgICAyM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDMzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjE2LFxuICAgICAgICA0NCxcbiAgICAgICAgOTgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNDksXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjUyLFxuICAgICAgICA5MSxcbiAgICAgICAgMjM1LFxuICAgICAgICA4NyxcbiAgICAgICAgMTExLFxuICAgICAgICA2MyxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDExNCxcbiAgICAgICAgNjQsXG4gICAgICAgIDQ2LFxuICAgICAgICA3NyxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTgzLFxuICAgICAgICA2MyxcbiAgICAgICAgMTA1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MCxcbiAgICAgICAgNzYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTQ3LFxuICAgICAgICA3NyxcbiAgICAgICAgNjEsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMzgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNixcbiAgICAgICAgMjQ0LFxuICAgICAgICAxODYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjI2LFxuICAgICAgICAyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDcxLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTM0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMjksXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjA1LFxuICAgICAgICA4OSxcbiAgICAgICAgMTE5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDM1LFxuICAgICAgICA2MCxcbiAgICAgICAgNzgsXG4gICAgICAgIDMwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTM2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDYxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDY5LFxuICAgICAgICAxODksXG4gICAgICAgIDIxMyxcbiAgICAgICAgNTMsXG4gICAgICAgIDY3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIxLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTY4LFxuICAgICAgICA2MSxcbiAgICAgICAgNjMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMzUsXG4gICAgICAgIDAsXG4gICAgICAgIDk4LFxuICAgICAgICAyNCxcbiAgICAgICAgMjMyLFxuICAgICAgICA0NixcbiAgICAgICAgODIsXG4gICAgICAgIDk1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTU3LFxuICAgICAgICA2NixcbiAgICAgICAgMTgwLFxuICAgICAgICAyMDgsXG4gICAgICAgIDc3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIwLFxuICAgICAgICA1MSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDE2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTY0LFxuICAgICAgICA5OSxcbiAgICAgICAgMjAsXG4gICAgICAgIDIzLFxuICAgICAgICA5MCxcbiAgICAgICAgNTAsXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICA3MixcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICA5OVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA4MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU2LFxuICAgICAgICA3MSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDI1LFxuICAgICAgICAxODAsXG4gICAgICAgIDgzLFxuICAgICAgICAxOCxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDM4LFxuICAgICAgICA5MSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDI0MixcbiAgICAgICAgNTIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTMxLFxuICAgICAgICA4NSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDEsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTg4LFxuICAgICAgICA2OCxcbiAgICAgICAgNTYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMzAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTM3LFxuICAgICAgICA0MSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTg4LFxuICAgICAgICA3NCxcbiAgICAgICAgMjIxLFxuICAgICAgICAyLFxuICAgICAgICAxNixcbiAgICAgICAgMjI0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTQ5LFxuICAgICAgICA2MCxcbiAgICAgICAgODksXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDM5LFxuICAgICAgICA1NCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMDksXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDMwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDIyMixcbiAgICAgICAgMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogOTMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiZWt3aXlVZEdnS2NTZk80U2ZoN1JhRVhaMGMyWVRvdm11UHJMbklIOGFIaz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiOHB4Q2VZOGtSRGk5UkxfNVYzeTlnQVwiLFxuICBcInBob25lSWRcIjogXCJjOWVkMTBiNC1kZGRiLTQzZWUtODQ3Mi04ZDNlYWI0OGRlN2VcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzAsXG4gICAgICAyMjgsXG4gICAgICAxOCxcbiAgICAgIDI5LFxuICAgICAgMTA2LFxuICAgICAgMTQyLFxuICAgICAgMTk4LFxuICAgICAgNTgsXG4gICAgICAxMTUsXG4gICAgICAyMjQsXG4gICAgICA1NCxcbiAgICAgIDE5NixcbiAgICAgIDQxLFxuICAgICAgMTgzLFxuICAgICAgNjQsXG4gICAgICAxNjEsXG4gICAgICAxMDYsXG4gICAgICA3NyxcbiAgICAgIDc3LFxuICAgICAgMjJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTg2LFxuICAgICAgMjQ1LFxuICAgICAgNzksXG4gICAgICAxMjksXG4gICAgICAxOTQsXG4gICAgICAzOCxcbiAgICAgIDkwLFxuICAgICAgODUsXG4gICAgICAxMDAsXG4gICAgICAyNTQsXG4gICAgICAyLFxuICAgICAgMTYwLFxuICAgICAgMjI0LFxuICAgICAgMCxcbiAgICAgIDgyLFxuICAgICAgMjYsXG4gICAgICAzOCxcbiAgICAgIDE1MCxcbiAgICAgIDE0NSxcbiAgICAgIDgwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkw0UVgyMjNDXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDM0NjEwOTQwOjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJEZW1teSBKYXlcIixcbiAgICBcImxpZFwiOiBcIjE1Nzk1MjEzNjcyMDQxMTo1QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xtQnZ1OEJFSnJsNWJnR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwicXY3Zzk3WXdQWFZxbWVnZkRMWGpqOFphVHZXbnVyTkhsbTNVV0FQNzVFZz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJHTFNnSXZrdDVTVzA4aFIyZnVkMFhOUmNLSmI3bWtYczJrNmMvVG9lRE4wdFZ0djJrTFMxNVhoZGpLN2pqc0h6NmxLeWo3WG52MktJbUVLaitTd0FEdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI3SXJlZVB0L09OdEh6MFZDM1o0OExlTGVCYjEvSGVweDhXVXgvdERyZytQVC9ia3FTckVYYS9vMm5DcSt3cTB3YmRnMXpKNWdCM1NpNXdUNERaNXNDQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDM0NjEwOTQwOjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA3MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI5NzIwOTkxLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBTk5EXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFOTkQuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJyUVRNSWJEWlE0c0VJK2tVMjlxN3pEOERvelVUMTBsT0MzZU52Z0VUSnJBPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjUwMjIzNTMyMSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzI5NzIwOTk2NDkxXCJ9Igp9",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
