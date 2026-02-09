# 💖 Valentine's Card Website

A fun, interactive Valentine's Day card where the "No" button runs away and the "Yes" button is easy to click!

## 🎯 Features

- ❤️ Beautiful red and white design with love graphics
- 🏃 "No" button that escapes when you try to click it
- ✨ Confetti celebration when "Yes" is clicked
- 🔔 Multiple notification options (Email, Discord, Telegram)
- 🔗 Shareable personalized links
- 📱 Mobile friendly

## 🚀 How to Use

### For Yourself

1. **Open the website** - Just open `index.html` in your browser
2. **Set up notifications** (optional):
   - Enter your email for instant alerts
   - OR add your Discord webhook
   - OR configure Telegram bot
   - OR skip if you don't want notifications
3. **Share the card** - Send the link to your special someone!

### For Your Friends

This site works for EVERYONE! Your friends can:

1. Open the same website
2. Enter their own notification details
3. Get their own personalized link
4. Share it with their special someone

**Each person gets their own notifications** - no code editing required!

## 🔔 Notification Setup

### Option 1: Email (Easiest!) 📧

- Just enter your email address
- First time: Click confirmation link in email
- Done! You'll get emails when they say YES

### Option 2: Discord 💬

1. Go to Discord Server Settings → Integrations → Webhooks
2. Create a webhook and copy the URL
3. Paste it in the setup form

### Option 3: Telegram 📱

1. Create a bot with @BotFather on Telegram
2. Get your Chat ID from @userinfobot
3. Enter both in the setup form

## 🔗 How Sharing Works

After setup, you get a personalized link like:

```
yoursite.com/index.html?e=your@email.com
```

When your special someone clicks "YES", **only you** get notified!

Your friends can create their own links with their own notification settings.

## 📂 Files

- `index.html` - Main page
- `style.css` - All the beautiful styling
- `script.js` - All the magic happens here
- `NOTIFICATION_SETUP.md` - Detailed notification instructions
- `README.md` - This file!

## 🌐 Hosting Options

### Free Options:

- **GitHub Pages** (Free, easy)
- **Netlify** (Free, drag & drop)
- **Vercel** (Free, instant deployment)
- **Firebase Hosting** (Free tier available)

### Quick Deploy:

1. Create a GitHub repository
2. Upload these files
3. Enable GitHub Pages in settings
4. Share your link!

## 💡 Tips

- Test it yourself first by clicking YES
- Check browser console for your shareable link
- Settings are saved locally (localStorage)
- Each visitor can set their own notifications
- Works on all devices!

## 🎉 Perfect For

- Valentine's Day proposals 💖
- Asking someone to be your Valentine
- Romantic surprises
- Fun way to pop the question
- Sharing with friends who want to do the same!

## ❓ Troubleshooting

**Setup page not showing?**

- Clear your browser cache
- Clear localStorage: Console → `localStorage.clear()` → Refresh

**Not receiving notifications?**

- Email: Check spam, verify FormSubmit confirmation
- Discord: Verify webhook URL is correct
- Telegram: Ensure bot token and chat ID are correct

**Want to reset?**

- Open browser console (F12)
- Type: `localStorage.clear()`
- Refresh the page

## 🤝 Share With Friends

Just send them the base URL (without parameters). They'll:

1. See the setup page
2. Enter their own notification details
3. Get their own personalized link

Everyone's notifications are separate and private!

---

Made with ❤️ for Valentine's Day 2026

Good luck with your Valentine's proposal! 🌹
