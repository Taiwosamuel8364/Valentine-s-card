# 📬 How to Get Notified When She Says YES! 💖

You have **3 easy options** to receive instant notifications. Choose the one that works best for you!

---

## 🎯 Option 1: Email Notification (EASIEST!)

**No signup required! Takes 2 minutes.**

1. Open `script.js` file
2. Find this line (around line 27):
   ```javascript
   const YOUR_EMAIL = "";
   ```
3. Add your email:
   ```javascript
   const YOUR_EMAIL = "youremail@example.com";
   ```
4. **Important**: The first time someone clicks YES, you'll get a confirmation email from FormSubmit. Click the link to activate.
5. Done! You'll now get emails whenever she says YES! 📧

---

## 💬 Option 2: Discord Notification (INSTANT!)

**Get instant Discord messages. Takes 3 minutes.**

1. Go to your Discord server
2. Click **Server Settings** → **Integrations** → **Webhooks**
3. Click **New Webhook**
4. Give it a name (e.g., "Valentine Notifier")
5. Choose a channel where you want notifications
6. Click **Copy Webhook URL**
7. Open `script.js` and paste the URL:
   ```javascript
   const DISCORD_WEBHOOK_URL = "https://discord.com/api/webhooks/...";
   ```
8. Done! You'll get instant Discord messages! 🎉

---

## 📱 Option 3: Telegram Notification (INSTANT!)

**Get instant Telegram messages. Takes 5 minutes.**

### Step 1: Create a Bot

1. Open Telegram and search for **@BotFather**
2. Start a chat and send: `/newbot`
3. Follow instructions to name your bot
4. Copy the **Bot Token** (looks like: `123456789:ABCdefGHIjklMNOpqrsTUVwxyz`)

### Step 2: Get Your Chat ID

1. Search for **@userinfobot** on Telegram
2. Start a chat and send any message
3. Copy your **Chat ID** (it's a number)

### Step 3: Configure

1. Open `script.js`
2. Add your credentials:
   ```javascript
   const TELEGRAM_BOT_TOKEN = "123456789:ABCdefGHIjklMNOpqrsTUVwxyz";
   const TELEGRAM_CHAT_ID = "your_chat_id";
   ```
3. Done! You'll get instant Telegram messages! 📲

---

## 🚀 You Can Enable Multiple Methods!

Want notifications everywhere? Just set up all three! You'll get:

- ✉️ Email backup
- 💬 Instant Discord alert
- 📱 Instant Telegram message

---

## 🔍 Testing

After setting up, you can test by:

1. Opening the website
2. Clicking the YES button yourself
3. You should receive a notification!

---

## 💡 Pro Tips

- **Email** is best if you want a permanent record
- **Discord** is great if you're always on Discord
- **Telegram** is perfect if you want mobile notifications
- Set up **multiple methods** for backup!

---

## ❓ Troubleshooting

**Not receiving notifications?**

- **Email**: Check spam folder. Make sure you clicked the confirmation link.
- **Discord**: Make sure the webhook URL is correct and the channel exists.
- **Telegram**: Ensure bot token and chat ID are correct. Start a chat with your bot first.

**Still not working?**

- Open browser console (F12) to check for errors
- Make sure you saved the `script.js` file after editing
- Refresh the webpage after making changes

---

Good luck with your Valentine's proposal! 💕
