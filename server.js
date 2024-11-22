const express = require('express');
const { Telegraf } = require('telegraf');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Initialize Telegram Bot
const bot = new Telegraf(process.env.BOT_TOKEN);

// Example endpoint to get devices
app.get('/getDevices', (req, res) => {
    const devices = [
        { id: "1", name: "Device 1" },
        { id: "2", name: "Device 2" }
    ];
    res.json(devices);
});

// Command to get devices
bot.command('GETDEVICES', (ctx) => {
    ctx.reply('Daftar perangkat yang terhubung: [Daftar perangkat]');
});

// Command to select a device
bot.command('SELECTDEVICE', (ctx) => {
    ctx.reply('Silakan pilih perangkat yang ingin Anda kontrol.');
});

// Command to unselect a device
bot.command('UNSELECTDEVICE', (ctx) => {
    ctx.reply('Perangkat telah dibatalkan.');
});

// Command to get account info
bot.command('GETACCOUNT', (ctx) => {
    ctx.reply('Daftar akun yang terhubung: [Daftar akun]');
});

// Command to get notifications
bot.command('GETNOTIFICATION', (ctx) => {
    ctx.reply('Notifikasi yang masuk: [Daftar notifikasi]');
});

// Start the bot
bot.launch().then(() => {
    console.log('Bot Telegram berjalan...');
});

// Start the Express server
app.listen(PORT, () => {
    console.log(`Server berjalan di http://77.37.54.94:3000`);
});